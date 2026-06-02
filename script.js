// Navbar Background Change on Scroll

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(255,255,255,0.95)";
    } else {
        nav.style.background = "rgba(255,255,255,0.6)";
    }

});


// Query Form Popup

const quoteBtn = document.getElementById("openForm");
const closeBtn = document.getElementById("closeForm");
const popup = document.getElementById("queryPopup");

if (quoteBtn && closeBtn && popup) {

    quoteBtn.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

}
// Hero Slider

let slideIndex = 0;

const slides = document.querySelectorAll(".slides");

function showSlides() {

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 4000);
}

// Start slideshow

if(slides.length > 0){
    showSlides();
}
const openDealerForm =
document.getElementById("openDealerForm");

const closeDealerForm =
document.getElementById("closeDealerForm");

const dealerPopup =
document.getElementById("dealerPopup");

if(openDealerForm){

    openDealerForm.addEventListener("click", () => {
        dealerPopup.style.display = "flex";
    });

    closeDealerForm.addEventListener("click", () => {
        dealerPopup.style.display = "none";
    });

}