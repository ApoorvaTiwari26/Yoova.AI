import axios from 'axios';

const API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with actual key

export const generateContent = async (prompt, keywords) => {
  const fullPrompt = `Generate social media content with the following prompt: "${prompt}". 
  Include these keywords: ${keywords.join(", ")}. Add suitable emojis.`;

  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + API_KEY,
      {
        contents: [{ parts: [{ text: fullPrompt }] }]
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    return response.data.candidates[0]?.content.parts[0]?.text || "No content generated.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Something went wrong with AI generation.";
  }
};
