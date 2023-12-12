import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Jobdata = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="border-2 rounded-md p-8 shadow-md">
      <img className="w-28 rounded" src={logo} alt="" />
      <h2 className="text-xl font-bold my-2">{job_title}</h2>
      <h4 className=" font-semibold my-2">{company_name}</h4>
      <button className="border-2 border-indigo-400 btn mr-3 font-semibold  bg-white  text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 h-[35px] min-h-[35px] ">
        {remote_or_onsite}
      </button>
      <button className=" border-2 border-indigo-400 btn ml-3 font-semibold  bg-white  text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 h-[35px] min-h-[35px] ">
        {job_type}
      </button>
      <div className="flex justify-between mt-3 w-9/12">
        <div className="flex items-center gap-1">
          <IoLocationOutline />
          <p className="font-semibold">{location}</p>
        </div>
        <div className="flex items-center gap-1">
          <HiOutlineCurrencyDollar />
          <p className="font-semibold">Salary : {salary}</p>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        {" "}
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 btn text-white font-semibol w-32 border-0 mt-6">
          View Details
        </button>{" "}
      </Link>
    </div>
  );
};

export default Jobdata;
