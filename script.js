const carousel = document.querySelector(".swiper-wrapper")
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
        clickable: true,
    },
    slidesPerView: 1.5,
    spaceBetween: 20,
    breakpoints: {
        700: {
            slidesPerView: 5.5,
            spaceBetween: 200,
        },
    },
    autoplay: {
        delay: 1000,
    },
});

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

carouselChildren.forEach(item => {
    const card = document.createElement('div')
    card.classList.add("swiper-slide")
    card.innerHTML = `
    <img src=${item.src} class="carousel-image" alt=${item.name} /> 
    <div class="card-bottom">
      <p class="paragraph--1 food-name">${item.name}</p>
      <p class="price paragraph--3">${item.price}</p>
    </div>
`
    carousel.appendChild(card)
})

