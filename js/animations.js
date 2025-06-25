document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".content-section");

  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.2, // Trigger when 20% of the section is visible
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Optional: Add a subtle animation to the header elements on load
  const headerElements = document.querySelectorAll(
    ".profile img, .portfolio-title span, .name-container span, .main-navigation ul, .social-links ul"
  );

  headerElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`; // Stagger animation
    el.classList.add("loaded"); // Trigger animation (define 'loaded' in CSS)
  });
});
