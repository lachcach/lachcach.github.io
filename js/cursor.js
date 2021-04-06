let curs = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    curs.style.left = x - 25 + "px";
    curs.style.top = y - 25 + "px";
});

let images = document.querySelectorAll(".text-and-images .image--inner");
let servicesImages = [
    "url('../img/mua roi web-01.jpg')",
    "url('https://assets.codepen.io/1651485/summerNew.jpg')",
    "url('https://assets.codepen.io/1651485/autumnNew.png')",
    "url('https://assets.codepen.io/1651485/winterNew.jpg')"
];

images.forEach((image, i) => {
    image.addEventListener("mouseover", (e) => {
        curs.classList.add("cursor-image-show");
        curs.style.backgroundImage = servicesImages[i];
    });
    image.addEventListener("mouseleave", (e) => {
        curs.classList.remove("cursor-image-show");
        curs.style.backgroundImage = "none";
    });
});