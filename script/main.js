//Grid
window.onload = function () {
  var gallery = document.querySelector(".gallery");
  const masonry = new Masonry(gallery, {
    // itemSelector: '.grid-item',
    gutter: 5,
    // // originLeft: false,
    // originTop: true,
    itemSelector: ".item",
    columnWidth: ".item",
    // percentPosition: true
  });
};

//Lightbox
var items = document.querySelectorAll(".item");
var lightbox = document.querySelector("#lightbox");
var lightboxImg = document.querySelector(".lightbox-img");
var closeBtn = document.querySelector(".close");

items.forEach(function (item) {
  item.addEventListener("click", function () {
    var imgSrc = this.querySelector("img").getAttribute("src");
    lightboxImg.setAttribute("src", imgSrc);
    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", function () {
  lightbox.style.display = "none";
});

document.addEventListener("click", function (event) {
  if (event.target == lightbox) {
    lightbox.style.display = "none";
  }
});

ScrollToTop
var ScrollToTop = document.getElementById("scrolltoTop");
ScrollToTop.addEventListener("click",()=>{
    window.scrollTo(0, 0);
})