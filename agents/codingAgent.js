import { ChatOpenAI } from "@langchain/openai";
import { addMessage, getHistory } from "../memory.js";

const model = new ChatOpenAI({ temperature: 0 });

export const codingAgent = async (input) => {
  addMessage("user", input);

  const history = getHistory();

  const messages = [
    ...history.map(m => ({ role: m.role, content: m.content })),
    {
      role: "user",
      content: `You are a coding assistant. Write clean Node.js code for the following request:\n${input}`,
    },
  ];

  const response = await model.invoke(messages);

  addMessage("assistant", response.content);

  return response.content;
};
