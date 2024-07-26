const heroAnimationVariants = {
  initialLeft: {
    x: -50,
    opacity: 0,
  },
  animateLeft: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 1 },
  },
  initialRight: {
    x: 50,
    opacity: 0,
  },
  animateRight: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.6, duration: 1 },
  },
};

module.exports = { heroAnimationVariants };
