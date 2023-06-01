const LiverInputForm = () => {
  return (
    <div className="mt-24 mb-14">
      <form className="max-w-md mx-auto">
      <div className="mb-4">
    <label htmlFor="age" className="block font-bold mb-1">Age</label>
    <input id="age" type="number" name="age" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
      <div className="mb-4">
      <label htmlFor="gender" className="block font-bold mb-1">Gender</label>
    <select id="gender" name="gender" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0"></option>
      <option value="0">Male</option>
      <option value="1">Female</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="total_Bilirubin" className="block font-bold mb-1">Total Bilirubin</label>
    <input id="total_Bilirubin" type="number" name="total_Bilirubin" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="direct_Bilirubin" className="block font-bold mb-1">Direct Bilirubin</label>
    <input id="direct_Bilirubin" type="number" name="direct_Bilirubin" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="alkaline_Phosphotase" className="block font-bold mb-1">Alkaline Phosphotase</label>
    <input id="alkaline_Phosphotase" type="number" name="alkaline_Phosphotase" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="alamine_Aminotransferase" className="block font-bold mb-1">Alamine Aminotransferase</label>
    <input id="alamine_Aminotransferase" type="number" name="alamine_Aminotransferase" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="aspartate_Aminotransferase" className="block font-bold mb-1">Aspartate Aminotransferase</label>
    <input id="aspartate_Aminotransferase" type="number" name="aspartate_Aminotransferase" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="total_protein" className="block font-bold mb-1"> Total Protein</label>
    <input id="total_protein" type="number" name="total_protein" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="albumim" className="block font-bold mb-1">Albumimm</label>
    <input id="albumim" type="number" name="albumim" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="ratio" className="block font-bold mb-1">Albumin and Globulin Ratio</label>
    <input id="ratio" type="number" name="ratio" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <button type="submit" className="bg-blue-500 rounded-full font-poppins font-bold text-base leading-20 text-white mix-blend-normal object-contain p-3 min-w-[100px]">Submit</button>
      </form>
    </div>
  )
}

export default LiverInputForm