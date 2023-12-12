import { useEffect, useState } from "react";
import Jobdata from "./Jobdata";

const Featuredjobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((job) => setJobs(job));
  }, []);
  return (
    <div
      className=" my-12
    "
    >
      <h2 className="font-bold text-4xl text-center">Featured Jobs</h2>
      <p className="text-center my-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-12 my-8">
        {jobs.slice(0, dataLength).map((job) => (
          <Jobdata key={job.id} job={job} />
        ))}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : "text-center"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 btn text-white font-semibol w-32 border-0"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default Featuredjobs;
