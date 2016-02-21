/*-Обработчик переключателей пунктов меню "Сервисы"-*/

var serviceLinks = document.querySelectorAll(".service-menu-column a");
var serviceBlocks = document.querySelectorAll(".service-details-page");

var j, m, n;

for (i = 0; i < serviceLinks.length; ++i) {
    serviceLinks[i].addEventListener("click", function (event) {
        event.preventDefault(event);
        for (j = 0; j < serviceLinks.length; ++j) {
            serviceLinks[j].classList.remove("service-menu-active");        
        }
        for (m = 0; m < serviceLinks.length; ++m) {
            if (serviceLinks[m] == this) {
                serviceLinks[m].classList.add("service-menu-active");
                for (n = 0; n < serviceBlocks.length; ++n) {
                    serviceBlocks[n].classList.remove("service-details-active");
                }
                serviceBlocks[m].classList.add("service-details-active");
            }
        }
    })
}

/*-Обработчик молального окна обратной связи-*/

var ModalWindow = document.querySelector(".modal-window");
var CompanyFeedbackButton = document.querySelector(".company-feedback-button");
var ModalWindowClose = document.querySelector(".modal-button-close");


CompanyFeedbackButton.addEventListener("click", function (event) {
    event.preventDefault(event);
    ModalWindow.classList.add("window-appearance");
});

ModalWindowClose.addEventListener("click", function (event) {
    event.preventDefault(event);
    ModalWindow.classList.remove("window-appearance");
});    

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (ModalWindow.classList.contains("window-appearance")) {
            ModalWindow.classList.remove("window-appearance");
        }
    }
});

/*-Обработчик окна карты-*/

var HoverMapWindow = document.querySelector(".hover-map");
var HoverMapButton = document.querySelector(".company-contacts-map");

HoverMapButton.addEventListener("click", function (event) {
    event.preventDefault(event);
    HoverMapWindow.classList.add("window-appearance");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (HoverMapWindow.classList.contains("window-appearance")) {
            HoverMapWindow.classList.remove("window-appearance");
        }
    }
});