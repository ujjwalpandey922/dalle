import { surpriseMePrompts } from "@/constant";

export const randomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const resultPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompt) return randomPrompt(prompt);
  return resultPrompt;
};
