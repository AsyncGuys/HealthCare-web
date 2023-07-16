import { useFormik } from "formik";
import FormResult from "./FormResult";
import { useState } from "react";
const DiabetessForm = () => {
  const [data,setdata]=useState(null);
      const [result, setResult] = useState(false);
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      gender: 0,
      age: 0,
      hypertension: 0,
      heart_disease: 0,
      smoking_history: 0,
      bmi: 0,
      HbA1c_level: 0,
      blood_glucose_level: 0,
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
        const response = await fetch("https://healthcare-1bc3.onrender.com/diabetes", {
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
        console.error("Error:", error);
      }
    },
  });
  return (
    <div className="mt-20 mb-14">
     {!result && 
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
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
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>
        </div>
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
          <label htmlFor="hypertension" className="block font-bold mb-1">
            Hypertension
          </label>
          <select
            id="hypertension"
            name="hypertension"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.hypertension}
          >
            {/* <option value="0"></option> */}
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="heart-disease" className="block font-bold mb-1">
            Heart Disease
          </label>
          <select
            id="heart-disease"
            name="heart_disease"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.heart_disease}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="smoking-history" className="block font-bold mb-1">
            Smoking History
          </label>
          <select
            id="smoking-history"
            name="smoking_history"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.smoking_history}
          >
            <option value="0">Never</option>
            <option value="1">No Info</option>
            <option value="2">Occasional</option>
            <option value="3">Regular</option>
            <option value="4">Used to</option>
            <option value="5">Ever</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="bmi" className="block font-bold mb-1">
            BMI
          </label>
          <input
            id="bmi"
            type="number"
            step="0.01"
            name="bmi"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.bmi}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hbac-level" className="block font-bold mb-1">
            HbAC Level
          </label>
          <input
            id="hbac-level"
            type="number"
            step="0.01"
            name="HbA1c_level"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.HbA1c_level}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="blood-glucose" className="block font-bold mb-1">
            Blood Glucose
          </label>
          <input
            id="blood-glucose"
            type="number"
            step="0.01"
            name="blood_glucose_level"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            value={values.blood_glucose_level}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded-full font-poppins font-bold text-base leading-20 text-white mix-blend-normal object-contain p-3 min-w-[100px]"
        >
          Submit
        </button>
      </form>}
      {result && <FormResult answer={data} diseasename='Diabetes'/>}
    </div>
  );
};

export default DiabetessForm;