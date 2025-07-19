// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview Provides AI-suggested personalized greetings based on visitor information.
 *
 * - personalizedMessageSuggestion - A function that generates a personalized message.
 * - PersonalizedMessageSuggestionInput - The input type for the personalizedMessageSuggestion function.
 * - PersonalizedMessageSuggestionOutput - The return type for the personalizedMessageSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedMessageSuggestionInputSchema = z.object({
  location: z.string().describe('The visitor\s location, if available.'),
  referringWebsite: z.string().describe('The URL of the referring website, if available.'),
});
export type PersonalizedMessageSuggestionInput = z.infer<
  typeof PersonalizedMessageSuggestionInputSchema
>;

const PersonalizedMessageSuggestionOutputSchema = z.object({
  greeting: z.string().describe('A personalized greeting message for the visitor.'),
});
export type PersonalizedMessageSuggestionOutput = z.infer<
  typeof PersonalizedMessageSuggestionOutputSchema
>;

export async function personalizedMessageSuggestion(
  input: PersonalizedMessageSuggestionInput
): Promise<PersonalizedMessageSuggestionOutput> {
  return personalizedMessageSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedMessageSuggestionPrompt',
  input: {schema: PersonalizedMessageSuggestionInputSchema},
  output: {schema: PersonalizedMessageSuggestionOutputSchema},
  prompt: `You are an AI assistant that suggests personalized greeting messages for visitors to a developer portfolio website.

  Consider the following information about the visitor:

  Location: {{location}}
  Referring Website: {{referringWebsite}}

  Generate a short, friendly, and personalized greeting message that acknowledges their location or referring website, if available. If neither is available, create a generic but welcoming greeting. The message should be no more than 3 sentences.
  The portfolio owner's name is Jeremie.

  GREETING: `,
});

const personalizedMessageSuggestionFlow = ai.defineFlow(
  {
    name: 'personalizedMessageSuggestionFlow',
    inputSchema: PersonalizedMessageSuggestionInputSchema,
    outputSchema: PersonalizedMessageSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
