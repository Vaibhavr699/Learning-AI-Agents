import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv"

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
});

export const codingAgent = async (input) => {
  const response = await model.invoke(
    `You are a coding assistant. Write clean Node.js code for the following request:\n${input}`
  );

  return response.content;
};
