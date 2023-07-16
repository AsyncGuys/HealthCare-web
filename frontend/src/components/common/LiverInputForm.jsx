import { useFormik } from "formik";
import { useState } from "react";
import FormResult from "./FormResult";
const LiverInputForm = () => {
  const [data,setdata]=useState(null);
  const [result, setResult] = useState(false);
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      age: 0,
      gender: 0,
      total_Bilirubin: 0,
      direct_Bilirubin: 0,
      alkaline_Phosphotase: 0,
      alamine_Aminotransferase: 0,
      aspartate_Aminotransferase: 0,
      total_protein: 0,
      albumim: 0,
      ratio: 0,
    },
    onSubmit: async (values, { resetForm }) => {
      // try{
      //       await addDoc(postref,{
      //             title:values.title,
      //             description:values.description,
      //             id:user?.uid,
      //             username:user?.displayName
      //       })
      //       navigate("/");
      // }
      // catch(error){
      //       alert(error);
      // }
      console.log(values);

      try {
        const response = await fetch("https://healthcare-1bc3.onrender.com/disease/liver", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.predict);
        setdata(data.predict)
        setResult(true)
      } catch (error) {
        console.log( error);
      }
    },
  });
  return (
    <div className="mt-24 mb-14">
     {!result &&     <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="age" className="block font-bold mb-1">
            Age
          </label>
          <input
            id="age"
            type="number"
            name="age"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.age}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block font-bold mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.gender}
          >
            {/* <option value="0"></option> */}
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="total_Bilirubin" className="block font-bold mb-1">
            Total Bilirubin
          </label>
          <input
            id="total_Bilirubin"
            type="number"
            name="total_Bilirubin"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.total_Bilirubin}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="direct_Bilirubin" className="block font-bold mb-1">
            Direct Bilirubin
          </label>
          <input
            id="direct_Bilirubin"
            type="number"
            name="direct_Bilirubin"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.direct_Bilirubin}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="alkaline_Phosphotase"
            className="block font-bold mb-1"
          >
            Alkaline Phosphotase
          </label>
          <input
            id="alkaline_Phosphotase"
            type="number"
            name="alkaline_Phosphotase"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.alkaline_Phosphotase}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="alamine_Aminotransferase"
            className="block font-bold mb-1"
          >
            Alamine Aminotransferase
          </label>
          <input
            id="alamine_Aminotransferase"
            type="number"
            name="alamine_Aminotransferase"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.alamine_Aminotransferase}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="aspartate_Aminotransferase"
            className="block font-bold mb-1"
          >
            Aspartate Aminotransferase
          </label>
          <input
            id="aspartate_Aminotransferase"
            type="number"
            name="aspartate_Aminotransferase"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.aspartate_Aminotransferase}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="total_protein" className="block font-bold mb-1">
            {" "}
            Total Protein
          </label>
          <input
            id="total_protein"
            type="number"
            name="total_protein"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.total_protein}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="albumim" className="block font-bold mb-1">
            Albumimm
          </label>
          <input
            id="albumim"
            type="number"
            name="albumim"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.albumim}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ratio" className="block font-bold mb-1">
            Albumin and Globulin Ratio
          </label>
          <input
            id="ratio"
            type="number"
            name="ratio"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.ratio}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded-full font-poppins font-bold text-base leading-20 text-white mix-blend-normal object-contain p-3 min-w-[100px]"
        >
          Submit
        </button>
      </form>}
      {result && <FormResult answer={data} diseasename='Liver'/>}
    </div>
  );
};

export default LiverInputForm;