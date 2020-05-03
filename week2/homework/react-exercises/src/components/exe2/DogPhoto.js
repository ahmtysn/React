import React from "react";

export default function DogPhoto({ dogPhotos }) {
  return (
    <div>
      {dogPhotos && (
        <img style={{ width: "400px" }} src={dogPhotos} alt="dog-photos" />
      )}
    </div>
  );
}
