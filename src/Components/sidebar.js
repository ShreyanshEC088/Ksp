import React, { useState } from "react";
function SideNavbar({ onPageChange }) {
  const [pageChange,setPageChange]=useState("");
  const handlePageClick = (page) => {
    setPageChange(page);
    onPageChange(page);
  };

  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      {console.log(pageChange)}
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <a href="#" className="flex items-center ps-2.5 mb-5">
          <img src="/images/ksp2.png" className="h-24 w-24 sm:h-20 sm:w-25 rounded-full mx-5" alt="Flowbite Logo" />

          {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Karnataka Police</span> */}
        </a>
        <ul className="space-y-2 font-medium">
          <li>
            <button onClick={() => handlePageClick("profile")} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${pageChange === 'profile' ? 'bg-gray-500' : ''}`}>
              {/* <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4Zm0 3a7 7 0 110-14 7 7 0 010 14Zm9-14a1 1 0 011 1 1 1 0 01-1 1h-3a1 1 0 010-2h2v-1a5 5 0 00-10 0v1h2a1 1 0 010 2H2a1 1 0 01-1-1 1 1 0 011-1h3a1 1 0 010 2H4v1a7 7 0 0014 0v-1h-2a1 1 0 010-2h2a1 1 0 011 1Z"></path>
              </svg> */}
              <img src="/images/user.png" alt="User Icon" className="w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ms-3">User</span>
            </button>
          </li>
          <li>
            <button onClick={() => handlePageClick("overview")} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${pageChange === 'overview' ? 'bg-gray-500' : ''}`}>
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              {/* <span className="flex-1 ms-3 whitespace-nowrap">Police Station</span> */}
              <span className="ms-3 flex-1 whitespace-nowrap">Police Station</span>
            </button>
          </li>
          <li>
            <button onClick={() => handlePageClick("cases")} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${pageChange === 'cases' ? 'bg-gray-500' : ''}`}>
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              {/* <span className="flex-1 ms-3 whitespace-nowrap">Officer</span> */}
              <span className="ms-3 flex-1 whitespace-nowrap">Officer</span>
              {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
            </button>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </aside>
  );
}

export default SideNavbar;
