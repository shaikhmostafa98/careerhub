import { useLoaderData } from "react-router-dom";
import Jobdata from "../Featuredjobs/Jobdata";

const Jobs = () => {
  const jobs = useLoaderData();
  return (
    <div className="mx-20 grid grid-cols-2 gap-12 my-8">
      {jobs.map((job) => (
        <Jobdata key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
