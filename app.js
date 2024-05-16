$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

const data = [
  {
    img: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Beautiful Wooden Table",
    subtitle:
      "Enhance your home decor with our exquisite wooden table collection.",
  },
  {
    img: "https://images.pexels.com/photos/7303902/pexels-photo-7303902.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Elegant Wooden Chair",
    subtitle:
      "Experience comfort and style with our range of elegant wooden chairs.",
  },
  {
    img: "https://images.pexels.com/photos/5186300/pexels-photo-5186300.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Rustic Wooden Shelf",
    subtitle:
      "Add a touch of rustic charm to your living space with our wooden shelf collection.",
  },
  {
    img: "https://images.pexels.com/photos/17306313/pexels-photo-17306313/free-photo-of-a-rustic-interior-with-wooden-furniture-and-a-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Cozy Wooden Furniture Set",
    subtitle:
      "Create a warm and inviting atmosphere with our cozy wooden furniture set.",
  },
  {
    img: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Modern Wooden Sofa",
    subtitle:
      "Upgrade your living room with our modern and comfortable wooden sofa collection.",
  },
  {
    img: "https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Stylish Wooden Cabinet",
    subtitle:
      "Organize your space in style with our range of stylish wooden cabinets.",
  },
];

const owlCarouselContainer = document.querySelector(".owl-carousel");
let box = "";
data.map((item) => {
  return (box += `<div class="item">
  <img
    src=${item.img}
    alt="Image 1"
  />
  <div class="py-4 text-center">
  <h3 class="line-clamp1">${item.title}</h3>
  <p class="line-clamp2">${item.subtitle}</p>
  </div>
</div>`);
});
owlCarouselContainer.innerHTML = box;
