import resultimg from "../../Assets/resultphoto.png";
import { Link } from "react-router-dom";
const FormResult = ({ answer, diseasename }) => {
    console.log(answer)
  return (
    <div className="mt-26 flex flex-col justify-around items-center w-full h-[80vh]">
      <div className="">
        <img src={resultimg} className="min-w-[300px] w-[400px] h-auto" />
      </div>
      {answer == "Yes" ? (
        <>
          <h1 className="font-bold text-center text-2xl text-blue-60  px-2">
            As per my analysis, patient has{" "}
            <span className="text-red-600">{diseasename}</span> disease
          </h1>
          <h4 className="font-medium text-center text-xl">
            Patient should consult your doctor
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
          <span className="text-red-600">{diseasename}</span> disease
        </h1>
      )}
    </div>
  );
};

export default FormResult;