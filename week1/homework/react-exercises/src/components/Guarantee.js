import React from "react";
import "../styles/Guarantee.css";

const Guarantee = ({ img, title, description }) => {
  return (
    <div className="container">
      <img className="image" src={img} alt={title} />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default Guarantee;
