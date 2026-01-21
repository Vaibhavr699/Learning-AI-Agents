import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";
import { addMessage, getHistory } from "../memory.js";

dotenv.config();

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7,
});

export const generalAgent = async (input) => {
  addMessage("user", input);

  const history = getHistory();

  const messages = [
    ...history.map(m => ({ role: m.role, content: m.content })),
    {
      role: "user",
      content: `You are a helpful assistant. Answer the following question in a clear and simple way:\n${input}`,
    },
  ];

  const response = await model.invoke(messages);

  addMessage("assistant", response.content);

  return response.content;
};
