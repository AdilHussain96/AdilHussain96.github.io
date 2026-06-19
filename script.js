document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll(".reveal");
const hashTarget = window.location.hash
  ? document.querySelector(window.location.hash)
  : null;

if (hashTarget && hashTarget.classList.contains("reveal")) {
  hashTarget.classList.add("is-visible");
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.04,
      rootMargin: "0px 0px 180px 0px",
    }
  );

  revealItems.forEach((item) => {
    if (!item.classList.contains("is-visible")) {
      observer.observe(item);
    }
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
