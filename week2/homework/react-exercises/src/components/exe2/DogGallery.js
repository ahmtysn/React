import React, { useState } from "react";
import axios from "axios";
import DogPhoto from "./DogPhoto";
import Button from "./Button";

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrorMessage] = useState(null);
  const getDogPhoto = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogPhotos(res.data.message);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };
  if (errMessage) {
    return <div style={{ color: "red" }}>{errMessage}</div>;
  }
  return (
    <div>
      <h1>welcome to dog photos...</h1>
      <Button onChange={getDogPhoto} />
      <br />
      {loading ? (
        <div>Loading, please wait a minute..</div>
      ) : (
        <DogPhoto dogPhotos={dogPhotos} />
      )}
    </div>
  );
}

export default DogGallery;
