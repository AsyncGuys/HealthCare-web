import { useState } from "react";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import botimg from '../../Assets/bot.svg'
const Chatbot = () => {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen,setisOpen]=useState(false);
  const toggleChatbox=()=>{
    setisOpen(!isOpen)
  }
  const handleSubmit = () => {
    setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }])
    sendMessage(inputValue);
    setInputValue('');
  }
  const sendMessage = async (inputMessage) => {
    if (!inputMessage) return;
    console.log(inputMessage)
    try {
      // const response = await fetch(`http://127.0.0.1:3000/ai-doctor`, {
      //   method: "POST",
      //   body: inputMessage,
      // });
      const response = await axios.post(`https://healthcare-1bc3.onrender.com/ai-doctor`, {
        inputMessage:inputMessage
      });
      // axios.post('/api/', {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone'
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      const datafrombot = response.data;
      console.log(datafrombot)
      setChatLog(prevChatLog => [...prevChatLog,{type:'bot',message:datafrombot.data}]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <div className="fixed bottom-10 right-10">
      {!isOpen && (
        <button
          className="w-[70px] h-[70px] rounded-full bg-blue-500 text-white flex items-center justify-center"
          onClick={toggleChatbox}
        >
          {/* <svg
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
          </svg> */}
          <img src={botimg} className="w-[70px] h-[70px]"/>
        </button>
      )}
      {isOpen && (
        <div className="bg-gradient-to-b from-blue-200 to-white  rounded-lg p-4 w-[350px] h-auto shadow-xl transition-colors duration-100">
          <div className="mb-2 pb-2">
            <button className="font-2xl font-extrabold w-[20px] h-[20px]" onClick={toggleChatbox}>
              <GrClose style={{ fontWeight: "bolder"}} />
            </button>
            <h1 className="text-center font-poppins font-bold mix-blend-normal mb-2">
              Your AI Doctor
            </h1>
          </div>
          <div className="h-64 overflow-y-auto"> 
            {chatLog.map((chat, index) => (
              <div
                key={index}
                className="mb-2  text-black rounded-lg p-3 max-w-xs w-full break-words transition-all duration-100"
                style={{backgroundColor: `${chat.type=='user' ? "#ADD8E6":"white"}`}}
              >
                 {chat.message}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="border rounded p-2 w-full outline-none "
              placeholder="Type your message..."
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              name="inputmsg"
              value={inputValue}
            />
          <div className="text-right">
          <button
              className="bg-[#146C94] text-white rounded-xl px-4 py-2 ml-2 mt-3 font-poppins text-right"
              onClick={handleSubmit}
            >
              Send
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;