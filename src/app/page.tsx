"use client"

import { useState } from 'react';

const ProphetPage = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  // Function to handle the question input
  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userQuestion = question.toLowerCase().trim(); // Convert to lowercase for case-insensitive comparison
    let answer: string;

    switch (userQuestion) {
      case 'who is our 1 prophet':
        answer = '1: HAZRAT ADAM AS';
        break;
      case 'who is our 2 prophet':
        answer = '2: HAZRAT IDRIS AS';
        break;
      case 'who is our 3 prophet':
        answer = '3: HAZRAT NOOH AS';
        break;
      case 'who is our 4 prophet':
        answer = '4: HAZRAT HOOD AS';
        break;
      case 'who is our 5 prophet':
        answer = '5: HAZRAT SALEH AS';
        break;
      case 'who is our 6 prophet':
        answer = '6: HAZRAT IBRAHIM AS';
        break;
      case 'who is our 7 prophet':
        answer = '7: HAZRAT LOOT AS';
        break;
      case 'who is our 8 prophet':
        answer = '8: HAZRAT ISMAIL AS';
        break;
      case 'who is our 9 prophet':
        answer = '9: HAZRAT ISHAQ AS';
        break;
      case 'who is our 10 prophet':
        answer = '10: HAZRAT YAQUB AS';
        break;
      case 'who is our 11 prophet':
        answer = '11: HAZRAT YOUSUF AS';
        break;
      case 'who is our 12 prophet':
        answer = '12: HAZRAT AYUB AS';
        break;
      case 'who is our 13 prophet':
        answer = '13: HAZRAT SHOAIB AS';
        break;
      case 'who is our 14 prophet':
        answer = '14: HAZRAT MUSA AS';
        break;
      case 'who is our 15 prophet':
        answer = '15: HAZRAT HARON AS';
        break;
      case 'who is our 16 prophet':
        answer = '16: HAZRAT DHUL-KIFL AS';
        break;
      case 'who is our 17 prophet':
        answer = '17: HAZRAT DAWOOD AS';
        break;
      case 'who is our 18 prophet':
        answer = '18: HAZRAT SULAIMAN AS';
        break;
      case 'who is our 19 prophet':
        answer = '19: HAZRAT ILYAS AS';
        break;
      case 'who is our 20 prophet':
        answer = '20: HAZRAT AL-YASSA AS';
        break;
      case 'who is our 21 prophet':
        answer = '21: HAZRAT YOUNUS AS';
        break;
      case 'who is our 22 prophet':
        answer = '22: HAZRAT ZAKRIYA AS';
        break;
      case 'who is our 23 prophet':
        answer = '23: HAZRAT YAHYA AS';
        break;
      case 'who is our 24 prophet':
        answer = '24: HAZRAT ISA AS';
        break;
      case 'who is our 25 prophet':
        answer = '25: HAZRAT MUHHAMAD MUSTAFA (PEACE BE UPON HIM)';
        break;
      default:
        answer = "THAT'S OUR BELOVED PROPHETS (PEACE BE UPON HIM) THAT ARE WRITTEN IN QURAN PAK";
    }

    setResponse(answer); // Set the answer to display
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center md:h-screen w-1/5">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg p-6">
      <div className='text-xl font-sans text-black text-end justify-end'>
        Made By Saad Qureshi ... 
      </div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Prophet Information
        </h1>
        <form onSubmit={handleQuestionSubmit} className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 md:text-black mb-2">
            Enter Your Question
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., who is our 1 prophet"
          />
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>

        {response && (
          <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
            <p className="text-xl">{response}</p>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      
    </div>
    
  );
};

export default ProphetPage;
