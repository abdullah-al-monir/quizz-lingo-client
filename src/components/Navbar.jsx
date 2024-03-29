import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../providers/AuthProvider";
import { useContext } from "react";
import { enqueueSnackbar } from "notistack";

const Navbar = () => {
  const { user, setUser } = useContext(UserAuth);
  
  const navigate = useNavigate();
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-800" : "text-green-600"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-800" : "text-green-600"
          }
          to="/leaderboard"
        >
          Leader board
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-800" : "text-green-600"
          }
          to="/about"
        >
          About Us
        </NavLink>
      </li>
      <li></li>
    </>
  );
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    enqueueSnackbar("User logged out successfully", {
      variant: "success",
      autoHideDuration: 1000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
    navigate("/signIn");
  };
  return (
    <div className="bg-green-50">
      <div className="navbar max-w-screen-xl mx-auto">
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
              className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold">
            QuizzLingo
          </Link>
        </div>

        <div className="flex-none navbar-end">
          <div className="hidden lg:flex">
            <ul className="flex gap-5 menu-horizontal px-1 font-semibold">
              {navLinks}
            </ul>
          </div>
          {user?.length > 0 ? (
            <>
              <p className="mr-2 font-bold">
                {user[0]?.username.split(" ")[0]}
              </p>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="rounded-full size-10 avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Profile Picture" src={user[0]?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <p>{user[0]?.username}</p>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-800"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/signIn">
              <button className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-800">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
