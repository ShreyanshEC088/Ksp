import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNavbar from "./Components/sidebar";
import ParentOverview from "./Components/ParentOverview";
import Cases from "./Components/investigate";
import Navbar from "./Components/navbar";
import Navbar1 from "./Components/Navbar1";
// import Profile from "./Components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState("overview"); // Set initial state to "overview"

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const data = [
        { name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: 2999 },
        { name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: 1999 },
        { name: "Magic Mouse 2", color: "Black", category: "Accessories", price: 99 },
        { name: "Apple Mouse 2", color: "Black", category: "Accessories", price: 1199 },
        { name: "Apple Mouse 4", color: "White", category: "Accessories", price: 3499 },
        { name: "Apple Mouse 5", color: "Black", category: "Accessories", price: 6599 },
        { name: "Samsung Galaxy S21", color: "Phantom Gray", category: "Smartphone", price: 999 },
        { name: "Sony WH-1000XM4", color: "Black", category: "Headphones", price: 349 },
        { name: "Dell XPS 15", color: "Platinum Silver", category: "Laptop", price: 1999 },
        { name: "Canon EOS R5", color: "Black", category: "Camera", price: 3899 },
        { name: "Amazon Echo Dot (4th Gen)", color: "Charcoal", category: "Smart Speaker", price: 49 },
        { name: "Logitech MX Master 3", color: "Graphite", category: "Mouse", price: 99 },
        { name: "LG UltraGear 27GN950-B", color: "Black", category: "Monitor", price: 699 },
        { name: "Samsung Galaxy Watch 3", color: "Mystic Bronze", category: "Smartwatch", price: 399 },
        { name: "Nintendo Switch", color: "Neon Blue/Neon Red", category: "Gaming Console", price: 299 },
        { name: "Bose QuietComfort Earbuds", color: "Soapstone", category: "Earbuds", price: 279 },
        { name: "GoPro HERO9 Black", color: "Black", category: "Action Camera", price: 449 },
        { name: "Google Nest Hub Max", color: "Chalk", category: "Smart Display", price: 229 },
        { name: "Sony PlayStation 5", color: "White", category: "Gaming Console", price: 499 },
      ];
  
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <SideNavbar onPageChange={handlePageChange} />
          </div>
          <div className="col-lg-9">
            {currentPage==="cases" && <Navbar/>}
            {currentPage==="overview" && <Navbar1/>}
            {/* <Navbar /> */}
            <div className="content">
              {currentPage === "profile" &&  <ParentOverview />}
              {currentPage === "overview" &&  <Cases data={data}/>}
              {currentPage === "cases" && <Cases data={data}/>}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
