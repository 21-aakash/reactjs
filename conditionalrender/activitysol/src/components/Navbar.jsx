import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <div className="text-white text-2xl font-bold">Skyaque</div>
      <ul className="flex space-x-4 text-white">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Links</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
