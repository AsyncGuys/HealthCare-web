
const DiabetessForm = () => {
  return (
    <div className="mt-20">
 <form className="max-w-md mx-auto">
  <div className="mb-4">
    <label htmlFor="gender" className="block font-bold mb-1">Gender</label>
    <select id="gender" name="gender" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="age" className="block font-bold mb-1">Age</label>
    <input id="age" type="number" name="age" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="hypertension" className="block font-bold mb-1">Hypertension</label>
    <select id="hypertension" name="hypertension" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0">No</option>
      <option value="1">Yes</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="heart-disease" className="block font-bold mb-1">Heart Disease</label>
    <select id="heart-disease" name="heart-disease" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0">No</option>
      <option value="1">Yes</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="smoking-history" className="block font-bold mb-1">Smoking History</label>
    <select id="smoking-history" name="smoking-history" className="w-full p-2 border border-gray-300 rounded-md">
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
    <input id="hbac-level" type="number" step="0.01" name="hbac-level" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="blood-glucose" className="block font-bold mb-1">Blood Glucose</label>
    <input id="blood-glucose" type="number" step="0.01" name="blood-glucose" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="diabetes" className="block font-bold mb-1">Diabetes</label>
    <select id="diabetes" name="diabetes" className="w-full p-2 border border-gray-300 rounded-md">
       <option value="0">No</option>
    </select>
    </div>

    </form>
    </div>
  )
}

export default DiabetessForm