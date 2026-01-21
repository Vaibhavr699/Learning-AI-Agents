import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7,
});

export const generalAgent = async (input) => {
  const response = await model.invoke(
    `You are a helpful assistant.
Answer the following question in a clear and simple way:

${input}`
  );

  return response.content;
};
