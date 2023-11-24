import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <h4 className="navbar-brand">RTK</h4>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              
              </li>
              <li className="nav-item">
                
              </li>
            </ul>
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
             
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
