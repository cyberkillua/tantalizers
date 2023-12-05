const carousel = document.querySelector(".carousel")
const carouselChildren = [
    {
        src: "./images/frame.png",
        name: "Spaghetti and Crunchy Chicken",
        price: "₦ 2,330.00"
    },
    {
        src: "./images/spag.png",
        name: "Egusi Soup with Shaki and Semovita",
        price: "₦ 2,330.00"
    },
    {
        src: "./images/yam.png",
        name: "Fried Rice and Pepper Grilled Chicken",
        price: "₦ 2,330.00"
    },
    {
        src: "./images/rice.png",
        name: "Moin-moin and Pepper Grilled Chicken",
        price: "₦ 2,330.00"
    },
    {
        src: "./images/jollofrice.png",
        name: "Jollof Rice and Barbecue Chicken",
        price: "₦ 2,330.00"
    },
    {
        src: "./images/frame.png",
        name: "Spaghetti and Crunchy Chicken",
        price: "₦ 2,330.00"
    },
    {
        src: "./images/spag.png",
        name: "Spaghetti and Crunchy Chicken",
        price: "₦ 2,330.00"
    },
    {
        src: "./images/yam.png",
        name: "Fried Rice and Pepper Grilled Chicken",
        price: "₦ 2,330.00"
    },
    {
        src: "./images/rice.png",
        name: "Moin-moin and Pepper Grilled Chicken",
        price: "₦ 2,330.00"
    },
]
var menu = ['Slide 1', 'Slide 2', 'Slide 3']

var mySwiper = new Swiper('.carousel', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})



carouselChildren.forEach(item => {
    const card = document.createElement('swiper-slide')
    card.classList.add("card")
    card.innerHTML = `
    <img src=${item.src} class="carousel-image" alt=${item.name} /> 
    <div class="card-bottom">
      <p class="paragraph--1 food-name">${item.name}</p>
      <p class="price paragraph--3">${item.price}</p>
    </div>
`
    carousel.appendChild(card)
})

