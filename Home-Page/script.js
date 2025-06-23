import books from "../DataBase/Data.js";

// new books section

const newBooksCarouselItem1 = document.getElementById("newBooksCarouselItem1");
const newBooksCarouselItem2 = document.getElementById("newBooksCarouselItem2");
const newBooksCarouselItem3 = document.getElementById("newBooksCarouselItem3");

const newestBookFiltred1 = books().filter(book => book.date <= 4);
const newestBookFiltred2 = books().filter(book => book.date <= 8 && book.date > 4);
const newestBookFiltred3 = books().filter(book => book.date <= 12 && book.date > 8);

function cartCreator(book) {
    return `<div class="col-lg-3 col-sm-6">
      <div class="thumb-wrapper">
        <div class="img-box">
          <img src="${book.cover}" class="img-fluid" alt="book img">
        </div>
        <div class="thumb-content">
          <h4 class="book-name">${book.name}</h4>
          ${book.stars}
          <p class="item-price"><strike>${book.lastPrice || ""}</strike><b>$${book.price}</b></p>
          ${book.summary ? `<p class="book-summary">${book.summary}</p>` : ""}
          ${
            book.comments
              ? `<div class="book-comments">
                  <h6>Comments:</h6>
                  <ul>
                    ${book.comments
                      .map((comment) => `<li>${comment}</li>`)
                      .join("")}
                  </ul>
                </div>`
              : ""
          }
          <button class="btn btn-outline-danger"> Add to Cart <i class="bi bi-bag"></i></button>
        </div>
      </div>
    </div>`;
}

newestBookFiltred1.forEach(book => {
    newBooksCarouselItem1.innerHTML += (cartCreator(book));
})

newestBookFiltred2.forEach(book => {
    newBooksCarouselItem2.innerHTML += (cartCreator(book));
})

newestBookFiltred3.forEach(book => {
    newBooksCarouselItem3.innerHTML += (cartCreator(book));
})


// best books section

const bestBooksCarouselItem1 = document.getElementById("bestBooksCarouselItem1");
const bestBooksCarouselItem2 = document.getElementById("bestBooksCarouselItem2");
const bestBooksCarouselItem3 = document.getElementById("bestBooksCarouselItem3");

const sortedBooksPerRate = books().sort(function (a, b) {
    let rateA = a.rating,
      rateB = b.rating;
    return rateB - rateA;
  });

const slicedSortedBooksPerRate1 = sortedBooksPerRate.slice(0, 4);
const slicedSortedBooksPerRate2 = sortedBooksPerRate.slice(4, 8);
const slicedSortedBooksPerRate3 = sortedBooksPerRate.slice(8, 12);

slicedSortedBooksPerRate1.forEach(book => {
    bestBooksCarouselItem1.innerHTML += (cartCreator(book));
})

slicedSortedBooksPerRate2.forEach(book => {
    bestBooksCarouselItem2.innerHTML += (cartCreator(book));
})

slicedSortedBooksPerRate3.forEach(book => {
    bestBooksCarouselItem3.innerHTML += (cartCreator(book));
})


// best deals section

const bestDealsCarouselItem1 = document.getElementById("bestDealsCarouselItem1");
const bestDealsCarouselItem2 = document.getElementById("bestDealsCarouselItem2");
const bestDealsCarouselItem3 = document.getElementById("bestDealsCarouselItem3");

const dealedBooks = books().filter(book => book.deal);

dealedBooks.slice(0,4).forEach(book => {
    bestDealsCarouselItem1.innerHTML += (cartCreator(book));
})

dealedBooks.slice(4,8).forEach(book => {
    bestDealsCarouselItem2.innerHTML += (cartCreator(book));
})

dealedBooks.slice(8,12).forEach(book => {
    bestDealsCarouselItem3.innerHTML += (cartCreator(book));
})


// best of philosophy section

const bestOfPhilosophyCarouselItem1 = document.getElementById("bestOfPhilosophyCarouselItem1");
const bestOfPhilosophyCarouselItem2 = document.getElementById("bestOfPhilosophyCarouselItem2");

const philosophyBooks = books().filter(book => book.categorie.includes("philosophy"));

philosophyBooks.slice(0,4).forEach(book => {
    bestOfPhilosophyCarouselItem1.innerHTML += (cartCreator(book));
})

philosophyBooks.slice(4,8).forEach(book => {
    bestOfPhilosophyCarouselItem2.innerHTML += (cartCreator(book));
})


// best of self development section

const bestSelfDevCarouselItem1 = document.getElementById("bestSelfDevCarouselItem1");
const bestSelfDevCarouselItem2 = document.getElementById("bestSelfDevCarouselItem2");
const bestSelfDevCarouselItem3 = document.getElementById("bestSelfDevCarouselItem3");

const selfDevBooks = books().filter(book => book.categorie.includes("self-dev"));

selfDevBooks.slice(0,3).forEach(book => {
    bestSelfDevCarouselItem1.innerHTML += (cartCreator(book));
})

selfDevBooks.slice(3,6).forEach(book => {
    bestSelfDevCarouselItem2.innerHTML += (cartCreator(book));
})

