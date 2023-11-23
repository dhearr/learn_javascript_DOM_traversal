// [ DOM YANG TIDAK MENGGUNAKAN DOM TRAVERSAL]
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");
// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// [DOM TRAVERSAL]
// const close = document.querySelectorAll(".close");

// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//   });
// });

const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
