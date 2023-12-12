import { useEffect, useState } from "react";
import ShowCategory from "./ShowCategory";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  });
  return (
    <div className="text-center mt-4">
      <h1 className="font-bold text-4xl">Job Category List</h1>
      <p className="p-3 mb-8 ">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex flex-wrap justify-between m-5  ">
        {category.map((categor) => (
          <ShowCategory key={categor.id} categor={categor} />
        ))}
      </div>
    </div>
  );
};

export default Category;
