// menu 
$(".bedouin-menu-btn").on("click", function () {
    $(".bedouin-menu").addClass("active");
    $("body").css("overflow", "hidden");

})

$(".bedouin-menu-close").on("click", function () {
    $(".bedouin-menu").removeClass("active");
    $("body").css("overflow", "visible");

})

// details menu 
$(".bedouin-details-btn").on("click", function () {
    $(".bedouin-details").addClass("active");
    $("body").css("overflow", "hidden");

})

$(".bedouin-details-close").on("click", function () {
    $(".bedouin-details").removeClass("active");
    $("body").css("overflow", "visible");

})

// counter 
if ($(".counter").length > 0) {
    $(".counter").each(function () {
        let th = $(this);
        th.find(".decrease").on("click", function () {
            if (+(th.find(".counter-num").val()) > 1) {
                th.find(".counter-num").val(+(th.find(".counter-num").val()) - 1);
            }
        })
        th.find(".increase").on("click", function () {
            th.find(".counter-num").val(+(th.find(".counter-num").val()) + 1);
        })
    }
    )
}
// *********************************************

// gallery masonary
if ($(".gallery").length > 0) {

    $('.gallery').packery({
        itemSelector: '.grid-item',
        gutter: 20,
    });
}
// *********************************************

// testimonials carousel
if ($(".testimonials-carousel").length > 0) {

    $('.testimonials-carousel').owlCarousel({
        loop: true,
        center: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                margin: 16,
                items: 1.15
            },
            600: {
                margin: 16,
                items: 2
            },
            1000: {
                margin: 32,
                items: 3

            }
        }
    });
    $('.testimonials-carousel').trigger("to.owl.carousel", [1, 1])
    // Go to the next item
    $('.testimonials  .nxtBtn').click(function () {
        $('.testimonials-carousel').trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.testimonials .prevBtn').click(function () {
        $('.testimonials-carousel').trigger('prev.owl.carousel');
    })
}
// *********************************************

//rooms carousel
if ($(".rooms-carousel").length > 0) {

    $('.rooms-carousel').owlCarousel({
        nav: false,
        dots: false,
        responsive: {
            0: {
                margin: 24,
                items: 1.4,
                loop: true,
            },
            600: {
                margin: 24,
                loop: true,
                items: 2
            },
            1000: {
                loop: false,
                margin: 30,
                items: 3
            }
        }
    });
    // Go to the next item
    $('.rooms .nxtBtn').click(function () {
        $('.rooms-carousel').trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.rooms .prevBtn').click(function () {
        $('.rooms-carousel').trigger('prev.owl.carousel');
    })
}
// *********************************************

// gallery lightbox 
// if ($(".lightbox").length > 0) {
//     const galleryItems = document.querySelectorAll(".gallery-item"), // all items
//         totalgalleryItems = galleryItems.length, // length of the item
//         lightbox = document.querySelector(".lightbox"),
//         lightboxImg = lightbox.querySelector(".lightbox-img");
//     let itemIndex = 0;

//     for (let i = 0; i < totalgalleryItems; i++) {
//         galleryItems[i].addEventListener("click", function () {
//             itemIndex = i;
//             changeItem();
//             toggleLightbox();
//         });
//     }
//     function changeItem() {
//         imgSrc = galleryItems[itemIndex].querySelector("img").getAttribute("src");
//         lightboxImg.src = imgSrc;
//     }

//     function toggleLightbox() {
//         lightbox.classList.toggle("open");
//     }

//     function prevItem() {
//         if (itemIndex === 0) {
//             itemIndex = totalgalleryItems - 1;
//         } else {
//             itemIndex--;
//         }
//         changeItem();
//     }

//     function nextItem() {
//         if (itemIndex === totalgalleryItems - 1) {
//             itemIndex = 0;
//         } else {
//             itemIndex++;
//         }
//         changeItem();
//     }
//     // closing the lightbox
//     lightbox.addEventListener("click", function (event) {
//         if (event.target === lightbox) {
//             toggleLightbox();
//         }
//     });
// }
// *********************************************

if ($('.room-details').length) {
    $('.room-details').on("mouseenter", function () {
        $(this).find("span").show(200)
    }).on("mouseleave", function () {
        $(this).find("span").hide(200)
    })
}

if ($('.gallery-item').length) {

    const galleryItems = $(".gallery-item");
    // galleryItems.each(function () {
    let th = $(this);
    $(".gallery-item").on("click", function () {
        return false;

    })
    $(".gallery-item").magnificPopup({
        midClick: true,
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        },
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function (openerElement) {
                return openerElement.is('a') ? openerElement : openerElement.parents('.gallery-item-wrapper');
            }
        }
    });
    // })

    // $('.crust-magnific-link').on('click', function () {
    //     return false;
    // });
    // $('.crust-magnific-link').magnificPopup({
    //     midClick: true,
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     },
    //     zoom: {
    //         enabled: true,
    //         duration: 300, // duration of the effect, in milliseconds
    //         easing: 'ease-in-out', // CSS transition easing function
    //         opener: function (openerElement) {
    //             return openerElement.is('a') ? openerElement : openerElement.parents('.crust-gallery-item');
    //         }
    //     }
    // });
}


if ($(".filt-btn").length) {
    $(".filt-btn").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".filt-section").toggleClass("hidden")
    })
}