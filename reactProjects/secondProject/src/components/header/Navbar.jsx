import React from "react";
import AIImageLogo from "../../assets/logo.png";
import Button from "../common/Button";
export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-5 py-1 shadow-md ">
      <div className="w-20 h-20 rounded-full">
        <img
          src={AIImageLogo}
          alt="AI Image generator logo"
          className="w-full h-full rounded-full object-cover overflow-hidden"
        />
      </div>

      <Button
        className="py-2 px-3 bg-blue-600 rounded text-white cursor-pointer"
        type="submit"
      >
        History
      </Button>

      {/* <button className="py-2 px-3 bg-blue-600 rounded">
        History
        </button> */}
    </header>
  );
}
