import { useState, useEffect } from "react";

const Error = ({children}) => {
  return (
    <div className="bg-red-500 mb-4 rounded-lg shadow-md p-3">
      <p className="text-white text-sm font-normal text-center uppercase">
        {children}
      </p>
    </div>
  );
};

export default Error;
