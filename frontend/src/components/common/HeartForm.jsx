import { useFormik } from "formik";
import FormResult from "./FormResult";
import { useState } from "react";
const HeartForm = () => {
  const [data,setdata]=useState(null);
  const [result, setResult] = useState(false);
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      sex: 0,
      age: 0,
      cp: 0,
      trtbps: 0,
      chol: 0,
      fbs: 0,
      rest_ecg: 0,
      thalach: 0,
      exang: 0,
      oldpeak: 0,
      slp: 0,
      caa: 0,
      thall: 0,
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
        const response = await fetch("https://healthcare-1bc3.onrender.com/disease/heart", {
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
    <div className="mt-24 mb-28">
      {!result && (
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="gender" className="block font-bold mb-1">
              Gender
            </label>
            <select
              id="gender"
              name="sex"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.sex}
            >
              {/* <option value="0"></option> */}
              <option value="0">Female</option>
              <option value="1">Male</option>
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
            <label htmlFor="chestpain" className="block font-bold mb-1">
              Chestpain
            </label>
            <select
              id="chestpain"
              name="cp"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.cp}
            >
              {/* <option value="0"></option> */}
              <option value="0">typical angina</option>
              <option value="1">atypical angina</option>
              <option value="2">non-anginal pain</option>
              <option value="3">asymptomatic</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="trtbps" className="block font-bold mb-1">
              BP(94-300)
            </label>
            <input
              id="trtbps"
              type="number"
              step="0.01"
              name="trtbps"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.trtbps}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="chol" className="block font-bold mb-1">
              Cholestrol(126-564)
            </label>
            <input
              id="chol"
              type="number"
              step="0.01"
              name="chol"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.chol}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fbs" className="block font-bold mb-1">
              Is Fast Blood Sugar?
            </label>
            <select
              id="fbs"
              name="fbs"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.fbs}
            >
              {/* <option value="0"></option> */}
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="restecg" className="block font-bold mb-1">
              RestECG
            </label>
            <select
              id="restecg"
              name="rest_ecg"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.rest_ecg}
            >
              {/* <option value="0"></option> */}
              <option value="0">normal</option>
              <option value="1">having ST-T wave abnormality</option>
              <option value="2">
                showing probable or definite left ventricular hypertrophy by
                Estes&apos;criteria
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="thalach" className="block font-bold mb-1">
              Maximum Heart Rate
            </label>
            <input
              id="thalach"
              type="number"
              step="0.01"
              name="thalach"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.thalach}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exang" className="block font-bold mb-1">
              Exercise induced angina
            </label>
            <select
              id="exang"
              name="exang"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.exang}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="oldpeak" className="block font-bold mb-1">
              Old Peak
            </label>
            <input
              id="oldpeak"
              type="number"
              step="0.01"
              name="oldpeak"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.oldpeak}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="slp" className="block font-bold mb-1">
              Slope of the peak exercise
            </label>
            <select
              id="slp"
              name="slp"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.slp}
            >
              {/* <option value="0"></option> */}
              <option value="0">Unsloping</option>
              <option value="1">flat</option>
              <option value="2">downsloping</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="caa" className="block font-bold mb-1">
              Slope Number of major vessels
            </label>
            <select
              id="caa"
              name="caa"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.caa}
            >
              {/* <option value="0"></option> */}
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="thall" className="block font-bold mb-1">
              Slope thalassemia
            </label>
            <select
              id="thall"
              name="thall"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={values.thall}
            >
              {/* <option value="0"></option> */}
              <option value="0">null</option>
              <option value="1">fixed defect</option>
              <option value="2">normal</option>
              <option value="3">reversable defect</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 rounded-full font-poppins font-bold text-base leading-20 text-white mix-blend-normal object-contain p-3 min-w-[100px]"
          >
            Submit
          </button>
        </form>
      )}
      {result && <FormResult answer={data} diseasename='Heart'/>}
    </div>
  );
};

export default HeartForm;