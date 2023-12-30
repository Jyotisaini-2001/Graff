// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// const PricingTable = () => {
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   const plans = [
//     {
//       name: 'Basic Plan',
//       price: '$25',
//       features: [
//         { text: '10 GB Space', icon: faCheck },
//         { text: '3 Domain Names', icon: faCheck },
//         { text: '20 Email Address', icon: faCheck },
//         { text: 'Live Support', icon: faTimes },
//       ],
//     },
//     {
//       name: 'Standard Plan',
//       price: '$50',
//       features: [
//         { text: '50 GB Space', icon: faCheck },
//         { text: '5 Domain Names', icon: faCheck },
//         { text: 'Unlimited Email Address', icon: faCheck },
//         { text: 'Live Support', icon: faTimes },
//       ],
//     },
//     {
//       name: 'Premium Plan',
//       price: '$100',
//       features: [
//         { text: 'Unlimited GB Space', icon: faCheck },
//         { text: '30 Domain Names', icon: faCheck },
//         { text: 'Unlimited Email Address', icon: faCheck },
//         { text: 'Live Support', icon: faCheck },
//       ],
//     },
//   ];

//   const handlePlanSelect = (index) => {
//     setSelectedPlan(index);
//   };

//   return (
//     <section className="w-full min-h-screen py-16 md:py-32">
//       <div className="container mx-auto flex flex-wrap justify-center">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`w-full md:w-1/3 mb-8 md:mb-0 card ${
//               selectedPlan === index ? 'border-blue-500' : 'border-gray-300'
//             } border p-8 rounded-lg transform transition-transform duration-500 hover:scale-110`}
//           >
//             <div className="title text-center">
//               <FontAwesomeIcon icon={faCheck} className="fa" />
//               <h2 className="text-3xl mt-2">{plan.name}</h2>
//             </div>
//             <div className="price text-center mt-4">
//               <h4 className="text-6xl">{plan.price}</h4>
//             </div>
//             <div className="option mt-4">
//               <ul className="text-lg">
//                 {plan.features.map((feature, i) => (
//                   <li key={i}>
//                     <FontAwesomeIcon icon={feature.icon} className="text-green-500 mr-2" />
//                     {feature.text}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <a
//               href="#"
//               className={`btn mt-4 ${selectedPlan === index ? 'bg-white text-black' : 'bg-black text-white'}`}
//               onClick={() => handlePlanSelect(index)}
//             >
//               {selectedPlan === index ? 'Selected' : 'Select Plan'}
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PricingTable;
// PricingTable.js

// src/components/PricingTable.js

import React from 'react';
// pages/index.js
import { useState } from 'react';
import { FaPaperPlane, FaRocket,FaPlane, FaCheck, FaTimes } from 'react-icons/fa';
// pages/index.js


const plans = [
  {
    id: 'basic',
    name: 'Basic ',
    price: '$4/month',
    graphs: 'Up to 10 graphs',
    chatbotQueries: 'Up to 500 chatbot queries',
    iconComponent: <FaPaperPlane />, // Basic Plan icon
    iconComponentCheck: <FaCheck />,
    iconComponentTimes: <FaTimes />,
  },
  {
    id: 'pro',
    name: 'Pro ',
    price: '$8/month',
    graphs: 'Up to 50 graphs',
    chatbotQueries: 'Up to 1000 chatbot queries',
    support: 'Email + live chat support',
    iconComponent: <FaPlane className='rotate-60' />, // Pro Plan icon
    iconComponentCheck: <FaCheck />,
    iconComponentTimes: <FaTimes />,
  },
  {
    id: 'enterprise',
    name: 'Enterprise ',
    price: 'Contact',
    graphs: 'Unlimited graphs',
    chatbotQueries: 'Ability to upload custom PDFs',
    support: '24/7 phone + email support',
    iconComponent: <FaRocket />,// Enterprise Plan icon
    iconComponentCheck: <FaCheck />,
    iconComponentTimes: <FaTimes />,
  },
];

const PricingCard = ({ plan, isSelected, onSelect }) => {
  const cardBgColors = {
    basic: 'bg-gradient-to-br from-pink-500 to-blue-500',
    pro: 'bg-gradient-to-br from-yellow-300 to-purple-500',
    enterprise: 'bg-gradient-to-r from-blue-500 to-teal-400',
  };

  const iconColors = {
    basic: 'text-white',
    pro: 'text-white',
    enterprise: 'text-white',
  };

  return (
    <div
      className={`py-8 px-12 rounded-3xl cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-110${
        isSelected ? 'scale-110' : ''
      } ${cardBgColors[plan.id]}`}
      onClick={onSelect}
    >
      <div className="relative">
        <div className={`title ${iconColors[plan.id]} text-center`}>
          <div className="fa rounded-full mx-auto mb-2 p-4 h-20 w-20 shadow-md h-28 w-28 shadow-md flex items-center justify-center">
          {React.cloneElement(plan.iconComponent, { style: { fontSize: '4rem' } })}
          </div>
          <h2 className="text-white text-3xl font-bold my-4">{plan.name}</h2>
        </div>
      </div>

      <div className="price mt-4">
        <h4 className="text-white text-3xl font-bold">{plan.price}</h4>
      </div>

      <div className="option mt-4">
        <ul className="text-white flex flex-col items-center">
          <li className="text-white text-base flex items-center my-2">
          <span className="mr-2 text-white">{plan.iconComponentCheck}</span>
            {plan.graphs}
            </li>
          <li className="text-white text-base flex items-center my-2">
          <span className="mr-2 text-white">{plan.iconComponentCheck}</span>
          {plan.chatbotQueries}</li>
          {plan.support && <li className="text-white text-base flex items-center my-2">
          <span className="mr-2 text-white">{plan.iconComponentCheck}</span>
          {plan.support}</li>}
        </ul>
      </div>

      <a
        href="#hi"
        className="block bg-white text-black w-32 h-10 mx-auto mt-8 rounded-full text-center line-height-40px text-base font-bold hover:no-underline hover:text-black shadow-md flex items-center justify-center "
      >
       Buy Now
      </a>
    </div>
  );
};

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <> 
    
    <h1 className="text-3xl font-bold mb-8 py-4 flex items-center justify-center">Pricing Plans</h1>
    <div className="container mx-auto p-4 flex items-center justify-center text-white">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            // isSelected={selectedPlan === plan.id}
            onSelect={() => setSelectedPlan(plan.id)}
          />
        ))}
      </div>
      </div>
      {/* {selectedPlan && (
        <div className="">
          <h2 className="text-xl font-bold mb-4">Selected Plan Details</h2>
          <p>{plans.find((plan) => plan.id === selectedPlan).name}</p>
          <p>{plans.find((plan) => plan.id === selectedPlan).price}</p>
          <p>{plans.find((plan) => plan.id === selectedPlan).graphs}</p>
        
        </div>
      )} */}
   
    </>
  );
}
