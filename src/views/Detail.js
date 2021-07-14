import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBreedByName } from "../services/services";

const Detail = () => {
  const [myBreed, setMyBreed] = useState([]);
  let { name } = useParams();

  useEffect(() => {
    getMyBreed(name);
  }, []);

  const getMyBreed = (name) => {
    getBreedByName(name)
      .then((response) => setMyBreed(response.data.message))
      .catch((error) => console.log(error));
  };
  return <div className="photosWrapper">
    {myBreed.map((item) => <img key={item} className="dogPhotos" src={item} alt={item} />)}
  </div>;
};

export default Detail;
