import axios from "axios";
import {baseUrl} from "./constants.js";

export async function askTeacher(teacher, userQuery,history = []) {
  const response = await axios.post(`${baseUrl}/api/v1/request-gpt/ask-ai`, {
    teacher,
    userQuery,
    history:  history.map((entry) => ({
      role: entry.role === 'user' ? 'user' : 'assistant',
      content: entry.text,
    })),
  });

  if (!response.data?.data) {
    throw new Error("No response received from the server.");
  }

  return response.data.data;
}
