import React from "react";
import { GiCirclingFish } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="bg-gray-500 text-lime-500">
      <div className="flex justify-between text-2xl p-4">
        <div className="ms-8">
          <GiCirclingFish size={40} />
        </div>
        <div>
          <h1>username</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
