
import img from "../Assets/register/health.png"
import logo from "../Assets/Logo/HealthLogo.png.png"
import {Link} from 'react-router-dom'


 const Register = ()=>{

return (

     <div>
     {/* <Navbar /> */}
             <div className=" top-[80px] mb-[70px] md:top-[120px] relative min-h-screen sm:py-30 py-10">
        <div className="container mx-auto ">
            <div
                className="flex flex-col justify-between md:flex-row w-[90%] lg:w-11/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">

                <div className="w-full lg:w-1/2 py-2 px-12 ">
                    <div className="mx-auto w-[80%]" >
                        <img src={logo} alt="" className=" " />

                        <div>



                            <form action="#" className="text-medium text-[12.5px] ">
                                <div className="mt-2">
                                    <h6 className="font-[MerriWeather]">Name</h6>
                                    <input type="text" placeholder="Name"
                                        className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full" />
                                </div>

                                <div className="mt-5">
                                    <h6 className="font-[MerriWeather]">Password</h6>
                                    <input type="password" placeholder="Password"
                                        className="border rounded font-[MerriWeather] border-gray-400 py-1 px-2 w-full" />
                                </div>
                                <div className="mt-2">
                                <h6 className="font-[MerriWeather]">confirm password</h6>
                                    <input type="text" placeholder="Name"
                                        className="border font-[MerriWeather] rounded border-gray-400 py-1 px-2 w-full" />
                                </div>

                                <div className="py-1">

                                </div>

                                <div>
                                    <p className="text-[10px] font-dark text-black text-black">
                                        By signing up, you agree to our <a href="#"
                                            className="font-medium text-blue-500">terms and
                                            conditions</a>

                                    </p>
                                </div>

                                <div className="py-1">

                                </div>
                                <div className="flex items-start py-1">

                                    <div className="flex items-center h-5">

                                        <input id="terms" aria-describedby="terms" type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-[#DBE2EF] focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required="" />
                                    </div>

                                    <div className="ml-3 text-sm">

                                        <label  className="font-dark text-black text-black">I Agree <a
                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                href="#"></a></label>
                                    </div>
                                </div>
                                <div className="flex">
                                    <button className="w-full px-6 py-2 mt-4 text-white bg-[#3F72AF] rounded-lg "><Link to="/register2">Create  Account</Link></button>
                                </div>


                                <p className="text-sm text-center mt-1 font-dark text-black text-black">
                                    Already registered? <a href="#" className="font-medium text-blue-500">Log in</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                <div className=" lg:w-1/2  h-screen h-full hidden lg:block "
                    >
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
    {/* <Footer />  */}
     </div>

)


}

export default Register