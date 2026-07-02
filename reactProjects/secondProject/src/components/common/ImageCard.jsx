import React from "react";

import defaultImage from "../../assets/default-image.png";

export default function ImageCard() {
  return (
    <div>
      <div className="flex w-full h-100 flex-col items-center justify-center shadow-2xl rounded-2xl  p-3  mx-auto border">
        <img
          src={defaultImage}
          alt="default image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
