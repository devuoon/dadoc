<<<<<<< HEAD
// 메인 swiper
var swiper = new Swiper('.main-swiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
=======
document.body.prepend(renderHeader());
document.body.insertAdjacentHTML("beforeend", renderFooter());

// 메인 swiper
var swiper = new Swiper(".main-swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
>>>>>>> dev-BE-kyungyun
  },
  loop: true,
  mousewheel: true,
  keyboard: true,
});

<<<<<<< HEAD
// book-list swiper
var swiper = new Swiper('.list-swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
=======
// 스크롤 시 헤더 고정
let header = document.querySelector("header");
let lnb = header.offsetTop;

window.addEventListener("scroll", function () {
  let windowScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (lnb < windowScroll) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

window.addEventListener("scroll", function () {
  if (this.scrollY > 200) {
    Top.classList.add("on");
  } else {
    Top.classList.remove("on");
  }
});

Top.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// book-list swiper
var swiper = new Swiper(".list-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
>>>>>>> dev-BE-kyungyun
  },
  loop: true,
});

<<<<<<< HEAD
// 상품 데이터 바인딩 함수
async function fetchProducts() {
  try {
    const bookList = document.getElementById('bookList');
    const response = await fetch('/products');
    const data = await response.json();
=======
async function fetchProducts() {
  try {
    const bookList = document.getElementById("bookList");
    const response = await fetch("/products");
    const data = await response.json();

>>>>>>> dev-BE-kyungyun
    const books = data
      .map(
        (book) =>
          `<div class="list-box">
<<<<<<< HEAD
      <a href='/product/${book._id}'><img src=${book.imageUrl} alt="" /></a>
=======
      <a><img src=${book.imageUrl} alt="" /></a>
>>>>>>> dev-BE-kyungyun
      <div class="info">
        <p class="cate new">${book.category}</p>
        <p class="name">${book.title}</p>
        <p class="price">${book.description}</p>
      </div>
    </div>`
      )
<<<<<<< HEAD
      .join('');
    bookList.innerHTML = books;
  } catch (error) {
    console.error('Error:', error);
=======

      .join("");
    bookList.innerHTML = books;
  } catch (error) {
    console.error("Error:", error);
>>>>>>> dev-BE-kyungyun
  }
}

fetchProducts();
