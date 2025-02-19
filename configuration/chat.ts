import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Greetings, my name is ${AI_NAME}, I am indentured to ${OWNER_NAME} as an AI assistant. What financial valuation queries do you have?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Apologies, I cannot generating a response at the moment. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Sorry, I have reached my word cutoff. Shall I continue?`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
