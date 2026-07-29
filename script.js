document.addEventListener("DOMContentLoaded",()=>{


const images=[

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


let current=0;


const img=document.getElementById("portfolioImage");

const next=document.querySelector(".next");

const prev=document.querySelector(".prev");



next.onclick=()=>{


current++;


if(current>=images.length){

current=0;

}


img.src=images[current];


};



prev.onclick=()=>{


current--;


if(current<0){

current=images.length-1;

}


img.src=images[current];


};



});
