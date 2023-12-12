const ShowCategory = ({ categor }) => {
  const { logo, availability, category_name } = categor;
  return (
    <div className="pt-6 shadow-xl p-6 rounded-lg">
      <img
        className="rounded-lg p-3 bg-[#d7cdf6] w-16 m-2  mx-auto"
        src={logo}
        alt=""
      />
      <h2>{category_name}</h2>
      <h2>{availability}</h2>
    </div>
  );
};

export default ShowCategory;
