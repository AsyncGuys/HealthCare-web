import imagedata from "../../utils/imageresultdata";
import resultimg from "../../Assets/resultphoto.png";
import { Link } from "react-router-dom";
const success = ["normal", "notumor", "non_demented"];
const ImageResult = ({ name, result }) => {
  return (
    <div className="mt-28 flex flex-col  items-center w-full h-[100vh] gap-4">
      <div className="">
        <img src={resultimg} className="min-w-[300px] w-[400px] h-auto" />
      </div>
      {!success.includes(result) ? (
        <>
          <h1 className="font-bold text-center text-2xl text-blue-60  px-2">
            As per my analysis, patient has{" "}
            <span className="text-red-600">{result}</span> disease
          </h1>
          <h4 className="font-medium text-center text-xl mb-3">
            Patient should consult the doctor
          </h4>
          <button className="bg-blue-500 rounded-full font-poppins font-bold text-base leading-20 text-white mix-blend-normal object-contain p-3 min-w-[100px]">
            <Link to="/map" className="">
              Go Checkout Nearby Hospitals
            </Link>
          </button>
        </>
      ) : (
        <h1 className="font-bold text-2xl text-blue-600 mb-4">
          As per my analysis, Patient doesn't have{" "}
          <span className="text-red-600">{name}</span> disease
        </h1>
      )}
    </div>
  );
};

export default ImageResult;
