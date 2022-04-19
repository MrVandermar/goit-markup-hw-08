(() => {
  const menuBtnRef = document.querySelector("[data-menu-button='1']");
  const mobileMenuRef = document.querySelector("[data-menu='1']");
​
  menuBtnRef.addEventListener("onclick", () => {
    console.log("MY LOG:" + menuBtnRef)
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-active");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();