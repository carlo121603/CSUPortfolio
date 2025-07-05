document.addEventListener("DOMContentLoaded", function () {
  // Initialize all carousels on the page
  document.querySelectorAll(".carousel").forEach(initCarousel);
});

function initCarousel(carousel) {
  const items = carousel.querySelectorAll(".carousel-item");
  // Fixed: Look for indicators in the same parent container as the carousel
  const indicators = carousel.parentElement.querySelectorAll(
    ".carousel-indicator"
  );
  let currentIndex = 0;

  function updateCarousel() {
    // Update images
    items.forEach((item, index) => {
      const isActive = index === currentIndex;
      item.classList.toggle("active", isActive);
      item.style.opacity = isActive ? "1" : "0";
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("bg-opacity-100", index === currentIndex);
      indicator.classList.toggle("bg-opacity-50", index !== currentIndex);
    });
  }

  // Click events for indicators
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      currentIndex = parseInt(indicator.getAttribute("data-index"));
      updateCarousel();
    });
  });

  // Initialize
  updateCarousel();

  // Optional: Add auto-rotation
  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }, 5000);
}
