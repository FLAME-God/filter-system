const data = [
  {
    id: 1,
    name: "Invicta Men's pro Driver",
    img: "https://m.media-amazon.com/images/I/7104SkxvhXL._AC_SL1500_.jpg",
    price: 74,
    cat: "Sport",
  },
  {
    id: 2,
    name: "Invicta Men's pro Driver",
    img: "https://m.media-amazon.com/images/I/81SkKZjDDyL._AC_SL1500_.jpg",
    price: 55,
    cat: "Luxury",
  },
  {
    id: 3,
    name: "Invicta Men's pro Driver",
    img: "https://m.media-amazon.com/images/I/715c+w+8okL._AC_SL1500_.jpg",
    price: 44,
    cat: "Sport",
  },
  {
    id: 4,
    name: "Invicta Men's pro Driver",
    img: "https://m.media-amazon.com/images/I/71spWNT8LEL._AC_SL1500_.jpg",
    price: 34,
    cat: "Dress",
  },
  {
    id: 5,
    name: "Invicta Men's pro Driver",
    img: "https://m.media-amazon.com/images/I/61srikhJ1IL._AC_SL1500_.jpg",
    price: 27,
    cat: "Sport",
  },
  {
    id: 6,
    name: "Timex Men's South Street Sport Watch",
    img: "https://m.media-amazon.com/images/I/71UbdHRuWCL._AC_SL1500_.jpg",
    price: 51,
    cat: "Dress",
  },
  {
    id: 7,
    name: "Fossil Grant Men's Watch with Chronograph Display and Genuine Leather or Stainless Steel Band",
    img: "https://m.media-amazon.com/images/I/419wVvB1TYL._AC_.jpg",
    price: 40,
    cat: "Luxury",
  },
  {
    id: 8,
    name: "Armitron Sport Men's 408209BLK Digital Watch",
    img: "https://m.media-amazon.com/images/I/91zS53BYa6L._AC_SL1500_.jpg",
    price: 39,
    cat: "Casual",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
        <div class="product">
            <img src=${product.img} alt="">
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
          </div>
        `
    )
    .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLocaleLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCatwegories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];
  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
    <span class="cat">${cat}</span>
    `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectCat = e.target.textContent;

    selectCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectCat));
  });
};

const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceList.max = maxPrice;
  priceList.value = maxPrice;
  priceValue.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setCatwegories();
setPrices();
