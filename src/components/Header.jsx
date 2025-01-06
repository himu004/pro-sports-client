import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import logo from "../assets/logo2.png";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../providers/Context";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const [savedUser, setSavedUser] = useState(null);
  const { user, loading, signOutUser } = useContext(AuthContext);
  //   console.log(user);

  const { displayName, photoURL, email } = user || {};

  useEffect(() => {
    if (email) {
      fetch("https://pro-sports-server.vercel.app/users")
        .then((res) => res.json())
        .then((data) => {
          const loggedInUser = data.find((user) => user.email === email);
          setSavedUser(loggedInUser);
        });
    }
  }, [email]);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-equipment"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          All Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-equipment"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Add Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-equipment"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          My Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About US
        </NavLink>
      </li>
    </>
  );

  return (
    <header>
      <div className="pt-5 px-5 flex md:flex-row flex-col items-center justify-between">
        <h1>
          {user ? (
            <p>
              Welcome{" "}
              {
                loading ? (
                  <span className="loading loading-infinity loading-lg"></span>
                ) : (
                  <span className="font-bold text-lg">{`${
                    savedUser?.name || displayName
                  }`}</span>
                )
              }
            </p>
          ) : (
            <p className="text-lg">
              <span className="font-bold">Welcome</span> to our shop
            </p>
          )}
        </h1>
        {user ? (
          <div className="flex items-center space-x-5 md:py-0 py-5">
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={savedUser?.name || displayName}
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ring-2 ring-info ring-offset-2">
                  {user ? (
                    <img
                      alt="Profile Picture"
                      src={savedUser?.photo || photoURL}
                    />
                  ) : (
                    <FaRegCircleUser className="text-5xl p-1 w-full" />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/my-profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <button onClick={() => signOutUser()}>Logout</button>
                </li>
              </ul>
            </div>
            <button
              className="btn btn-outline btn-info btn-sm"
              onClick={() => signOutUser()}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-5 md:py-0 py-5">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
            <img className="w-10" src={logo} alt="" />
            ProSports
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="light"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
      <Tooltip id="my-tooltip" place="bottom-end" arrowColor="#c1121f" />
    </header>
  );
};

export default Header;
