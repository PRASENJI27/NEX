
import { GoogleGenAI } from "@google/genai";

export const getAIBrainstorm = async (prompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a creative web strategist for NEX WEBDEVELOPER. 
      A client is asking for ideas: "${prompt}". 
      Provide 3 concise, innovative web design or feature ideas that combine modern USA-style minimalism with global appeal. 
      Keep the tone professional yet exciting.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a small glitch in my digital brain. Let's talk directly via our contact form!";
  }
};
