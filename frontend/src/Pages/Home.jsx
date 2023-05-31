// import React from 'react'
import eye from '../Assets/Card/eye.jpg'
import dia from '../Assets/Card/diabeties.jpeg'
import mri from '../Assets/Card/MRI.webp'
import skin from '../Assets/Card/skin.jpg'
 import Navbar from "../components/common/Navbar"
 import Footer from '../Pages/footer.jsx'
const Home = () => {
  return (
  <div className='bg-[#F5F5F5]' >
    <Navbar/>
     <div className='mt-16'>

    {/* heart  */}
 <div className="min-w-screen min-h-screen shadow-md  flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative border-t-[4px] border-b-[4px] border-[#CD1818] rounded-lg p-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtjAPAJMDfGr8gVbJUkM_9cBYDaU5MX1f8BmWhPfneg&usqp=CAU&ec=48665701" className="w-full shadow-lg  relative z-10" alt=""/>
                    <div className="border-4 border-[#CD1818]-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
              <div className="w-full md:w-1/2 px-8">
                <div className="mb-10">
                    <h1 className="font-bold italic  uppercase text-4xl mb-5">Heart</h1>
                    <p className="text-lg">(hart dih-ZEEZ) A type of disease that affects the heart or 
                      blood vessels. The risk of certain heart diseases may be increased by s  
                      moking, high blood pressur
                      e, high cholesterol, unhealthy diet, lack of exercise, and obesity. <a href="#" className="opacity-50 text-gray-900  font-bold  hover:opacity-100 inline-block text-md font-bold  leading-none border-b  border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div className="inline-block align-bottom">
                        <button className="bg-[#CD1818] opacity-75 hover:opacity-100 text-[#ffffff] hover:text-gray-900 rounded-full px-10 py-2 font-bold"><i className="mdi mdi-cart -ml-2 mr-2"></i>check-up</button>
                    </div>
                </div>
              </div>
        </div>
    </div>
 </div>


   {/* eye */}
 <div className="min-w-screen min-h-screen shadow-md  flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative border-t-[4px] border-b-[4px] border-[#CD1818] rounded-lg p-2">
                    <img src={eye} className="w-full shadow-lg  relative z-10" alt=""/>
                    <div className="border-4 border-[#CD1818]-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
              <div className="w-full md:w-1/2 px-8">
                <div className="mb-10">
                    <h1 className="font-bold italic  uppercase text-4xl mb-5">EYE</h1>
                    <p className="text-lg">The leading causes of blindness and low vision in the United States are 
                    primarily age-related eye diseases such as age-related macular degeneration, cataract, diabetic retinopathy, and glaucoma.
                     Other common eye disorders include amblyopia and strabismus.<a href="#" className="opacity-50 text-gray-900  font-bold  hover:opacity-100 inline-block text-md font-bold  leading-none border-b  border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div className="inline-block align-bottom">
                        <button className="bg-[#CD1818] opacity-75 hover:opacity-100 text-[#ffffff] hover:text-gray-900 rounded-full px-10 py-2 font-bold"><i className="mdi mdi-cart -ml-2 mr-2"></i>check-up</button>
                    </div>
                </div>
              </div>
        </div>
    </div>
 </div>

 {/* skin */}

 <div className="min-w-screen min-h-screen shadow-md  flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative border-t-[4px] border-b-[4px] border-[#CD1818] rounded-lg p-2">
                    <img src={skin} className="w-full shadow-lg  relative z-10" alt=""/>
                    <div className="border-4 border-[#CD1818]-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
              <div className="w-full md:w-1/2 px-8">
                <div className="mb-10">
                    <h1 className="font-bold italic  uppercase text-4xl mb-5">SKIN</h1>
                    <p className="text-lg">(hart dih-ZEEZ) A type of disease that affects the heart or 
                      blood vessels. The risk of certain heart diseases may be increased by s  
                      moking, high blood pressur
                      e, high cholesterol, unhealthy diet, lack of exercise, and obesity. <a href="#" className="opacity-50 text-gray-900  font-bold  hover:opacity-100 inline-block text-md font-bold  leading-none border-b  border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div className="inline-block align-bottom">
                        <button className="bg-[#CD1818] opacity-75 hover:opacity-100 text-[#ffffff] hover:text-gray-900 rounded-full px-10 py-2 font-bold"><i className="mdi mdi-cart -ml-2 mr-2"></i>check-up</button>
                    </div>
                </div>
              </div>
        </div>
    </div>
 </div>


  {/* mri */}
 <div className="min-w-screen min-h-screen shadow-md  flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative border-t-[4px] border-b-[4px] border-[#CD1818] rounded-lg p-2">
                    <img src={mri} className="w-full shadow-lg  relative z-10" alt=""/>
                    <div className="border-4 border-[#CD1818]-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
              <div className="w-full md:w-1/2 px-8">
                <div className="mb-10">
                    <h1 className="font-bold italic  uppercase text-4xl mb-5">MRI</h1>
                    <p className="text-lg">(hart dih-ZEEZ) A type of disease that affects the heart or 
                      blood vessels. The risk of certain heart diseases may be increased by s  
                      moking, high blood pressur
                      e, high cholesterol, unhealthy diet, lack of exercise, and obesity. <a href="#" className="opacity-50 text-gray-900  font-bold  hover:opacity-100 inline-block text-md font-bold  leading-none border-b  border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div className="inline-block align-bottom">
                        <button className="bg-[#CD1818] opacity-75 hover:opacity-100 text-[#ffffff] hover:text-gray-900 rounded-full px-10 py-2 font-bold"><i className="mdi mdi-cart -ml-2 mr-2"></i>check-up</button>
                    </div>
                </div>
              </div>
        </div>
    </div>
 </div>

    {/* diabetes */}

 <div className="min-w-screen min-h-screen shadow-md  flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative border-t-[4px] border-b-[4px] border-[#CD1818] rounded-lg p-2">
                    <img src={dia} className="w-full shadow-lg  relative z-10" alt=""/>
                    <div className="border-4 border-[#CD1818]-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
              <div className="w-full md:w-1/2 px-8">
                <div className="mb-10">
                    <h1 className="font-bold italic  uppercase text-4xl mb-5">Diabetes</h1>
                    <p className="text-lg">(hart dih-ZEEZ) A type of disease that affects the heart or 
                      blood vessels. The risk of certain heart diseases may be increased by s  
                      moking, high blood pressur
                      e, high cholesterol, unhealthy diet, lack of exercise, and obesity. <a href="#" className="opacity-50 text-gray-900  font-bold  hover:opacity-100 inline-block text-md font-bold  leading-none border-b  border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div className="inline-block align-bottom">
                        <button className="bg-[#CD1818] opacity-75 hover:opacity-100 text-[#ffffff] hover:text-gray-900 rounded-full px-10 py-2 font-bold"><i className="mdi mdi-cart -ml-2 mr-2"></i>check-up</button>
                    </div>
                </div>
              </div>
        </div>
    </div>
 </div>


  </div>
  <Footer/>
</div>



  )
}

export default Home