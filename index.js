import dotenv from "dotenv";
dotenv.config();

import readline from "readline";
import { orchestrator } from "./router/orchestrator.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const run = async () => {
  console.log("Welcome! Type your query and press Enter (type 'exit' to quit).");

  rl.on("line", async (input) => {
    const trimmed = input.trim();
    if (trimmed.toLowerCase() === "exit") {
      console.log("Goodbye!");
      rl.close();
      process.exit(0);
    }

    const output = await orchestrator(trimmed);
    console.log("Output:", output);
    console.log("\nType another query or 'exit' to quit:");
  });
};

run();
