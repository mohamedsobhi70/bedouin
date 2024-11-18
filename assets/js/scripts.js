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
            let input = th.find(".counter-num");
            let currentValue = +input.val();
            if (currentValue > 0) {
                input.val(currentValue - 1).trigger('input'); // Trigger input event to update any listeners
            }
        });

        th.find(".increase").on("click", function () {
            let input = th.find(".counter-num");
            input.val(+input.val() + 1).trigger('input'); // Trigger input event to update any listeners
        });
    });
}
if ($("#rooms-num").length > 0) {
    function updateSummary() {
        // Get input values
        const rooms = $('#rooms-num').val();
        const adults = $('#adults-num').val();
        const children = $('#children-num').val();

        // Update corresponding span elements
        $('.rooms-selected-num').text(rooms);
        $('.adults-selected-num').text(adults);
        $('.children-selected-num').text(children);
    }

    // Add event listeners to input elements
    $('#rooms-num, #adults-num, #children-num').on('input', updateSummary);
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


if ($('.room-details').length) {
    $('.room-details').on("mouseenter", function () {
        $(this).find("span").show(200)
    }).on("mouseleave", function () {
        $(this).find("span").hide(200)
    })
}


if ($(".filt-btn").length) {
    $(".filt-btn").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".filt-section").toggleClass("hidden")
    })
}



//



//

// const apiKey = '<your_api_key>';
// const endpointUrl = 'https://api.djubo.com/v2/hotel/inventory';

// fetch(endpointUrl, {
//   method: 'GET',
//   headers: {
//     'Authorization': `Bearer ${apiKey}`,
//     'Content-Type': 'application/json'
//   }
// })
// .then(response => response.json())
// .then(data => {
//   // Process the response data here
//   const rooms = data.rooms;
//   const roomTypes = data.room_types;

//   // Display the available room types on the web page
//   const roomTypeSelect = document.getElementById('room-type-select');
//   roomTypes.forEach(roomType => {
//     const option = document.createElement('option');
//     option.value = roomType.id;
//     option.text = roomType.name;
//     roomTypeSelect.appendChild(option);
//   });

//   // Handle the user's booking request
//   const bookButton = document.getElementById('book-button');
//   bookButton.addEventListener('click', () => {
//     const selectedRoomTypeId = roomTypeSelect.value;
//     const selectedRoomType = roomTypes.find(roomType => roomType.id === selectedRoomTypeId);
//     const selectedRoom = rooms.find(room => room.room_type_id === selectedRoomTypeId && room.status === 'available');
//     if (selectedRoom) {
//       // Book the room
//       selectedRoom.status = 'booked';
//       alert(`Room ${selectedRoom.room_number} has been booked for ${selectedRoomType.name}!`);
//     } else {
//       // No available rooms of this type
//       alert(`Sorry, there are no available rooms of type ${selectedRoomType.name}. Please choose another room type.`);
//     }
//   });
// })
// .catch(error => {
//   // Handle any errors here
//   console.error(error);
// });












// //////////////////////////////
// const apiKey = '<your_api_key>';
// const inventoryEndpoint = 'https://api.djubo.com/v2/hotel/inventory';
// const ratesEndpoint = 'https://api.djubo.com/v2/hotel/rates';

// // Get the list of available room types and display them on the page
// fetch(inventoryEndpoint, {
//   method: 'GET',
//   headers: {
//     'Authorization': `Bearer ${apiKey}`,
//     'Content-Type': 'application/json'
//   }
// })
// .then(response => response.json())
// .then(data => {
//   const roomTypes = data.room_types;
//   // ... display the room types on the page ...
// });

// // Allow the user to select the check-in and check-out dates and number of rooms
// const checkInDateInput = document.getElementById('check-in-date');
// const checkOutDateInput = document.getElementById('check-out-date');
// const numRoomsInput = document.getElementById('num-rooms');

// // Check availability when the user clicks the "Check Availability" button
// const checkAvailabilityButton = document.getElementById('check-availability');
// checkAvailabilityButton.addEventListener('click', () => {
//   const checkInDate = checkInDateInput.value;
//   const checkOutDate = checkOutDateInput.value;
//   const numRooms = numRoomsInput.value;

//   // Use the inventory endpoint to check availability for the selected dates and number of rooms
//   const inventoryQueryParams = `check_in=${checkInDate}&check_out=${checkOutDate}&num_rooms=${numRooms}`;
//   fetch(`${inventoryEndpoint}?${inventoryQueryParams}`, {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${apiKey}`,
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     const availableRooms = data.rooms.filter(room => room.status === 'available');
//     if (availableRooms.length >= numRooms) {
//       // Display the available rooms and pricing information on the page
//       fetch(ratesEndpoint, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${apiKey}`,
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(response => response.json())
//       .then(data => {
//         const roomRates = data.rates;
//         // ... display the available rooms and pricing information on the page ...
//       });
//     } else {
//       // Display an error message indicating that the selected rooms are not available
//       alert(`Sorry, there are no ${numRooms} available rooms for the selected dates.`);
//     }
//   })
//   .catch(error => {
//     // Handle any errors here
//     console.error(error);
//   });
// });

// // Handle the booking process when the user clicks the "Book Now" button
// const bookNowButton = document.getElementById('book-now');
// bookNowButton.addEventListener('click', () => {
//   // Use the bookings endpoint to create a new booking for the selected rooms and dates
//   // ... code to create a new booking using the bookings endpoint ...
// });