selfDevBooks.slice(6,9).forEach(book => {
    bestSelfDevCarouselItem3.innerHTML += (cartCreator(book));
})

// best of novels section

const bestNovelsCarouselItem1 = document.getElementById("bestNovelsCarouselItem1");
const bestNovelsCarouselItem2 = document.getElementById("bestNovelsCarouselItem2");
const bestNovelsCarouselItem3 = document.getElementById("bestNovelsCarouselItem3");

const novels = books().filter(book => book.categorie.includes("novel"));
const sortednovelsPerRate = novels.sort(function (a, b) {
    let rateA = a.rating,
      rateB = b.rating;
    return rateB - rateA;
  });

sortednovelsPerRate.slice(0,4).forEach(book => {
    bestNovelsCarouselItem1.innerHTML += (cartCreator(book));
})

sortednovelsPerRate.slice(4,8).forEach(book => {
    bestNovelsCarouselItem2.innerHTML += (cartCreator(book));
})

sortednovelsPerRate.slice(8,12).forEach(book => {
    bestNovelsCarouselItem3.innerHTML += (cartCreator(book));
})

// -------------Taha Demir -------------------
const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spin-button');
const resultDiv = document.getElementById('discount-result');

const segments = [
  { code: "SAVE10", text: "%10 İndirim", color: "#f28b82" },
  { code: "SAVE15", text: "%15 İndirim", color: "#fbbc04" },
  { code: "SAVE20", text: "%20 İndirim", color: "#34a853" },
  { code: "FREESHIP", text: "Ücretsiz Kargo", color: "#4285f4" },
  { code: "WELCOME5", text: "Hoşgeldin %5", color: "#d93025" }
];

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;
const anglePerSegment = (2 * Math.PI) / segments.length;

let angle = 0;
let spinning = false;

function drawWheel() {
  for (let i = 0; i < segments.length; i++) {
    const startAngle = i * anglePerSegment;
    const endAngle = startAngle + anglePerSegment;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.fillStyle = segments[i].color;
    ctx.fill();
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(startAngle + anglePerSegment / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = "bold 14px sans-serif";
    ctx.fillText(segments[i].text, radius - 10, 5);
    ctx.restore();
  }
}

function drawPointer() {
  ctx.save();
  ctx.translate(centerX, centerY + radius + 25); // Çarkın alt kısmına yerleştir

  // Ok şekli (yukarı bakan)
  ctx.beginPath();
  ctx.moveTo(0, -10);   // Uç noktası (yukarıda)
  ctx.lineTo(-8, 10);   // Sol kanat
  ctx.lineTo(-3, 6);    // Gövde sol
  ctx.lineTo(3, 6);     // Gövde sağ
  ctx.lineTo(8, 10);    // Sağ kanat
  ctx.closePath();

  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.restore();
}

spinBtn.addEventListener('click', () => {
  if (spinning) return;
  spinning = true;
  spinBtn.disabled = true;

  const spins = 5;
  const randomAngleDeg = Math.random() * 360;
  const finalAngle = (360 * spins + randomAngleDeg) * Math.PI / 180;

  const duration = 5000;
  const start = performance.now();

  function animate(time) {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 4);

    angle = easeOut * finalAngle;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Çarkı döndür ve çiz
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);
    ctx.translate(-centerX, -centerY);
    drawWheel();
    ctx.restore();

    // Sabit pointer'ı çiz (çark dönse de yerinde kalacak)
    drawPointer();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Pointer açısı sabit, çark açısına göre kazanan dilimi bulalım
      const normalizedAngle = angle % (2 * Math.PI);
      // pointer açı = 90° yani PI/2, fakat çark döndüğü için bunu hesaba kat
      const pointerAngle = (Math.PI / 2 - normalizedAngle + 2 * Math.PI) % (2 * Math.PI);

      const selectedIndex = Math.floor(pointerAngle / anglePerSegment) % segments.length;
      const selected = segments[selectedIndex];

    resultDiv.innerHTML = `🎉 Tebrikler! Size özel indirim kodunuz: <span style="color:#dc3545;">${selected.code}</span> (${selected.text})`;

      localStorage.setItem('discountCode', selected.code);
      spinning = false;
      spinBtn.disabled = false;
    }
  }

  requestAnimationFrame(animate);
});
// ---------YENİ EKLENDİ -------
// discounted books section

const discountedBooksCarouselItem1 = document.getElementById("discountedBooksCarouselItem1");
const discountedBooksCarouselItem2 = document.getElementById("discountedBooksCarouselItem2");
const discountedBooksCarouselItem3 = document.getElementById("discountedBooksCarouselItem3");

const discountedBooks = books().filter(book => book.deal); // kitap nesnesinde .discount varsa

discountedBooks.slice(0, 4).forEach(book => {
    discountedBooksCarouselItem1.innerHTML += cartCreator(book);
});

discountedBooks.slice(4, 8).forEach(book => {
    discountedBooksCarouselItem2.innerHTML += cartCreator(book);
});

discountedBooks.slice(8, 12).forEach(book => {
    discountedBooksCarouselItem3.innerHTML += cartCreator(book);
});
