import { useState } from 'react';
import ambulanceBackground from '../Assets/Card/amb.jpg'
const AmbulanceDetails = ({ city }) => {
  // Assuming you have ambulance details for each city {dummy data }
  const ambulanceDetails = {
    Delhi: [
      { id: 1, name: 'National Heart Institute', contact: '	011- 26441293' },
      { id: 2, name: 'Sir Ganga Ram Hospital', contact: '011- 25750000' },
      { id: 3, name: 'Batra Hospital', contact: '	011- 26083747' },
      { id: 4, name: 'MP Heart Centre', contact: '011- 6413436' },      
      { id: 5, name: ' Anand Hospital  ', contact: '	011- 2224126' },
      { id: 6, name: ' Jaslok Hospital', contact: '011-40554055' },      

    ],
    Mumbai: [
      { id: 7, name: 'Bombay Hospital', contact: '022-22067676' },
      { id: 8, name: 'Cooper Hospital ', contact: ' 022-26207254' },
      { id: 9, name: 'Sir J.J. Hospital Byculla ', contact: '  022-23739031' },
      { id: 10, name: 'KEM Hospital Parel ', contact: '022-24107000 ' },
      { id: 11, name: 'Poddar Hospital ', contact: ' 24931846' },
      { id: 12, name: 'Cooper Hospital ', contact: '23671888 ' },        
    ],
    Banglore: [
      { id: 13, name: 'BBMP Cantonment', contact: '080-25571488' },
      { id: 14, name: 'Bhartiya Red Cross Society', contact: '080-22264205' },
      { id: 14, name: 'BBMP City Area', contact: '080-22975829' },    ],
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
              selectedCity === 'Delhi' ? 'font-bold' : ''
            }`}
            onClick={() => setSelectedCity('Delhi')}
          >
            Delhi
          </li>
          </div> 
          <div className = "bg-[#E5E0FF] border-double rounded-lg border-4 border-black">
          <li
            className={`cursor-pointer ${
              selectedCity === 'Mumbai' ? 'font-bold' : ''
            }`}
            onClick={() => setSelectedCity('Mumbai')}
          >
            Mumbai 
          </li>
          </div>
          <div className = "bg-[#E5E0FF] border-double rounded-lg border-4 border-black">
          <li
            className={`cursor-pointer ${
              selectedCity === 'Banglore' ? 'font-bold' : ''
            }`}
            onClick={() => setSelectedCity('Banglore')}
          >
            Banglore 
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
        <AmbulanceDetails city="Delhi" />
      </div>
    </div>
  );
};

export default App;


