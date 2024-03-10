import React from 'react';


function Card({ data }) {
  return (
   
<div className="max-w-sm rounded overflow-hidden mx-5 my-5 shadow-lg bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">User ID: {data.userId}</div>
        <div className="font-bold text-xl mb-2">ID: {data.id}</div>
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">{data.body}</p>
      </div>
    

   </div>
    
  );
}

export default Card;
