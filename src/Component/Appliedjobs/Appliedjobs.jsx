import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/Localstorage";
import Applyjob from "./Applyjob";

const Appliedjobs = () => {
  const jobs = useLoaderData();
  const [finalJob, setfinalJob] = useState([]);
  const [displayJob, setdisplayJob] = useState();
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const appliedJobs = jobs.filter((job) => storedJobIds.includes(job.id));
      setfinalJob(appliedJobs);
      setdisplayJob(appliedJobs);
    }
  }, []);

  const handelJobsFilter = (e) => {
    if (e === "all") {
      setfinalJob(displayJob);
    } else if (e === "remote") {
      const remoteJob = displayJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setfinalJob(remoteJob);
    } else if (e === "Onsite") {
      const remoteJob = displayJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setfinalJob(remoteJob);
    }
  };
  return (
    <div className="text-center ">
      <button
        onClick={() => handelJobsFilter("all")}
        className=" border-2 border-indigo-400 btn ml-3 font-semibold  bg-white  text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 h-[35px] min-h-[35px] my-4 "
      >
        All
      </button>
      <button
        onClick={() => handelJobsFilter("remote")}
        className=" border-2 border-indigo-400 btn ml-3 font-semibold  bg-white  text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 h-[35px] min-h-[35px] "
      >
        Remote
      </button>
      <button
        onClick={() => handelJobsFilter("Onsite")}
        className=" border-2 border-indigo-400 btn ml-3 font-semibold  bg-white  text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 h-[35px] min-h-[35px] "
      >
        Onsite
      </button>
      <div>
        {finalJob.map((Apply) => (
          <Applyjob key={Apply.id} Apply={Apply} />
        ))}
      </div>
    </div>
  );
};

export default Appliedjobs;
