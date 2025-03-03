import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Greetings, my name is ${AI_NAME}, I am ${OWNER_NAME}'s AI assistant. What financial valuation queries do you have? \n\n The information provided by this chatbot is for informational and educational purposes only and should not be considered financial, investment, or legal advice. We do not guarantee the accuracy, completeness, or reliability of any information provided. Always conduct your own research and consult with a qualified financial advisor before making any investment or financial decisions. Use of this chatbot is at your own risk.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Apologies, I cannot generating a response at the moment. Please try again later.`;
export const WORD_CUTOFF: number = 10000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Sorry, I have reached my word cutoff. Shall I continue?`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
