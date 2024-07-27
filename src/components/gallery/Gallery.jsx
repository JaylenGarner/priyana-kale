"use client";

import { shuffleArray, galleryAnimationVariants, cardData } from "./helpers";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Measure from "react-measure";
import Card from "../cards/Card";
import CarousellCard from "../cards/CarousellCard";
import { motion } from "framer-motion";

const Gallery = () => {
  const [isClient, setIsClient] = useState(false);
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    setIsClient(true);
    setShuffledData(shuffleArray([...cardData]));
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      variants={galleryAnimationVariants}
      initial="feedInitial"
      whileInView="feedAnimate"
      viewport={{ once: true }}
    >
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter="16px">
          {shuffledData.map((cardObj, index) => {
            return (
              <Measure key={index}>
                {({ measureRef }) => (
                  <motion.div
                    ref={measureRef}
                    variants={galleryAnimationVariants}
                    initial="cardInitial"
                    whileInView="cardAnimate"
                    viewport={{ once: true }}
                  >
                    {cardObj.carousell ? (
                      <CarousellCard cardObj={cardObj} />
                    ) : (
                      <Card cardObj={cardObj} />
                    )}
                  </motion.div>
                )}
              </Measure>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </motion.div>
  );
};

export default Gallery;
