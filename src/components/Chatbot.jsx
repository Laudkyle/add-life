import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/chat', { message });
      setResponse(res.data.message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 m-4">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <div className="mb-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="border p-2 w-full"
          />
        </div>
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
        <div className="mt-4">
          {response && (
            <div className="bg-gray-200 p-2 rounded">
              <strong>Bot:</strong> {response}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
