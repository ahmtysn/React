import React from "react";

export default function FriendProfile({
  firstName,
  lastName,
  country,
  email,
  phone,
  image,
}) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img style={{ width: "400px" }} src={image} alt="friend-photo" />
      <ul style={{ listStyle: "none" }}>
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{country}</li>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
    </div>
  );
}
