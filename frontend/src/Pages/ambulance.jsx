// import React, { useState } from 'react';
// import ambulanceBackground from '../Assets/Card/amb.jpeg';

// const AmbulanceDetails = ({ city }) => {
//   // Assuming you have ambulance details for each city {dummy data }
//   const ambulanceDetails = {
//     Delhi: [
//       { id: 1, name: 'National Heart Institute', contact: '011- 26441293' },
//       { id: 2, name: 'Sir Ganga Ram Hospital', contact: '011- 25750000' },
//       { id: 3, name: 'Batra Hospital', contact: '011- 26083747' },
//       { id: 4, name: 'MP Heart Centre', contact: '011- 6413436' },
//       { id: 5, name: 'Anand Hospital', contact: '011- 2224126' },
//       { id: 6, name: 'Jaslok Hospital', contact: '011-40554055' },
//     ],
//     Mumbai: [
//       { id: 7, name: 'Bombay Hospital', contact: '022-22067676' },
//       { id: 8, name: 'Cooper Hospital', contact: '022-26207254' },
//       { id: 9, name: 'Sir J.J. Hospital Byculla', contact: '022-23739031' },
//       { id: 10, name: 'KEM Hospital Parel', contact: '022-24107000' },
//       { id: 11, name: 'Poddar Hospital', contact: '24931846' },
//       { id: 12, name: 'Cooper Hospital', contact: '23671888' },
//     ],
//     Bangalore: [
//       { id: 13, name: 'BBMP Cantonment', contact: '080-25571488' },
//       { id: 14, name: 'Bhartiya Red Cross Society', contact: '080-22264205' },
//       { id: 15, name: 'BBMP City Area', contact: '080-22975829' },
//     ],    Jaipur: [
//       { id: 16, name: 'National Heart Institute', contact: '011- 26441293' },
//       { id: 17, name: 'Sir Ganga Ram Hospital', contact: '011- 25750000' },
//       { id: 18, name: 'Batra Hospital', contact: '011- 26083747' },
//       { id: 19, name: 'MP Heart Centre', contact: '011- 6413436' },
//       { id: 20, name: 'Anand Hospital', contact: '011- 2224126' },
//       { id: 21, name: 'Jaslok Hospital', contact: '011-40554055' },
//     ],
//     Kolkata: [
//       { id: 22, name: 'Bombay Hospital', contact: '022-22067676' },
//       { id: 23, name: 'Cooper Hospital', contact: '022-26207254' },
//       { id: 24, name: 'Sir J.J. Hospital Byculla', contact: '022-23739031' },
//       { id: 25, name: 'KEM Hospital Parel', contact: '022-24107000' },
//       { id: 26, name: 'Poddar Hospital', contact: '24931846' },
//       { id: 27, name: 'Cooper Hospital', contact: '23671888' },
//     ],
//     Gujrat: [
//       { id: 28, name: 'BBMP Cantonment', contact: '080-25571488' },
//       { id: 29, name: 'Bhartiya Red Cross Society', contact: '080-22264205' },
//       { id: 30, name: 'BBMP City Area', contact: '080-22975829' },
//     ],
//     Punjab: [
//       { id: 31, name: 'Bombay Hospital', contact: '022-22067676' },
//       { id: 32, name: 'Cooper Hospital', contact: '022-26207254' },
//       { id: 33, name: 'Sir J.J. Hospital Byculla', contact: '022-23739031' },
//       { id: 34, name: 'KEM Hospital Parel', contact: '022-24107000' },
//       { id: 35, name: 'Poddar Hospital', contact: '24931846' },
//       { id: 36, name: 'Cooper Hospital', contact: '23671888' },
//     ],
//     jamshedpur: [
//       { id: 37, name: 'BBMP Cantonment', contact: '080-25571488' },
//       { id: 38, name: 'Bhartiya Red Cross Society', contact: '080-22264205' },
//       { id: 39, name: 'BBMP City Area', contact: '080-22975829' },
//     ],    

