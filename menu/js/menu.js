const menu = document.querySelector(".menu")
const menuShowButton = document.querySelector(".header__menu")
const menuCloseButton = document.querySelector(".menu__button.close")

menuShowButton.addEventListener("click", function (evt){
    evt.preventDefault();
    console.log("Show menu!")
    menu.style.visibility = "visible";
});

menuCloseButton.addEventListener("click", function (evt){
    evt.preventDefault();
    console.log("Close Menu!")
    menu.style.visibility = "hidden";
});