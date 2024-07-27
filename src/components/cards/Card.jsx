"use client";

const Card = ({ cardObj }) => {
  return (
    <img
      src={cardObj.image.URL}
      alt={cardObj.image.alt}
      className="rounded-md border border-slate-300 shadow-xl"
    />
  );
};

export default Card;
