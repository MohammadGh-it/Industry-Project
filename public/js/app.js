
// start menuBTN respone section select
let meneuBtn = document.querySelector(".meneuBtn")
let navBarResponse = document.querySelector(".navBarResponse")
let closeResponseNavBtn = document.querySelector(".closeResponseNavBtn")
let dropUPInSidebarResponseBtn = document.querySelector(".dropUPInSidebarResponseBtn")
let dropDownInSidebarResponseBox = document.querySelector(".dropDownInSidebarResponseBox")
let blaclLayerRespone = document.querySelector(".blaclLayerRespone")
// end menuBTN respone section select

// start mobile menu

// open and close mobile submenu
dropUPInSidebarResponseBtn.addEventListener('click', function () {
    dropDownInSidebarResponseBox.classList.toggle('hidden')
    dropUPInSidebarResponseBtn.classList.toggle('rotate-180')
})

// open mobile menu
meneuBtn.addEventListener('click', function () {
    navBarResponse.classList.remove('-left-260')
    navBarResponse.classList.add('left-0')
    blaclLayerRespone.classList.remove('hidden')

})

// close mobile meneu
closeResponseNavBtn.addEventListener("click", function () {
    navBarResponse.classList.add('-left-260')
    navBarResponse.classList.remove('left-0')
    blaclLayerRespone.classList.add('hidden')
})
blaclLayerRespone.addEventListener("click", function () {
    navBarResponse.classList.add('-left-260')
    navBarResponse.classList.remove('left-0')
    blaclLayerRespone.classList.add('hidden')
})

// end mobile menu



// start counter library 


// new PureCounter();

// Or you can customize it to override the default config.
// Here is the default configuration for all elements with class 'filesizecount'
new PureCounter({
    // Setting that can't' be overriden on pre-element
    selector: ".purecounter", // HTML query selector for specific element

    // Settings that can be overridden on a per-element basis, by `data-purecounter-*` attributes:
    start: 0, // Starting number [uint]
    // end: 100, // End number [uint]
    duration: 2, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: true, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for a certain time [boolean:false|seconds]
    decimals: 1, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable the Currency format. Use it to set the symbol too [boolean|char|string]
    formater: false, // Number toLocaleString locale/format, by default, is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it to set the symbol too [boolean|char|string]
});
// end counter library

// start swiper slider library
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// end swiper slider library

// start alert
document.addEventListener("DOMContentLoaded", () => {
    const footer =
        document.querySelector("#site-footer") ||
        document.querySelector("footer");

    if (!footer || typeof Swal === "undefined") {
        return;
    }

    let hasShown = false;

    const footerObserver = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting || hasShown) {
                return;
            }

            hasShown = true;

            Swal.fire({
                toast: true,
                position: "top-start",
                title: "Skip to content",

                customClass: {
                    container: "skip-alert-container",
                    popup: "skip-alert-popup",
                    title: "skip-alert-title"
                },

                showConfirmButton: false,
                showCloseButton: false,
                showClass: {
                    popup: "skip-alert-show"
                },
                hideClass: {
                    popup: ""
                },

                backdrop: false,
                timer: undefined,
                timerProgressBar: false,
                allowOutsideClick: false,
                allowEscapeKey: false,

                didOpen: (toast) => {
                    toast.setAttribute("role", "button");
                    toast.setAttribute("tabindex", "0");
                    toast.setAttribute(
                        "aria-label",
                        "Skip to content - بازگشت به بالای صفحه"
                    );

                    toast.addEventListener("click", () => {
                        Swal.close();

                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        });
                    });

                    toast.addEventListener("keydown", (event) => {
                        if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            Swal.close();

                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth"
                            });
                        }
                    });
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    footerObserver.observe(footer);
});
// end alert