import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <h1>Homepage</h1>
      <div className="w-50 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((recipe, index) => (
          <div
            className="bg-gray-200 m-5 w-25 xs:h-30 md:w-50 md:h-50 p-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out flex justify-center items-center flex-col"
            key={index}
          >
            <img className="w-50 h-50" src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p className="t">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
