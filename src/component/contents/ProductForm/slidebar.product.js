import React, { useState } from "react";
import "../Css/product.css";

const Sidebar = () => {
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [dietaryVisible, setDietaryVisible] = useState(false);

  return (
    <div className="sidebar">
      <div className="search-container">
        <input type="search" placeholder="Search" />
      </div>
      <a href="#" className="clear-link">
        Clear all
      </a>
      <div className="filter">
        <h3 onClick={() => setCategoriesVisible(!categoriesVisible)}>
          Categories{" "}
          <i className={`fas ${categoriesVisible ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </h3>
        {categoriesVisible && (
          <ul>
            <li>
              <label>
                <input type="checkbox" /> Baked Goods (8)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Coffee (2)
              </label>
            </li>
          </ul>
        )}
      </div>
      <div className="filter">
        <h3 onClick={() => setDietaryVisible(!dietaryVisible)}>
          Dietary{" "}
          <i className={`fas ${dietaryVisible ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </h3>
        {dietaryVisible && (
          <ul>
            <li>
              <label>
                <input type="checkbox" /> Eco Friendly (2)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Gluten Free (4)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Nut Free (7)
              </label>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
