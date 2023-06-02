import axios from "axios";
import { useState } from "react";
import ImageResult from "./ImageResult";
const Eye = () => {
  const [result,setResult]=useState(false);
  const [data,setdata]=useState(null)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", event.target.image.files[0]);
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/eye",
        formData
      );
      // Handle the response
      // console.log(response);
      const data = await response.data.prediction;
      // console.log(data);
      setdata(data)
      setResult(true);
    } catch (error) {
      // Handle the error
      console.error(error);
    }

  };
  return (
    <div className=" w-full h-auto">
    {!result &&   <div className="w-full h-[100vh] flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" accept="image/" />
          <button
            type="submit"
            className="bg-blue-500 rounded-full font-poppins font-bold text-base leading-20 text-white mix-blend-normal object-contain p-3 min-w-[100px]"
          >
            Submit
          </button>
        </form>
      </div>}
      {result && <ImageResult name='eye' result={data}/>}
    </div>
  );
};

export default Eye;
