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