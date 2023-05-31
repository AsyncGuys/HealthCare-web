
import img from "../Assets/register/health.png"
import logo from "../Assets/Logo/HealthLogo.png.png"
import {Link} from 'react-router-dom'


const Register2 = ()=>{

    return (
        <div >
             <div className="top-[80px] mb-[100px] md:top-[120px] relative min-h-screen py-10">
        <div className="container mx-auto ">
            <div
                className="flex flex-col justify-between md:flex-row w-[90%] lg:w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">

                <div className="w-full lg:w-1/2 py-2 px-12 ">
                    <div className="mx-auto w-[80%]">
                        <img src={logo} alt="" className=" " />


                
                        <form action="#" className="text-[12.5px] text-medium">
                        <div className="mb-6 text-[12.5px]">
                            <h6 className="font-[MerriWeather]">Username</h6>
                            <input type="text"
                                className="form-control block font-[MerriWeather] w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Username" />
                        </div>

                     
                        <div className="mb-6 text-[12.5px]">
                            <h6 className="font-[MerriWeather]">Password</h6>
                            <input type="password"
                                className="form-control font-[MerriWeather] block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput2" placeholder="Password" />
                        </div>
                    </form>

                        <div className="flex justify-between items-center mb-6">


                        </div>

                        <div className="text-center lg:text-left">
                            <div className="flex">
                                <button className="w-full px-6 py-2 mt-4 text-white bg-[#3F72AF] rounded-lg "><Link to="/register">Login</Link></button>
                            </div>
                            <p className="text-sm text-center mt-1 font-dark text-black text-black">
                                Dont have an account? <a href="#" className="font-medium text-blue-500">Register</a>
                            </p>
                        </div>

                    </div>
                </div>


                <div className=" lg:w-1/2  h-screen h-full hidden lg:block ">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default Register2