const contactFormAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 1 },
  },
};

const successMessageAnimationVariants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 1 },
  },
};

module.exports = {
  contactFormAnimationVariants,
  successMessageAnimationVariants,
};
