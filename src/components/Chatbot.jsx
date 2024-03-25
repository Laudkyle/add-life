import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa'; // Import the Plane icon

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isTyping, setIsTyping] = useState(false); // State to track typing animation

  const sendMessage = async () => {
    try {
      const updatedConversation = [...conversation, { sender: 'user', message }];
      setConversation(updatedConversation);
      setIsTyping(true); // Start typing animation
      const res = await axios.post('http://localhost:5000/chat', { message });
      const botResponse = res.data.bot_response;
      const typingIndicator = 'Shannel is typing...';
      setConversation([...updatedConversation, { sender: 'bot', message: typingIndicator }]);
      setTimeout(() => {
        setConversation([...updatedConversation, { sender: 'bot', message: botResponse }]);
        setIsTyping(false); // Stop typing animation after bot response
      }, 1500); // Typing effect duration
      setMessage(''); // Clear input after sending message
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 m-4 w-96">
      <div className="bg-white/10 p-6 rounded shadow-md h-80 overflow-y-auto">
        <div className="mt-4">
          {conversation.map((chat, index) => (
            <div key={index} className={`bg-gray-200 p-2 rounded ${chat.sender === 'bot' ? 'text-left' : 'text-right'}`}>
              <strong style={{ color: chat.sender === 'user' ? '#fff' : '#555' }}>{chat.sender === 'user' ? 'You:' : 'Shannel:'}</strong> {chat.message}
            </div>
          ))}
          {isTyping && (
            <div className="bg-gray-200 p-2 rounded text-left">
              <strong style={{ color: '#555' }}>Shannel:</strong> Shannel is typing...
            </div>
          )}
        </div>
      </div>
      <div className="bg-white/10 p-6 rounded shadow-md">
        <div className="flex items-center border border-gray-400 rounded">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="p-2 w-full outline-none bg-transparent text-white"
          />
          <button onClick={sendMessage} className="p-2 text-blue-500 hover:text-blue-700">
            <FaPaperPlane size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
