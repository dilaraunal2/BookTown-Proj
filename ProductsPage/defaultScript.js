import books from "../DataBase/Data.js";

export const sortElement = document.querySelector(".sorted-by");
export const dropdownItems = document.querySelectorAll("#dropdownItem");
export const main = document.querySelector("#thumb");
export let cartCountid = document.getElementById("cartCount");

export const categorieSelector = [
  ...document.querySelectorAll("#categorieSelector"),
];

dropdownItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    sortElement.innerHTML = ` : ${e.target.innerHTML}`;
  });
});
  getCartCount()
export default function productMaker(bookData) {
  main.innerHTML = ""; // Clear previous content before adding new
  bookData.forEach((book) => {
    main.innerHTML += `
      <div class="thumb-wrapper flex-column shadow position-relative">
        <div class="img-box position-relative">
          <img src="${book.cover}" class="img-fluid" alt="book cover">
          <button class="favorite-btn position-absolute top-0 end-0 m-2 btn btn-light">
            <i class="bi bi-heart fs-5 text-danger"></i>
          </button>
        </div>
        <div class="thumb-content">
          <h4 class="book-name">${book.name}</h4>
          <div class="star-rating">
            ${book.stars}
          </div>
          <p class="item-price">
            <strike>${book.lastPrice || ""}</strike>
            <b>$${book.price}</b>
          </p>
          <p class="book-summary">${book.summary || ""}</p>
          <div class="book-comments">
            ${book.comments
              ? book.comments.map((comment) => `<p class="comment">${comment}</p>`).join("")
              : ""}
          </div>
          <button class="btn btn-outline-danger"> Add to Cart <i class="bi bi-bag"></i></button>
        </div>
      </div>`;
  });
}

dropdownItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    main.innerHTML = "";
    if (sortElement.innerHTML == " : Cheapest to most expensive") {
      const price = books().sort(function (a, b) {
        let priceA = a.price,
          priceB = b.price;
        return priceA - priceB;
      });
      productMaker(price);
    } else if (sortElement.innerHTML == " : Most expensive to Cheapest") {
      const price = books().sort(function (a, b) {
        let priceA = a.price,
          priceB = b.price;
        return priceB - priceA;
      });
      productMaker(price);
    } else if (sortElement.innerHTML == " : Newest Books") {
      const date = books().sort(function (a, b) {
        let dateA = new Date(a.date),
          dateB = new Date(b.date);
        return dateA - dateB;
      });
      productMaker(date);
    } else if (sortElement.innerHTML == " : Best Of BookTown") {
      const rating = books().sort(function (a, b) {
        let rateA = a.rating,
          rateB = b.rating;
        return rateB - rateA;
      });
      productMaker(rating);
    }
  });
});

categorieSelector.forEach((el) => {
  el.addEventListener("click", (e) => {
    main.innerHTML = "";
    if (e.target.innerHTML == "Self-Development") {
      const getBooks = books().filter((product) =>
        product.categorie.includes("self-dev")
      );
      productMaker(getBooks);
    } else if (e.target.innerHTML == "Philosophy") {
      const getBooks = books().filter((product) =>
        product.categorie.includes("philosophy")
      );
      productMaker(getBooks);
    } else if (e.target.innerHTML == "Newest Books") {
      const date = books().sort(function (a, b) {
        let dateA = new Date(a.date),
          dateB = new Date(b.date);
        return dateA - dateB;
      });
      productMaker(date);
    } else if (e.target.innerHTML == "Novels") {
      const getBooks = books().filter((product) =>
        product.categorie.includes("novel")
      );
      productMaker(getBooks);
    } else if (e.target.innerHTML == "Best Of BookTown") {
      const rating = books().sort(function (a, b) {
        let rateA = a.rating,
          rateB = b.rating;
        return rateB - rateA;
      });
      productMaker(rating);
    }
  });
});

// send data to cart section

let dataState = JSON.parse(localStorage.getItem("data")) || [];

if (localStorage.getItem("data") == null) {
  dataState = [];
}

window.addEventListener("click", (el) => {
  if (el.target.innerText == "Add to Cart ") {
    let data = {
      cover: el.target.parentElement.parentElement.children[0].children[0].src,
      name: el.target.parentElement.parentElement.children[1].children[0]
        .innerText,
      price:
        el.target.parentElement.parentElement.children[1].children[2].children[1].innerText.slice(
          1
        ),
      value: 1,
      lastprice: (() => {
        if (
          el.target.parentElement.parentElement.children[1].children[2]
            .children[0].innerText
        ) {
          return el.target.parentElement.parentElement.children[1].children[2]
            .children[0].innerText;
        }
      })(),
    };
    dataState.push(data);
    localStorage.setItem("data", JSON.stringify(dataState));
    getCartCount();
  }

});

// added to cart , alert section



// Replace the alert with showNotification
window.addEventListener("click", (el) => {
  if (el.target.innerText == "Add to Cart ") {
    const bookName = el.target.parentElement.children[0].innerText;
    el.stopImmediatePropagation();
  }
});


// bi-list section

const biList = document.querySelector(".bi-list");
const secondNavbarBiListClicked = document.querySelector(
  ".second-navbar-bi-list-clicked"
);
const closeListBtn = document.querySelector(".close-list-btn");

biList.addEventListener("click", () => {
  secondNavbarBiListClicked.style.top = "0rem";
});

closeListBtn.addEventListener("click", () => {
  secondNavbarBiListClicked.style.top = "-40rem";
  setTimeout(() => {
    location.reload();
  }, 500);
});

function getCartCount() {
  let dataState = JSON.parse(localStorage.getItem("data")) || [];

if (localStorage.getItem("data") == null) {
  dataState = [];
}
  let cartCountList = 0;
  localStorage.setItem("data", JSON.stringify(dataState));
  cartCountList = dataState?.length;
  if (cartCountList != null && cartCountList != undefined) {
    cartCountid.innerHTML = cartCountList;
  }
}
// FAVORİLERE EKLEME
let favoriteBooks = JSON.parse(localStorage.getItem("favorites")) || [];

window.addEventListener("click", (e) => {
  if (e.target.closest(".favorite-btn")) {
    const bookCard = e.target.closest(".thumb-wrapper");

    const favoriteBook = {
      cover: bookCard.querySelector("img").src,
      name: bookCard.querySelector(".book-name").innerText,
      price: bookCard.querySelector(".item-price b").innerText.slice(1),
      lastPrice: bookCard.querySelector(".item-price strike")?.innerText || null,
    };

    // Eğer daha önce eklenmediyse favorilere ekle
    const isAlreadyFavorited = favoriteBooks.some(
      (book) => book.name === favoriteBook.name
    );

    if (!isAlreadyFavorited) {
      favoriteBooks.push(favoriteBook);
      localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
      alert(`${favoriteBook.name} added to favorites!`);
    } else {
      alert(`${favoriteBook.name} is already in favorites!`);
    }
  }
});

