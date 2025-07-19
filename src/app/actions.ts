"use server";

import { personalizedMessageSuggestion as personalizedMessageSuggestionFlow } from "@/ai/flows/personalized-message-suggestion";
import type { PersonalizedMessageSuggestionInput } from "@/ai/flows/personalized-message-suggestion";

export async function personalizedMessageSuggestion(
  input: PersonalizedMessageSuggestionInput
) {
  try {
    const result = await personalizedMessageSuggestionFlow(input);
    return result;
  } catch (error) {
    console.error("Error in personalizedMessageSuggestion action:", error);
    // Return a generic greeting or an error indicator
    return { greeting: "Welcome to my portfolio! I'm glad you're here." };
  }
}
