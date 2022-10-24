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

let stateItem = false;

let buttonsContainer = document.querySelector(".repaired-brands-container");
let contentmentTemplate = document.querySelector('#repaired-brand-template').content;
buttonTemplate = contentmentTemplate.querySelector('button');


let cloneButton = function (imgSrc) {
    let clonedElement = buttonTemplate.cloneNode(true);
    clonedElement.querySelector('.repaired-brand-container__image').src = imgSrc;
    return clonedElement;
}


for (let i = 0; i < logos.length-3; i++) {
    let clonedElement = cloneButton(logos[i]);
    buttonsContainer.appendChild(clonedElement);
}

let showAllButtons = document.querySelector(".content-expand-repaired-buttons");
showAllButtons.addEventListener('click', function (evt){
    evt.preventDefault()
    let allButtons;
    if (!stateItem) {
        stateItem = true;
        for (let i = logos.length - 3; i < logos.length; i++) {
            let clonedElement = cloneButton(logos[i]);
            buttonsContainer.appendChild(clonedElement);
        }
        showAllButtons.innerHTML = 'Скрыть всё';

    } else {
        stateItem = false;
        allButtons = buttonsContainer.querySelectorAll("button")
        for (let i = logos.length - 3; i < logos.length; i++) {
            allButtons[i].remove()
        }
        showAllButtons.innerHTML = 'Показать всё';

    }
});
