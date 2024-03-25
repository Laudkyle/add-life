import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]); // State to store all chat messages
  const [isTyping, setIsTyping] = useState(false); // State to track typing animation

  useEffect(() => {
    // Scroll to the bottom of the chat window when new message is added
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [chats]);

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
    const newChats = [...chats, { message: text, sender: 'bot' }]; // Add bot's message to chats array
    setChats(newChats);
    setIsTyping(false); // Stop typing animation when done
  };

  return (
    <div className="fixed bottom-20 right-0 m-4">
      <div className="bg-white/10 p-6 rounded shadow-md w-96 h-80">
        <div id="chat-window" className="mt-4 mb-4 h-full overflow-y-auto">
          {chats.map((chat, index) => (
            <div key={index} className={`bg-gray-200 p-2 rounded ${chat.sender === 'bot' ? 'text-left' : 'text-right'}`}>
              <strong>{chat.sender === 'bot' ? 'Shannel' : 'You'}:</strong> {chat.message}
            </div>
          ))}
          {isTyping && (
            <div className="bg-gray-200 p-2 rounded text-left">
              <strong>Shannel:</strong> <span>...</span>
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hello yah..."
            className="border p-2 w-full"
          />
          <button onClick={sendMessage} className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9-9 9-9-9zm9 3v-2m0 4v-4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
