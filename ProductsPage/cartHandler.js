// Send data to cart section

let dataState = JSON.parse(localStorage.getItem("data")) || [];

if (localStorage.getItem("data") == null) {
  dataState = [];
}

window.addEventListener("mouseenter", () => {
  location.reload();
});

window.addEventListener("click", (el) => {
  if (el.target.innerText.trim() === "Add to Cart") {
    let data = {
      cover: el.target.parentElement.parentElement.children[0].children[0].src,
      name: el.target.parentElement.parentElement.children[1].children[0].innerText,
      price: el.target.parentElement.parentElement.children[1].children[2].children[1].innerText,
      lastprice: (() => {
        let lastPriceElement = el.target.parentElement.parentElement.children[1].children[2].children[0];
        return lastPriceElement ? lastPriceElement.innerText : null;
      })(),
    };

    // Check if the item is already in the cart
    let existingIndex = dataState.findIndex(item => item.name === data.name);
    
    if (existingIndex !== -1) {
      // If the item exists, remove it from the cart
      dataState.splice(existingIndex, 1);
      alert(`${data.name} Removed from cart!`);
    } else {
      // Otherwise, add it to the cart
      dataState.push(data);
      alert(`${data.name} Added to cart!`);
    }

    localStorage.setItem("data", JSON.stringify(dataState));
  }
});
