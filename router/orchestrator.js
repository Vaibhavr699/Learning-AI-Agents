import { codingAgent } from "../agents/codingAgent.js";
import { generalAgent } from "../agents/generalAgent.js";
import { detectIntent } from "../agents/intentAgent.js";
const history = [];
export const orchestrator = async(input) => {
    const intent = await detectIntent(input);

    if(intent === "coding"){
        console.log(`Intent : ${intent}`);
        console.log("Calling code agent");
        
        history.push(codingAgent, generalAgent);

        return await codingAgent(input);
    }else{
        console.log("Calling general agent");
        
        return await generalAgent(input);
    }
};
