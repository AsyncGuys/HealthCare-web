import { useNavigate } from "react-router-dom"
const Diseasecard = ({name,description,image,moreinfo,key,route}) => {
    const navigate=useNavigate()
    const handlecheck=()=>{
      navigate(`/checkup/${route}`)
    }
  return (
      <div className="min-w-screen min-h-screen shadow-md  flex items-center p-5 lg:p-10 overflow-hidden relative" key={key}>
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
              <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                  <div className="relative border-t-[4px] border-b-[4px] border-[#CD1818] rounded-lg p-2">
                      <img src={image} className="w-full shadow-lg  relative z-10" alt=""/>
                      <div className="border-4 border-[#CD1818]-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                  </div>
              </div>
                <div className="w-full md:w-1/2 px-8">
                  <div className="mb-10">
                      <h1 className="font-bold italic  uppercase text-4xl mb-5">{name}</h1>
                      <p className="text-lg">{description}<a href={moreinfo} target="_blank" rel="noreferrer" className="opacity-50 text-gray-900  font-bold  hover:opacity-100 inline-block text-md font-bold  leading-none border-b  border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                  </div>
                  <div>
                      <div className="inline-block align-bottom">
                          <button className="bg-[#CD1818] opacity-75 hover:opacity-100 text-[#ffffff] hover:text-gray-900 rounded-full px-10 py-2 font-bold z-50" onClick={handlecheck}><i className="mdi mdi-cart -ml-2 mr-2" ></i>check-up</button>
                      </div>
                  </div>
                </div>
          </div>
      </div>
   </div>
  )
}

export default Diseasecard