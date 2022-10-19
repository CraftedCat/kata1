const menu = document.querySelector(".menu")
const menuShowButton = document.querySelector(".header__menu")
const menuCloseButton = document.querySelector(".menu__button.close")

menuShowButton.addEventListener("click", function (evt){
    evt.preventDefault();
    console.log("Click Menu!")
    menu.style.visibility = "visible";
});

menuCloseButton.addEventListener("click", function (evt){
    evt.preventDefault();
    console.log("Click Menu!")
    menu.style.visibility = "hidden";
});