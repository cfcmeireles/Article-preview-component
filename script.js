(function(){
"use strict";

const shareBtn = document.querySelector(".share");
const socialMedia = document.querySelector(".social-media");

shareBtn.addEventListener("click", () => {
    socialMedia.classList.toggle("active");
    shareBtn.classList.toggle("active");
})

}());
