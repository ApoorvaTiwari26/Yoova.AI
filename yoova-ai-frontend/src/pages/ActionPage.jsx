import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Action.css";
import { useAppSettings } from "../context/AppSettingsContext"; // Import context

export default function ActionPage() {
  const { platform } = useParams();
  const [prompt, setPrompt] = useState("");
  const [keywords, setKeywords] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);

  const { fontSize, fontFamily } = useAppSettings(); // Destructure font settings

  const handleGenerate = async () => {
    setLoading(true);
    const fullPrompt = `Generate a social media post for ${platform} based on this prompt: "${prompt}". Include these keywords: ${keywords}. Add emojis where appropriate.`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBfpaPQSv8UhII40AWx_YAEM5Y8tM8n6Ow`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: fullPrompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const content = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No content generated.";
      setGeneratedContent(content);
    } catch (error) {
      console.error("Error generating content:", error);
      setGeneratedContent("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    alert("Content copied to clipboard!");
  };

  return (
    <div className="action-page">
      <div className="action-container">
        <h2>Generate Content for {platform}</h2>

        <label>Prompt:</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your idea or message..."
        />

        <label>Keywords:</label>
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="fitness, health, meal prep..."
        />

        <button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate Content"}
        </button>

        {generatedContent && (
          <div
            className="output-box"
            style={{
              fontSize: fontSize,
              fontFamily: fontFamily,
            }}
          >
            <h4>Generated Content:</h4>
            <p>{generatedContent}</p>
            <button onClick={handleCopy}>Copy Content</button>
            <a
              href={`https://${platform.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="upload-btn"
            >
              Upload to {platform}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
