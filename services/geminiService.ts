
// Use GoogleGenAI and Type from @google/genai as per guidelines
import { GoogleGenAI, Type } from "@google/genai";
import { Memory } from "../types";

// Schema defined as an object literal for responseSchema compliance
const processEntrySchema = {
  type: Type.OBJECT,
  properties: {
    locationName: {
      type: Type.STRING,
      description: "The name of the city, region, or landmark identified.",
    },
    lat: {
      type: Type.NUMBER,
      description: "The estimated latitude of the location.",
    },
    lng: {
      type: Type.NUMBER,
      description: "The estimated longitude of the location.",
    },
    reflection: {
      type: Type.STRING,
      description: "A short, poetic, philosophical reflection (max 2 sentences) capturing the atmosphere of the place. If the user provided a description, refine it into a contemplative style. If not, generate one based on the location's vibe.",
    },
  },
  required: ["locationName", "lat", "lng", "reflection"],
};

export const processMemoryInput = async (input: string): Promise<Omit<Memory, "id" | "timestamp">> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) throw new Error("API Key not found");

    // Initialize with named parameter as required
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      // Using gemini-3-flash-preview for text-based analysis tasks
      model: "gemini-3-flash-preview",
      contents: `The user is adding a memory to a philosophical travel log.
      Input: "${input}"
      
      Extract the location. If the input is just a city name, generate coordinates and a poetic reflection.
      If the input contains a story, extract the location and summarize the feeling into a poetic reflection.
      
      Atmosphere: Quiet, Earth-centric, minimal, thoughtful.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: processEntrySchema,
        temperature: 0.7, 
      },
    });

    // Access the .text property directly (do not call as a function)
    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const data = JSON.parse(text);
    
    return {
      locationName: data.locationName,
      lat: data.lat,
      lng: data.lng,
      reflection: data.reflection,
    };
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw error;
  }
};
