import axios from "axios";
import {baseUrl} from "./constants.js";

export class RateLimitError extends Error {
  constructor(retryAfterSeconds) {
    super("Rate limit exceeded");
    this.name = "RateLimitError";
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

export async function askTeacher(teacher, userQuery, history = []) {
  try {
    const response = await axios.post(`${baseUrl}/api/v1/request-gpt/ask-ai`, {
      teacher,
      userQuery,
      history: history.map((entry) => ({
        role: entry.role === 'user' ? 'user' : 'assistant',
        content: entry.text,
      })),
    });

    if (!response.data?.data) {
      throw new Error("No response received from the server.");
    }

    return response.data.data;
  } catch (err) {
    if (err.response?.status === 429) {
      throw new RateLimitError(err.response.data?.retryAfterSeconds ?? 60);
    }
    throw err;
  }
}
