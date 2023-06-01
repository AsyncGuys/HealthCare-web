
const DiabetessForm = () => {
  return (
    <div className="mt-20 mb-14">
 <form className="max-w-md mx-auto">
  <div className="mb-4">
    <label htmlFor="gender" className="block font-bold mb-1">Gender</label>
    <select id="gender" name="gender" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0"></option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="age" className="block font-bold mb-1">Age</label>
    <input id="age" type="number" name="age" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="hypertension" className="block font-bold mb-1">Hypertension</label>
    <select id="hypertension" name="hypertension" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0"></option>
      <option value="0">No</option>
      <option value="1">Yes</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="heart-disease" className="block font-bold mb-1">Heart Disease</label>
    <select id="heart-disease" name="heart_disease" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0">No</option>
      <option value="1">Yes</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="smoking-history" className="block font-bold mb-1">Smoking History</label>
    <select id="smoking-history" name="smoking_history" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="never">Never</option>
      <option value="occasional">Occasional</option>
      <option value="regular">Regular</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="bmi" className="block font-bold mb-1">BMI</label>
    <input id="bmi" type="number" step="0.01" name="bmi" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="hbac-level" className="block font-bold mb-1">HbAC Level</label>
    <input id="hbac-level" type="number" step="0.01" name="HbA1c_level" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="blood-glucose" className="block font-bold mb-1">Blood Glucose</label>
    <input id="blood-glucose" type="number" step="0.01" name="blood_glucose_level" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="diabetes" className="block font-bold mb-1">Diabetes</label>
    <select id="diabetes" name="diabetes" className="w-full p-2 border border-gray-300 rounded-md">
       <option value="0">No</option>
    </select>
    </div>
    <button type="submit" className="bg-blue-500 rounded-full font-poppins font-bold text-base leading-20 text-white mix-blend-normal object-contain p-3 min-w-[100px]">Submit</button>
    </form>
    </div>
  )
}

export default DiabetessForm