import React, { useState, useEffect } from "react";
import { getRandomDog } from "../services/services";

const Lucky = () => {
  const [myDog, setMyDog] = useState(null);

  useEffect(() => {
    getMyDog();
  }, []);

  const getMyDog = () => {
    getRandomDog()
      .then((response) => setMyDog(response.data.message))
      .catch((error) => console.log(error));
  };
  return <div>
    <img className="dogPhotos" src={myDog} alt={myDog} />
  </div>;
};

export default Lucky;
