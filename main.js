contactKeys=[
"00QKY000006T7YD2A0",
"00QKY000006T7YK2A0",
"00QKY000006T7YO2A0",
"00QKY000006T7Yk2AK",
"00QKY000006T7Ym2AK",
"00QKY000006T7XQ2A0",
"00QKY000006T7Xe2AK",
"00QKY000006T7YX2A0",
"00QKY000006T7Yi2AK",
"00QKY000006T7Yp2AK",
"00QKY000006T7XV2A0",
"00QKY000006T7XZ2A0",
"00QKY000006T7Xo2AK",
"00QKY000006T7Y82AK",
"00QKY000006T7YW2A0",
"00QKY000006T7Ye2AK",
"00QKY000006T7Yo2AK",
"00QKY000006T7XR2A0",
"00QKY000006T7Y22AK",
"00QKY000006T7Y92AK",
"00QKY000006T7YS2A0",
"00QKY000006T7Yn2AK",
"00QKY000006T7XI2A0",
"00QKY000006T7XL2A0",
"00QKY000006T7Xh2AK",
"00QKY000006T7Xj2AK"
]


if (!window.location.search.includes('contactKey=')) {
  const url = new URL(window.location.href);
  const randomId=Math.floor(Math.random()*contactKeys.length);
  const contact=contactKeys[randomId];
  url.searchParams.set('contactKey',contact);
  url.searchParams.set('utm_source', 'facebook');
  url.searchParams.set('utm_medium', 'paid');
  url.searchParams.set('utm_campaign', 'demo_campaign');
  url.searchParams.set('utm_content', 'test_banner');
  window.location.href = url.toString();
}

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header container
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// About container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__content .about__grid", {
  ...scrollRevealOption,
  delay: 2000,
});

// Contact container
ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

// Swiper setup
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});