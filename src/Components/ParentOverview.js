// ParentComponent.js
import React from "react";
import Overview from "../Components/details";
import BarChart from "../Components/barGraph"; // Assuming BarChart component is in a separate file
import CriminalDataChart from "../Components/pieChart";

function ParentOverview() {
  // Define props for Overview component
  const overviewProps = {
    name: "John Doe",
    age: 30,
    dob: "January 1, 1990",
    designation: "Software Engineer"
  };
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
  const data = [16000, 8000, 400, 4000, 7000, 18000, 5000, 2000, 200, 1000, 21000];
  const criminalData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    data: [300, 50, 100, 40, 120, 80],
    backgroundColors: ['red', 'blue', 'yellow', 'green', 'purple', 'orange']
  };

  return (
    <div className="flex w-[100vh] flex-wrap justify-center gap-8">
      <Overview className='w-[100%]' {...overviewProps} />
      <div className="flex gap-8 w-full">
        <BarChart className='w-[50%]' labels={labels} data={data} />
        <CriminalDataChart className='w-[50%]' criminalData={criminalData} />
      </div>
    </div>
  );
}

export default ParentOverview;
