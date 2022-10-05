import React from "react";
import UserDropdown from "../Dropdowns/UserDropdown";

export default function AdminNavbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full float-right md:px-10 px-4">
          <ul className="flex-col md:flex-row float-right hidden md:flex">
            <li className="text-lg mr-2 mt-2">Abhishek Sinha</li>
            <li><UserDropdown/></li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
