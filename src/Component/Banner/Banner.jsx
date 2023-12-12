import banner from "./profile.png";
const Banner = () => {
  return (
    <div className="flex mb-2">
      <div className="flex w-full ml-20 flex-col justify-center p-4 ">
        <h1 className="text-4xl font-bold leading-tight">
          One Step <br /> Closer To Your <br />{" "}
          <span
            className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700
"
          >
            Dream Job
          </span>
        </h1>
        <p className="mt-5">
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. Manage all <br />
          your job application from start to finish.
        </p>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 btn text-white font-semibol w-32 border-0 mt-6">
          Get Started
        </button>
      </div>
      <img className="mx-auto h-96  rounded-lg " src={banner} alt="" />
    </div>
  );
};

export default Banner;
