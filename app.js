const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// array for image product
const products = [
    {
        id: 1,
        title: "Asus TUF Gaming O12G V2 RTX 3060",
        price: 450,
        description: "The tougher design of the ASUS TUF Gaming GeForce RTX™ 3060 OC Edition 12GB GDDR6 with the best thermal management performance.",

        displays: [
            {
                code: "dp1",
                img: "image/asus/asus4.png"
            },
            {
                code: "dp2",
                img: "image/asus/asus1.png"
            },
            {
                code: "dp3",
                img: "image/asus/asus3.png"
            },
            {
                code: "dp4",
                img: "image/asus/asus12.png"
            }
        ],
    },
    {
        id: 2,
        title: "Colorful Ultra W OC 12G RTX 3060",
        price: 300,
        description: "The iGame GeForce RTX 3060 Ti Ultra W OC G6X V2-V delivers excellent performance for gaming and content creation. With fast GDDR6X VRAM, stable overclocking, and efficient cooling, it handles high-resolution gaming with ease. Its RGB lighting and stylish design add to its appeal for gamers and creators.",

        displays: [
            {
                code: "dp5",
                img: "image/colorful/colorful2.png",
            },
            {
                code: "dp6",
                img: "image/colorful/colorful1.png",
            },
            {
                code: "dp7",
                img: "image/colorful/colorful4.png",
            },
            {
                code: "dp8",
                img: "image/colorful/colorful3.png",
            },
        ],

    },
    {
        id: 3,
        title: "Gigabyte Eagle OC RTX 3060",
        price: 250,
        description: "The GeForce RTX 3060 EAGLE 12G offers solid gaming performance at an affordable price. Powered by NVIDIA Ampere architecture, it features 12GB of GDDR6 VRAM for smooth gameplay and efficient multitasking. Reliable cooling and innovative technologies like ray tracing and DLSS provide an immersive gaming experience.",

        displays: [
            {
                code: "dp9",
                img: "image/gigabyte/gigabyte1.png",
            },
            {
                code: "dp10",
                img: "image/gigabyte/gigabyte4.png",
            },
            {
                code: "dp11",
                img: "image/gigabyte/gigabyte5.png",
            },
            {
                code: "dp12",
                img: "image/gigabyte/gigabyte7.png",
            }
        ],
    },
    {
        id: 4,
        title: "MSI GAMING-X 12G RTX 3060",
        price: 200,
        description: "The latest iteration of MSI’s iconic GAMING series once again brings performance, low-noise efficiency, and aesthetics that hardcore gamers have come to recognize and trust. Now you too can enjoy all your favorite games with a powerful graphics card that stays cool and silent. Just the way you like it.",

        displays: [
            {
                code: "dp13",
                img: "image/msi/msi2.png",
            },
            {
                code: "dp14",
                img: "image/msi/msi1.png",
            },
            {
                code: "dp15",
                img: "image/msi/msi3.png",
            },
            {
                code: "dp16",
                img: "image/msi/msi4.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductDisplays = document.querySelectorAll(".display");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the choosen product
        choosenProduct = products[index];

        // change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductDesc.textContent = choosenProduct.description
        currentProductImg.src = choosenProduct.displays[0].img

        currentProductDisplays.forEach((display, index) => {
            display.querySelector("img").src = choosenProduct.displays[index].img;
        })
    });
});

// change display product
currentProductDisplays.forEach((display, index) => {
    display.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.displays[index].img
    })
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});