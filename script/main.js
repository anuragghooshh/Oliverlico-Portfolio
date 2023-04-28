import getDocument from "./seed.js";
window.onload = function (){
  getDocument();
}

// //Lightbox
var lightbox = document.querySelector("#lightbox");
var lightboxImg = document.querySelector(".lightbox-img");
var closeBtn = document.querySelector(".close");

export const addLightBox = (item) => {
  item.addEventListener("click", function () {
    var imgSrc = this.querySelector("img").getAttribute("src");
    lightboxImg.setAttribute("src", imgSrc);
    lightbox.style.display = "flex";
  });
};

closeBtn.addEventListener("click", function () {
  lightbox.style.display = "none";
});

document.addEventListener("click", function (event) {
  if (event.target == lightbox) {
    lightbox.style.display = "none";
  }
});

var ScrollToTop = document.getElementById("scrolltoTop");
ScrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
