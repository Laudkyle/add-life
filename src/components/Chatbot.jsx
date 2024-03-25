import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false); // State to track typing animation

  const sendMessage = async () => {
    try {
      setIsTyping(true); // Start typing animation
      const res = await axios.post('http://localhost:5000/chat', { message });
      const botResponse = res.data.bot_response;
      await typeResponse(botResponse); // Type the response
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const typeResponse = async (text) => {
    for (let i = 0; i < text.length; i++) {
      setResponse(text.substring(0, i + 1)); // Update response character by character
      await sleep(50); // Adjust typing speed as needed
    }
    setIsTyping(false); // Stop typing animation when done
  };

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  return (
    <div className="fixed bottom-0 right-0 m-4">
      <div className="bg-white/10 p-6 rounded shadow-md w-96">
        <div className="mb-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hello yah..."
            className="border p-2 w-full"
          />
        </div>
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
        <div className="mt-4">
          {isTyping && (
            <div className="bg-gray-200 p-2 rounded">
              <strong>Shannel:</strong> <span>{response}</span> <span className="animate-bounce">...</span>
            </div>
          )}
          {!isTyping && response && (
            <div className="bg-gray-200 p-2 rounded">
              <strong>Shannel:</strong> {response}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
