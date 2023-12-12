import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-around my-4 shadow-xl">
      <div>
        <button className="px-3 py-2 rounded-lg hover:bg-gradient-to-r from-indigo-200 to-purple-200 -mt-1 mb-3">
          <NavLink
            className=" text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 backdrop:px-4 py-2  text-lg rounded-lg "
            to="/"
          >
            Career Hub
          </NavLink>
        </button>
      </div>
      <nav>
        <ul className="flex gap-3 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700"
                : "font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? " text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700"
                : "font-bold"
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/appliedjobs"
            className={({ isActive }) =>
              isActive
                ? " text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700"
                : "font-bold"
            }
          >
            Applied Jobs
          </NavLink>
        </ul>
      </nav>
      <div>
        <button className="btn px-3 border-0 rounded-lg bg-gradient-to-r from-indigo-200 to-purple-200 -mt-1 mb-3">
          <NavLink
            className=" text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 backdrop:px-4 py-2  text-lg rounded-lg "
            to="/"
          >
            Apply Now
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Nav;
