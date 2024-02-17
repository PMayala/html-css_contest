document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".open").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("open");
  });
});

console.log(document.querySelector(".open"));
