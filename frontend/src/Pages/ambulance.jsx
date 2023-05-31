import { useState } from 'react';
import ambulanceBackground from '../Assets/Card/amb.jpg'
const AmbulanceDetails = ({ city }) => {
  // Assuming you have ambulance details for each city {dummy data }
  const ambulanceDetails = {
    London: [
      { id: 1, name: 'Ambulance A', contact: '123-456-7890' },
      { id: 2, name: 'Ambulance B', contact: '987-654-3210' },
    ],
    NewYork: [
      { id: 3, name: 'Ambulance C', contact: '111-222-3333' },
      { id: 4, name: 'Ambulance D', contact: '444-555-6666' },
    ],
    Paris: [
      { id: 5, name: 'Ambulance E', contact: '999-888-7777' },
      { id: 6, name: 'Ambulance F', contact: '222-333-4444' },
    ],
  };

  const [selectedCity, setSelectedCity] = useState(city);
  const filteredAmbulances = ambulanceDetails[selectedCity] || [];

  return (
    <div className="flex flex-col  bg-[#E5E0FF] md:flex-row">
      <div className="w-[35%%] bg-[#5D3891] text-black p-4">
        <h2 className="text-xl font-bold mb-4 underline ">Select a city</h2>
     
        <ul className="space-y-8">
        <div className = "bg-[#E5E0FF] border-double rounded-lg border-4 border-black">
          <li
            className={`cursor-pointer ${
              selectedCity === 'London' ? 'font-bold' : ''
            }`}
            onClick={() => setSelectedCity('London')}
          >
            London
          </li>
          </div> 
          <div className = "bg-[#E5E0FF] border-double rounded-lg border-4 border-black">
          <li
            className={`cursor-pointer ${
              selectedCity === 'NewYork' ? 'font-bold' : ''
            }`}
            onClick={() => setSelectedCity('NewYork')}
          >
            New York
          </li>
          </div>
          <div className = "bg-[#E5E0FF] border-double rounded-lg border-4 border-black">
          <li
            className={`cursor-pointer ${
              selectedCity === 'Paris' ? 'font-bold' : ''
            }`}
            onClick={() => setSelectedCity('Paris')}
          >
            Paris
          </li>
          </div>
        </ul>
        <img
        src={ambulanceBackground}
          alt="Ambulance Background"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
      </div>
      <div className=" w-[65%] bg-[#E5E0FF]flex-1 p-4">
        <h2 className="text-xl font-bold mb-4">Ambulance Details in {selectedCity}</h2>
        {filteredAmbulances.length === 0 ? (
          <p>No ambulance details available.</p>
        ) : (
          <ul className="space-y-4">
            {filteredAmbulances.map((ambulance) => (
              <li key={ambulance.id}>
                <h3 className="text-lg font-bold">{ambulance.name}</h3>
                <p>Contact: {ambulance.contact}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-3xl w-full p-8">
        <AmbulanceDetails city="London" />
      </div>
    </div>
  );
};

export default App;


