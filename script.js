window.addEventListener("scroll", () => {
  const logo = document.getElementById("logo");
  if (window.scrollY > 50) {
    logo.classList.add("scrolled");
  } else {
    logo.classList.remove("scrolled");
  }
});
