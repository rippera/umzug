const smallImgs = document.querySelectorAll(".small_img");
const mainImg = document.querySelector(".main_img");

const gallery = item => {
  item.addEventListener("click", e => {
    let imgLocation = e.target.getAttribute("src");
    mainImg.style.backgroundImage = "url(" + imgLocation + ")";
  });
};

smallImgs.forEach(item => {
  gallery(item);
});
