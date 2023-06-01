import { useState } from "react";
import { GrClose } from "react-icons/gr";
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (inputMessage) => {
    if (!inputMessage) return;
    setMessages((prevMessages) => [...inputMessage]);
    setInputMessage("");
    try {
      const response = await axios.post("/api/chat", { message: inputMessage }); // Replace with your API endpoint for chat
      setMessages((prevMessages) => [...inputMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
    const response = await fetch(`http://127.0.0.1:4000/ai-doctor`, {
      method: "POST",
      body: inputMessage,
    });
    const data = await response.json();
    setMessages(data);
  };

  return (
    <div className="fixed bottom-4 right-4">
      {!isOpen && (
        <button
          className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center"
          onClick={toggleChatbox}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12h18"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 6h18"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 18h18"
            />
          </svg>
        </button>
      )}
      {isOpen && (
        <div className="bg-gradient-to-b from-blue-200 to-white  rounded-lg p-4 w-[350px] h-auto shadow-xl transition-colors duration-100">
          <div className="mb-2 pb-2">
            <button className="font-2xl font-extrabold" onClick={toggleChatbox}>
              <GrClose style={{ fontWeight: "bolder" }} />
            </button>
            <h1 className="text-center font-poppins font-bold mix-blend-normal mb-2">
              Your AI Doctor
            </h1>
          </div>
          <div className="h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className="mb-2  bg-blue-500 text-white rounded-lg p-3 max-w-xs w-full break-words transition-all duration-100"
              >
                {message}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="border rounded p-2 w-full outline-none "
              placeholder="Type your message..."
              onChange={(e) => {
                setInputMessage(e.target.value);
              }}
              name="inputmsg"
              value={inputMessage}
            />
            <button
              className="bg-[#146C94] text-white rounded-xl px-4 py-2 ml-2 mt-3 font-poppins"
              onClick={() => handleSendMessage(inputMessage)}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
