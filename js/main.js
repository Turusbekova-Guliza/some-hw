// let menuBurger  = document.querySelector('.burger__menu');
// let menuBtn = document.querySelector('.menu')

// menuBurger.onclick = () => {
//     menuBurger.classList.toggle('bx-x');
//     menuBtn.classList.toggle('active')
// }
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop -100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute ('id');

//         if(top >= offset && top < offset + height) {
//             nav
//         }
//     })
// }
 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".header").classList.toggle("open")
    })
})