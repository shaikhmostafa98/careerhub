import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featuredjobs from "../Featuredjobs/Featuredjobs";

const Home = () => {
  return (
    <div className="mx-auto w-10/12">
      <Banner />
      <Category />
      <Featuredjobs />
    </div>
  );
};

export default Home;
