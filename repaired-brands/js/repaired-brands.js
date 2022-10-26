let swiper;

const logos = [
    "../assets/icons/brands/acer.svg",
    "../assets/icons/brands/apple.svg",
    "../assets/icons/brands/bosh.svg",
    "../assets/icons/brands/hp.svg",
    "../assets/icons/brands/lenovo.svg",
    "../assets/icons/brands/samsung.svg",
    "../assets/icons/brands/sony.svg",
    "../assets/icons/brands/viewsonic.svg",
    "../assets/icons/brands/lenovo.svg",
    "../assets/icons/brands/samsung.svg",
    "../assets/icons/brands/apple.svg",
];
const windowInnerWidth = window.innerWidth;
console.log(windowInnerWidth);
const pallet = document.querySelector(".repaired-brands");
pallet.setAttribute('width', String(windowInnerWidth));
const buttonFullWidth = 272;
const buttonsPerLine = Math.floor(windowInnerWidth / buttonFullWidth);
const countButtonsToShow = buttonsPerLine*2;
console.log(buttonsPerLine);
const showAllButtons = document.querySelector(".content-expand-repaired-buttons");
let stateItem = false;

const buttonsContainer = document.querySelector(".repaired-brands-container");
let contentmentTemplate = document.querySelector('#repaired-brand-template').content;
let buttonTemplate = contentmentTemplate.querySelector('button');


let cloneButton = function (imgSrc) {
    let clonedElement = buttonTemplate.cloneNode(true);
    clonedElement.querySelector('.repaired-brand-container__image').src = imgSrc;
    return clonedElement;
}

function createButtons(itemLength){
    for (let i = 0; i < itemLength; i++) {
        buttonsContainer.appendChild(cloneButton(logos[i]));
    }
}

function mobileSlider(){
    if (windowInnerWidth < 768) {
        createButtons(logos.length);
        showAllButtons.remove();
        console.log("Try create swiper!")
        swiper = new Swiper (buttonsContainer, {
           slidesPerView: 1.25,
           spaceBetween: 16,
           slideClass: 'repaired-brand__button',
           pagination: {
               el: '.swiper-pagination',
               type: 'bullets',
               clickable: true,
           },
        })
        console.log(swiper);
    } else {
        createButtons(countButtonsToShow);
    }
}

mobileSlider();


showAllButtons.addEventListener('click', function (evt){
    if (windowInnerWidth >= 768) {
        evt.preventDefault()
        if (!stateItem) {
            stateItem = true;
            for (let i = logos.length - countButtonsToShow; i < logos.length; i++) {
                let clonedElement = cloneButton(logos[i]);
                buttonsContainer.appendChild(clonedElement);
            }
            showAllButtons.innerHTML = 'Скрыть всё';

        } else {
            stateItem = false;
            let allButtons = buttonsContainer.querySelectorAll("button")
            for (let i = logos.length - countButtonsToShow; i < logos.length; i++) {
                allButtons[i].remove()
            }
            showAllButtons.innerHTML = 'Показать всё';

        }
    }
});


