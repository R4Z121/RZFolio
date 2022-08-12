function openNav(){
    const navGroup = document.querySelector(".nav-list-group");
    const nav = document.querySelector("nav");

    navGroup.classList.toggle("active");
    nav.classList.toggle("active");
}

const navLinks = document.querySelectorAll(".scroll-link");
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault;
        const target = link.getAttribute("id");
        const offsetTop = document.querySelector("section#" + target).offsetTop - 86;
        
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });
});

const container = document.querySelector(".skill-container");
const leftSlider = document.querySelector(".left-slider");
let leftScrollAmount = 0;
leftSlider.addEventListener("click",() => {
    leftScrollAmount -= 139;
    if(leftScrollAmount <= 0){
        leftScrollAmount = 0;
    }
    container.scrollTo({
        top:0,
        left: leftScrollAmount,
        behavior: "smooth"
    });
});
const rightSlider = document.querySelector(".right-slider");
rightSlider.addEventListener("click",() => {
    let sliderMax = container.scrollWidth - container.clientWidth;
    leftScrollAmount += 139;
    if(leftScrollAmount >= sliderMax){
        leftScrollAmount = sliderMax;
    }
    container.scrollTo({
        top:0,
        left: leftScrollAmount,
        behavior: "smooth"
    });
});

const nav = document.querySelector("nav");
window.onscroll = ev => {
    if(window.scrollY > 100){
        nav.classList.add("scrolled-nav");
    }else{
        nav.classList.remove("scrolled-nav");
    }
}