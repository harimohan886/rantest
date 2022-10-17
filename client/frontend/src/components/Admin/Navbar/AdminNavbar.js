import React, { useContext } from 'react';
import UserDropdown from "../Dropdowns/UserDropdown";
import { AuthContext } from '../../../context/admin/AuthContext';
import { loginOut } from "../../../pages/Admin/Auth/apiCalls";
import { useNavigate } from 'react-router-dom';


export default function AdminNavbar() {
  const { user, accessToken, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();


  const logout = async (e) => {

    e.preventDefault();


    if (!localStorage.getItem("accessToken") || localStorage.getItem("accessToken") === 'null' || localStorage.getItem("accessToken") === '') {
      dispatch({ type: "LOGIN_OUT" });

      return false;

    }

    const res = await loginOut(accessToken, dispatch);

    if (res === true) {
      navigate("/admin/login");
    }


  }
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full float-right md:px-10 px-4">
          <ul className="flex-col md:flex-row float-right hidden md:flex">
            <li className="text-lg mr-2 mt-2">{user?.name}</li>
            <li onClick={logout}>Logout</li>
            <li><UserDropdown /></li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
