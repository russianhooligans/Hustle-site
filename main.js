// Анимация бокового меню
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
        
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Присваивание элементов к данным
const price = document.querySelector(".price");
// Анимация прайса
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    console.log(scrollPos);
    if(scrollPos > 35) {
        price.classList.add("side_animation");
    } else {
        price.classList.remove("side_animation");
    }
})

