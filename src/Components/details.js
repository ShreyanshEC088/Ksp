import React from "react";

function Overview({ name, age, dob, designation }) {
  return (
    <div className="border border-gray-300 rounded-md p-4 my-4">
  <div className="flex justify-between items-center gap-4">
    {/* Left side for image */}
    <div className="w-1/2">
      <img className="w-full h-auto" src="/images/one.jpg" alt="User" />
    </div>
    {/* Right side for text */}
    <div className="w-1/2 flex flex-col justify-center"> {/* Centering the text vertically */}
      <h2 className="text-4xl font-bold mb-4">{name}</h2> {/* Increased font size and added margin-bottom */}
      <p className="text-lg">{/* Adjusted font size */}
        <span className="font-bold">Age:</span> {age}
      </p>
      <p className="text-lg">
        <span className="font-bold">Date of Birth:</span> {dob}
      </p>
      <p className="text-lg">
        <span className="font-bold">Designation:</span> {designation}
      </p>
    </div>
  </div>
</div>
  );
}

export default Overview;
