import React, { useState } from 'react';
import Chatbot from '../components/Chatbot/Chatbot';
import '../styles/dashboard.css';

export default function Instagram() {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = () => {
    // Add API call here
    setGeneratedContent("Generated Instagram content...");
  };

  return (
    <div className="dashboard-container">
      <h1>Instagram Content Generator</h1>
      <div className="generator-box">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          className="generator-input"
        />
        <button onClick={handleGenerate} className="generate-button">
          Generate Content
        </button>
        {generatedContent && (
          <div className="content-preview">
            <h3>Preview:</h3>
            <p>{generatedContent}</p>
          </div>
        )}
      </div>
      <Chatbot platform="instagram" />
    </div>
  );
}