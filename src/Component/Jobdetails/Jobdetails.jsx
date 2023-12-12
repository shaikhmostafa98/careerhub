import { useLoaderData, useParams } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { savedJobApplication } from "../../Utility/Localstorage";
const Jobdetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_title,

    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const { phone, email, address } = contact_information;
  const applyJob = () => {
    savedJobApplication(idInt);
    toast("This Job Added Successfully.");
  };
  return (
    <div className="">
      <div className="my-12 align-middle">
        <h2 className="text-center text-2xl font-bold">Job Details</h2>
      </div>
      <div className="w-10/12 mx-auto flex gap-16 ">
        <div className="flex flex-col gap-3 w-8/12">
          <p className="text-justify">
            <span className="font-bold">Job Description : </span>
            {job_description}
          </p>
          <p className="text-justify">
            <span className="font-bold">Job Responsibility : </span>
            {job_responsibility}
          </p>
          <p className="text-justify">
            <span className="font-bold">Educational Requirements : </span>
            {educational_requirements}
          </p>
          <p className="text-justify">
            <span className="font-bold">Experiences : </span>
            {experiences}
          </p>
        </div>
        {/* -------- */}
        <div className="w-4/12 bg-[#f5f2fe]  mb-5 rounded-lg p-5 ">
          {" "}
          <h2 className="text-xl font-bold py-3">Job Details</h2>
          <hr className=" h-5" />
          <div className="flex items-center gap-1">
            <HiOutlineCurrencyDollar />
            <p>
              <span className="font-bold">Salary :</span> {salary}
            </p>
          </div>
          <div className="flex items-center gap-1 my-2">
            <CgCalendarDates />

            <p>
              <span className="font-bold">Job Title :</span> {job_title}
            </p>
          </div>
          <h2 className="text-xl font-bold py-3">Contact Information</h2>
          <hr className=" h-5" />
          <div className="flex items-center gap-2 ">
            <FaPhoneAlt />

            <p>
              <span className="font-bold">Phone:</span> {phone}
            </p>
          </div>
          <div className="flex items-center gap-2 my-2 ">
            <MdOutlineMailOutline />

            <p>
              <span className="font-bold">Email:</span> {email}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center gap-1">
            <IoLocationOutline className="text-3xl" />
            <p>
              {" "}
              <span className="font-bold">Address : </span>
              {address}
            </p>
          </div>
          <button
            onClick={applyJob}
            className="btn w-full mt-5 px-3 border-0 rounded-lg bg-gradient-to-r from-indigo-200 to-purple-200  mb-3"
          >
            <span className=" text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 backdrop:px-4 py-2  text-lg rounded-lg ">
              Apply Now
            </span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Jobdetails;

/*
 {
        "id": 7,
        logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirement,experiences,contact_information": {
          "phone": "01750-00 00 00",
          "email": "info@gmail.com",
          "address": "Dhanmondi 32, Sukrabad Dhaka, Bangladesh"
        }
      },


*/
