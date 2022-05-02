const tl = gsap.timeline();

tl.from(".hero-title", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});

tl.from(
  ".hero-subtitle",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2,
  },
  "-=1.5"
);
