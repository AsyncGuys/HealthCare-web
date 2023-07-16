
import banner from "../Assets/banner.svg";
import { useNavigate } from "react-router-dom";
// import Chatbot from "../components/common/Chatbot";

const Landing = () => {
      const navigate=useNavigate()
      const gotoCheckUP=()=>{
        navigate('checkup')
      }
  return (
    <div className="w-full h-[100vh]">
      <div className="flex h-[100vh] mt-22 items-center gap-3">
            <div className="w-[40%]  ml-28 text-left">
                  <h1 className="font-poppins font-bold text-5xl leading-10 text-black mix-blend-normal mb-5">Virtual हेल्थCare for You</h1>
                  <p className="font-mulish text-2xl font-light leading-8 text-gray-700 mix-blend-normal mb-4 ">हेल्थCare provides progressive and affordable healthcare, accessible online for everyone</p>
                  <button className="bg-blue-500 rounded-full font-poppins font-bold text-base leading-20 text-white mix-blend-normal object-contain p-3 min-w-[170px]" onClick={gotoCheckUP}>Start Checkup Now</button>
            </div>
            <div className="w-[50%] ml-6 m-auto" id="homesvg">
               <img src={banner} className="h-auto m-auto"/>
            </div>
      </div>
      {/* <Chatbot/> */}
    </div>
  )
}

export default Landing