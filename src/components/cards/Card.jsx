"use client";

const Card = ({ cardObj }) => {
  return (
    <img src={cardObj.image.URL} alt={cardObj.image.alt} className="card" />
  );
};

export default Card;
