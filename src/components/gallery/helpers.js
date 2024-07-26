const imageUrls = [
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-12.png",
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-1.png",
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-2.png",
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-3.png",
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-5.png",
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-4.png",
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-6.png",
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-7.png",
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-8.png",
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-10.png",
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-9.png",
  "https://priyana-kale.s3.amazonaws.com/Public/Assets/cure-11.png",
];

const galleryAnimationVariants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: { y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.8 } },
};

module.exports = { imageUrls, galleryAnimationVariants };
