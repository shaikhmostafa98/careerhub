import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Applyjob = ({ Apply }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = Apply;
  return (
    <div className="border-2 w-10/12 mx-auto rounded-md  p-8 shadow-md flex my-4">
      <div className="w-3/12">
        <img src={logo} className="w-full p-4" alt="" />
      </div>
      <div className="w-7/12 text-left px-3 ml-5">
        <h2 className="text-2xl font-semibold">{job_title}</h2>
        <h2 className="text-xl my-2">{company_name}</h2>
        <button className="border-2 border-indigo-400 btn mr-3 font-semibold  bg-white  text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 h-[35px] min-h-[35px] ">
          {remote_or_onsite}
        </button>
        <button className=" border-2 border-indigo-400 btn ml-3 font-semibold  bg-white  text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 h-[35px] min-h-[35px] ">
          {job_type}
        </button>
        <div className="flex items-center gap-1 mt-3">
          <HiOutlineCurrencyDollar />
          <p className="font-semibold">Salary : {salary}</p>
        </div>{" "}
        <div className="flex items-center gap-1 ">
          <IoLocationOutline />
          <p className="font-semibold">{location}</p>
        </div>
      </div>
      <div className="w-2/12">
        {" "}
        <Link to={`/job/${id}`}>
          {" "}
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 btn text-white font-semibol w-32 border-0 mt-6">
            View Details
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Applyjob;
