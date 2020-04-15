import React, { useState } from "react";
import axios from "axios";
import DogPhoto from "./DogPhoto";
import Button from "./Button";

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState("");
  const getDogPhoto = async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random");
    setDogPhotos(res.data.message);
  };

  return (
    <div>
      <h1>welcome to dog photos...</h1>
      <Button onChange={getDogPhoto} />
      <br />
      <DogPhoto dogPhotos={dogPhotos} />
    </div>
  );
}

export default DogGallery;
