// Resolve the configured public destinations.
const links = window.CD_LINKS || {};
document.querySelectorAll("[data-link]").forEach((link) => {
  const destination = links[link.dataset.link];
  if (destination) {
    link.href = destination;
    link.target = "_blank";
    link.rel = "noreferrer";
  } else {
    link.setAttribute("aria-disabled", "true");
    link.addEventListener("click", (event) => event.preventDefault());
  }
});
