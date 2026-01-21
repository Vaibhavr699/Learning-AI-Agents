import { codingAgent } from "../agents/codingAgent.js";
import { generalAgent } from "../agents/generalAgent.js";
import { detectIntent } from "../agents/intentAgent.js";

export const orchestrator = async(input) => {
    const intent = await detectIntent(input);

    if(intent === "coding"){
        console.log(`Intent : ${intent}`);
        console.log("Calling code agent");
        
        return await codingAgent(input);
    }else{
        console.log("Calling general agent");
        
        return await generalAgent(input);
    }
};
