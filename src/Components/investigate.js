// import React, { useState } from 'react';

// const Cases = ({ data }) => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleNameClick = (item) => {
//     setSelectedItem(item);
//   };

//   const closeModal = () => {
//     setSelectedItem(null);
//   };

//   return (
//     <div>
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           {/* Table header */}
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             {/* Table header rows */}
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 Product name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 <div className="flex items-center">
//                   Color
//                 </div>
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 <div className="flex items-center">
//                   Category
//                 </div>
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 <div className="flex items-center">
//                   Price
//                 </div>
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 <span className="sr-only">Select</span>
//               </th>
//             </tr>
//           </thead>
//           {/* Table body */}
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                 <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
//                   <button onClick={() => handleNameClick(item)}>{item.name}</button>
//                 </td>
//                 <td className="px-6 py-4">{item.color}</td>
//                 <td className="px-6 py-4">{item.category}</td>
//                 <td className="px-6 py-4">${item.price}</td>
//                 <td className="px-6 py-4 text-right">
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* Popup */}
//       {selectedItem && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="relative p-8 bg-white rounded-lg shadow-lg">
//             <h3 className="text-lg font-semibold mb-4">{selectedItem.name}</h3>
//             <p className="mb-4">{selectedItem.description}</p>
//             <button onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white rounded-md">Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cases;

import React, { useState } from 'react';

const Cases = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Logic to get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Logic for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {/* Table header */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {/* Table header rows */}
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Color
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Category
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Price
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Select</span>
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                <a href="#" onClick={() => setSelectedItem(item)}>{item.name}</a>
              </td>
              <td className="px-6 py-4">{item.color}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">${item.price}</td>
              <td className="px-6 py-4 text-right">
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button onClick={() => handleClick(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Popup */}
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative p-8 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{selectedItem.name}</h3>
            <p className="mb-4">{selectedItem.description}</p>
            <button onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white rounded-md">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cases;

// export default Cases;

// import React, { useState } from 'react';
// import InfoPopup from './popup'; // Assuming InfoPopup component is in the same directory

// const Cases = ({ data }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(8);
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Logic to get current items
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   // Logic for pagination
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const handleClick = (number) => {
//     setCurrentPage(number);
//   };
//   const handleNameClick = (event, item) => {
//     event.preventDefault(); // Prevent the default behavior of the anchor element
//     setSelectedItem(item);
//   };
  
//   return (
//     <div>
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           {/* Table header */}
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             {/* Table header rows */}
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 Product name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 <div className="flex items-center">
//                   Color
//                 </div>
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 <div className="flex items-center">
//                   Category
//                 </div>
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 <div className="flex items-center">
//                   Price
//                 </div>
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 <span className="sr-only">Select</span>
//               </th>
//             </tr>
//           </thead>
//           {/* Table body */}
//           <tbody>
//             {currentItems.map((item, index) => (
//               <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                 <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
//                 <a href="#" onClick={(e) => handleNameClick(e, item)}>{item.name}</a>
//                 </td>
//                 <td className="px-6 py-4">{item.color}</td>
//                 <td className="px-6 py-4">{item.category}</td>
//                 <td className="px-6 py-4">${item.price}</td>
//                 <td className="px-6 py-4 text-right">
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {/* Pagination */}
//         <div className="flex justify-center mt-4">
//           <ul className="pagination">
//             {pageNumbers.map((number) => (
//               <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
//                 <button onClick={() => handleClick(number)} className="page-link">
//                   {number}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {/* Render InfoPopup if selectedItem is not null */}
//       {selectedItem && <InfoPopup item={selectedItem} onClose={() => setSelectedItem(null)} />}
//     </div>
//   );
// };

// export default Cases;
