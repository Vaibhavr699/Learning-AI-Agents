import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
  apiKey: process.env.OPENAI_API_KEY,
});

export const detectIntent = async (input) => {
  const prompt = `
You are an AI that classifies user queries.

Classify the following input into one of these two categories:
- "coding" = any request to write, debug, explain, or modify code
- "general" = any other question, explanation, or advice request

Only reply with either "coding" or "general".

Input: "${input}"
`;

  const response = await model.invoke(prompt);

  return response.content.trim().toLowerCase();
};
