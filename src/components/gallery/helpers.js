const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const galleryAnimationVariants = {
  feedInitial: {
    y: 40,
    opacity: 0,
  },
  feedAnimate: { y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.8 } },
  cardInitial: {
    y: 40,
    opacity: 0,
  },
  cardAnimate: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const cardData = [
  {
    carousell: true,
    title: "IV Therapy Promotion",
    company: "Cure Med Spa",
    images: [
      {
        URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/iv-therapy-promotion/1.png",
        alt: "PENDING",
      },
      {
        URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/iv-therapy-promotion/2.png",
        alt: "PENDING",
      },
      {
        URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/iv-therapy-promotion/3.png",
        alt: "PENDING",
      },
      {
        URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/iv-therapy-promotion/4.png",
        alt: "PENDING",
      },
    ],
  },

  {
    carousell: true,
    title: "Meet & Greet Promotion",
    company: "Cure Med Spa",
    images: [
      {
        URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/meet-and-greet-promotion/1.png",
        alt: "PENDING",
      },
      {
        URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/meet-and-greet-promotion/2.png",
        alt: "PENDING",
      },
      {
        URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/meet-and-greet-promotion/3.png",
        alt: "PENDING",
      },
      {
        URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/meet-and-greet-promotion/4.png",
        alt: "PENDING",
      },
      {
        URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/meet-and-greet-promotion/5.png",
        alt: "PENDING",
      },
    ],
  },
  {
    carousell: false,
    image: {
      URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/1.png",
      alt: "PENDING",
    },
  },
  {
    carousell: false,
    image: {
      URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/2.png",
      alt: "PENDING",
    },
  },
  {
    carousell: false,
    image: {
      URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/3.png",
      alt: "PENDING",
    },
  },
  {
    carousell: false,
    image: {
      URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/4.png",
      alt: "PENDING",
    },
  },
  {
    carousell: false,
    image: {
      URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/5.png",
      alt: "PENDING",
    },
  },
  {
    carousell: false,
    image: {
      URL: "https://priyana-kale.s3.amazonaws.com/Public/Assets/6.png",
      alt: "PENDING",
    },
  },
];

module.exports = { shuffleArray, galleryAnimationVariants, cardData };