//   };

//   const [selectedCity, setSelectedCity] = useState(city);
//   const filteredAmbulances = ambulanceDetails[selectedCity] || [];

//   return (
//     <div className="flex flex-col bg-[#DBE2EF] md:flex-row">
//       <div className="w-[35%] bg-blue-500 text-black p-4">
//         <h2 className="text-xl font-bold mb-4 underline">Select a city</h2>

//         <ul className="space-y-4 ">
//           <li
//             className={`cursor-pointer pl-4 bg-[#ffffff]  rounded-lg border-4 border-black ${
//               selectedCity === 'Delhi' ? 'font-bold' : ''
//             }`}
//             onClick={() => setSelectedCity('Delhi')}
//           >
//             Delhi
//           </li>
//           <li
//             className={`cursor-pointer pl-4 bg-[#ffffff]  rounded-lg border-4 border-black ${
//               selectedCity === 'Mumbai' ? 'font-bold' : ''
//             }`}
//             onClick={() => setSelectedCity('Mumbai')}
//           >
//             Mumbai
//           </li>
//           <li
//             className={`cursor-pointer pl-4 bg-[#DBE2EF]  rounded-lg border-4 border-black ${
//               selectedCity === 'Bangalore' ? 'font-bold' : ''
//             }`}
//             onClick={() => setSelectedCity('Bangalore')}
//           >
//             Bangalore
//           </li>
//           <li
//             className={`cursor-pointer pl-4 bg-[#ffffff]  rounded-lg border-4 border-black ${
//               selectedCity === 'Mumbai' ? 'font-bold' : ''
//             }`}
//             onClick={() => setSelectedCity('Jaipur')}
//           >
//          Jaipur
//           </li>
//           <li
//             className={`cursor-pointer pl-4 bg-[#ffffff]  rounded-lg border-4 border-black ${
//               selectedCity === 'Mumbai' ? 'font-bold' : ''
//             }`}
//             onClick={() => setSelectedCity(' Kolkata')}
//           >
//             Kolkata
//           </li>
//           <li
//             className={`cursor-pointer pl-4 bg-[#ffffff]  rounded-lg border-4 border-black ${
//               selectedCity === 'Mumbai' ? 'font-bold' : ''
//             }`}
//             onClick={() => setSelectedCity('Gujrat')}
//           >
//             Gujrat
//           </li>
//           <li
//             className={`cursor-pointer pl-4 bg-[#ffffff]  rounded-lg border-4 border-black ${
//               selectedCity === 'Mumbai' ? 'font-bold' : ''
//             }`}
//             onClick={() => setSelectedCity(' Punjab')}
//           >
//             Punjab
//           </li>
//           <li
//             className={`cursor-pointer pl-4 bg-[#ffffff]  rounded-lg border-4 border-black ${
//               selectedCity === 'Mumbai' ? 'font-bold' : ''
//             }`}
//             onClick={() => setSelectedCity(' jamshedpur')}
//           >
//            jamshedpur
//           </li>

//         </ul>
//         <img
//           src={ambulanceBackground}
//           alt="Ambulance Background"
//           className="absolute inset-0 w-full h-full object-cover opacity-25"
//         />
//       </div>
//       <div className="w-[65%] bg-[#DBE2EF] flex-1 p-4">
//         <h2 className="text-xl font-bold mb-4">Ambulance Details in {selectedCity}</h2>
//         {filteredAmbulances.length === 0 ? (
//           <p>No ambulance details available.</p>
//         ) : (
//           <ul className="space-y-4">
//             {filteredAmbulances.map((ambulance) => (
//               <li key={ambulance.id}>
//                 <h3 className="text-lg font-bold">{ambulance.name}</h3>
//                 <p>Contact: {ambulance.contact}</p>
//               </li>
   
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="flex py-16 justify-center">
//       <div className="max-w-3xl w-full p-8">
//         <AmbulanceDetails city={selectedCity} />
//       </div>
//     </div>
//   );
// };

// export default App;