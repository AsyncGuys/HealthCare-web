import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Bot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Fetch initial message from the backend server
    const fetchInitialMessage = async () => {
      try {
        const response = await axios.post('/api/chat', { message: 'Hello' }); // Replace with your API endpoint for chat
        setMessages([{ text: response.data, isUser: false }]);
      } catch (error) {
        console.error('Error fetching initial message:', error);
      }
    };

    fetchInitialMessage();
  }, []);

  useEffect(() => {
   //bas backend s chatgpt call karna h 
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage) return;
    setMessages((prevMessages) => [...prevMessages, { text: inputMessage, isUser: true }]);
    setInputMessage('');
    try {
      const response = await axios.post('/api/chat', { message: inputMessage }); // Replace with your API endpoint for chat
      setMessages((prevMessages) => [...prevMessages, { text: response.data, isUser: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen w-20">
      <div className="flex-1  overflow-y-auto px-4 py-8">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 p-4 rounded-lg max-w-md ${
              message.isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200'
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-[#E5E0FF]">
        <div className="flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your query...."
            className="flex-grow px-3 py-2 rounded-l-md border border-[#ffffff] focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-[#674188] text-white rounded-r-lg hover:bg-[#5D3891] focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bot;
