// Scroll to top button functionality
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
    scrollToTopBtn.classList.add("opacity-100", "visible");
  } else {
    scrollToTopBtn.classList.remove("opacity-100", "visible");
    scrollToTopBtn.classList.add("opacity-0", "invisible");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
