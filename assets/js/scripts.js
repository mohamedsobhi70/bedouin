// counter 
if ($(".counter").length > 0) {
    $(".counter").each(function () {
        let th = $(this);
        th.find(".decrease").on("click", function () {
            if (+(th.find(".counter-num").html()) > 1) {
                th.find(".counter-num").text(+(th.find(".counter-num").html()) - 1);
            }
        })
        th.find(".increase").on("click", function () {
            th.find(".counter-num").text(+(th.find(".counter-num").html()) + 1);
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

//rooms carousel
if ($(".rooms-carousel").length > 0) {

    $('.rooms-carousel').owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // Go to the next item
    $('.nxtBtn').click(function () {
        $('.rooms-carousel').trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.prevBtn').click(function () {
        $('.rooms-carousel').trigger('prev.owl.carousel');
    })
}
// *********************************************

//check in and chekout date
if ($(".from").length > 0) {
    $(function () {
        let dateFormat = "dd/mm/yy",
            from = $(".from")
                .datepicker({
                    defaultDate: "+1w",
                    changeMonth: true,
                    changeYear: true,
                })
                .on("change", function () {
                    to.datepicker("option", "minDate", getDate(this));
                }),
            to = $(".to").datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                changeYear: true,
            })
                .on("change", function () {
                    from.datepicker("option", "maxDate", getDate(this));
                });

        function getDate(element) {
            let date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }

            return date;
        }
    });

}
// *********************************************

//footer in and chekout date
if ($(".from-1").length > 0) {
    $(function () {
        let dateFormat = "dd/mm/yy",
            from = $(".from-1")
                .datepicker({
                    defaultDate: "+1w",
                    changeMonth: true,
                    changeYear: true,
                })
                .on("change", function () {
                    to.datepicker("option", "minDate", getDate(this));
                }),
            to = $(".to-1").datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                changeYear: true,
            })
                .on("change", function () {
                    from.datepicker("option", "maxDate", getDate(this));
                });

        function getDate(element) {
            let date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }
            return date;
        }
    });

}
// *********************************************

// gallery lightbox 
if ($(".lightbox").length > 0) {
    const galleryItems = document.querySelectorAll(".gallery-item"), // all items
        totalgalleryItems = galleryItems.length, // length of the item
        lightbox = document.querySelector(".lightbox"),
        lightboxImg = lightbox.querySelector(".lightbox-img");
        let itemIndex = 0;

    for (let i = 0; i < totalgalleryItems; i++) {
        galleryItems[i].addEventListener("click", function () {
            itemIndex = i;
            changeItem();
            toggleLightbox();
        });
    }
    function changeItem() {
        imgSrc = galleryItems[itemIndex].querySelector("img").getAttribute("src");
        lightboxImg.src = imgSrc;
    }

    function toggleLightbox() {
        lightbox.classList.toggle("open");
    }

    function prevItem() {
        if (itemIndex === 0) {
            itemIndex = totalgalleryItems - 1;
        } else {
            itemIndex--;
        }
        changeItem();
    }

    function nextItem() {
        if (itemIndex === totalgalleryItems - 1) {
            itemIndex = 0;
        } else {
            itemIndex++;
        }
        changeItem();
    }
    // closing the lightbox
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            toggleLightbox();
        }
    });
}
// *********************************************
