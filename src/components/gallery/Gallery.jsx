"use client";

import { motion } from "framer-motion";
import { galleryAnimationVariants } from "./helpers";

import { imageUrls } from "./helpers";

const columns = 3;
const imagesPerColumn = Math.ceil(imageUrls.length / columns);

const Gallery = () => {
  // Split the imageUrls into columns
  const organizedImages = Array.from({ length: columns }, (_, columnIndex) =>
    imageUrls.slice(
      columnIndex * imagesPerColumn,
      (columnIndex + 1) * imagesPerColumn
    )
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {organizedImages.map((group, index) => (
        <div key={index} className="grid gap-4">
          {group.map((src, imgIndex) => (
            <motion.img
              key={imgIndex}
              variants={galleryAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="h-auto max-w-full rounded-lg"
              src={src}
              alt={`Image ${index * imagesPerColumn + imgIndex + 1}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
