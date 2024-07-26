const pages = [
  { name: "About", link: "/" },
  { name: "Work", link: "/work" },
  { name: "Resume", link: "/resume" },
  { name: "Contact", link: "/contact-me" },
];

const navigationAnimationVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
};

module.exports = { pages, navigationAnimationVariants };
