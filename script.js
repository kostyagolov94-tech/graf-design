const images = [
"page1.png",
"page2.png",
"page3.png",
"page4.png",
"page5.png",
"page6.png",
"page7.png",
"page8.png",
"page9.png"
];

let current = 0;

const img = document.getElementById("portfolioImage");

document.querySelector(".next").onclick = () => {
current = (current + 1) % images.length;
img.src = images[current];
};

document.querySelector(".prev").onclick = () => {
current = (current - 1 + images.length) % images.length;
img.src = images[current];
};
