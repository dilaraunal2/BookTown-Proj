
document.addEventListener("click", function (e) {
  if (e.target.closest(".favorite-btn")) {
    const card = e.target.closest(".thumb-wrapper");

    if (!card) return;

    // Kitap bilgilerini DOM'dan alıyoruz:
    const cover = card.querySelector("img").src;
    const name = card.querySelector(".book-name").innerText;
    const price = card.querySelector(".item-price b").innerText;
    const lastPriceElement = card.querySelector(".item-price strike");
    const lastPrice = lastPriceElement ? lastPriceElement.innerText : "";

    // Favorilere eklenmek üzere kitap objesi oluşturuluyor:
    const book = {
      cover,
      name,
      price,
      lastPrice,
    };

    // Mevcut favori listesi alınıyor:
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Aynı kitap zaten favorilerde varsa tekrar ekleme:
    const isAlreadyFavorite = favorites.some(fav => fav.name === book.name);
    if (isAlreadyFavorite) {
      alert("This book is already in your favorites!");
      return;
    }

    // Yeni kitap favorilere ekleniyor:
    favorites.push(book);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert(`"${book.name}" has been added to your favorites! ❤️`);
  }
});
