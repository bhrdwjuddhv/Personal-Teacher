import OpenAI from 'openai';
import {ApiError} from "../utils/ApiError.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {hiteshPersona, openAiApiKey, piyushPersona} from "../constants.js";


const client = new OpenAI({
    apiKey: openAiApiKey,
});


const askTeacher = asyncHandler(async (req, res) => {
    const {userQuery, teacher, history = []} = req.body;
    const messages = [
        {
            role:'system',
            content: ''
        },
        ...history,
        {
            role:'user',
            content: userQuery
        }
    ]
    if (teacher === 'hitesh'){
        messages[0].content = hiteshPersona
    }
    //piyush
    else{
        messages[0].content = piyushPersona
    }
    const response = await sendToAi(messages)
    return res.status(200).json(
        new ApiResponse(200,response,"Success Getting Response")
    )
})



const sendToAi = async (messages) => {
    try{
        const response = await client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages,
        });
        return response.choices[0].message.content;

    }catch(e){

        throw new ApiError(
            e.status || 500,
            e.message || "Failed to get response from OpenAI",
            [e]
        )
    }
}

export {askTeacher}