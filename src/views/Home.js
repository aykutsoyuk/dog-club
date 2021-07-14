import React, { useState, useEffect } from "react";
import { getAll } from "../services/services";
import { Link } from "react-router-dom";

const Home = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getAllBreeds();
  }, []);

  const getAllBreeds = () => {
    getAll()
      .then((response) => setBreeds(response.data.message))
      .catch((error) => console.log(error));
  };

  return (
    <div className="linksWrapper">
      {Object.keys(breeds)?.map((item) => (
        <Link key={item} className="doglink" to={`/breed/${item}`}>{item}</Link>
      ))}
    </div>
  );
};

export default Home;
