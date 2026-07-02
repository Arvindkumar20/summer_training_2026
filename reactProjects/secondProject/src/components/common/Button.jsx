import React from "react";

export default function Button({ children, className, type }) {
  return (
    <button
      className={className || "py-2 px-3 bg-blue-600 rounded"}
      type={type}
      
    >
      {children}
    </button>
  );
}

// hello=(name,msg,date)=>{

// };

// hello(name,msg,date)
