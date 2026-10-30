// kartu dinamik
// mengambil data dari file json
fetch("https://nonameindo.github.io/data.json/data.json")
  .then((response) => response.json())
  .then((data) => {
    // Membuat kartu
    createCardsFromData(data.moreInfo, "more-info-container");
    createCardsFromData(data.Benefits, "benefits-container");
  })
  .catch((error) => console.error("Error loading JSON data:", error));

// Function untuk kartu
function createCardsFromData(dataArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  dataArray.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("info-card");
    card.innerHTML = `
    <div class="card-body">
      <p class="card-text">${item.text}</p>
    </div>
  `;
    container.appendChild(card);
  });
}

// Tombol Hero section
function learnMore() {
  document.querySelector(".more-info").scrollIntoView({ behavior: "smooth" });
}

// Reservasi
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservation-form");
  form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault(); // Prevent actual submission (for demo)
      alert("Reservasi berhasil dikirim!");
    }
    form.classList.add("was-validated");
  });
});

// Navbar effect
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

// Sembunyikan saat scroll
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px";
  } else if (scrollTop === 0) {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// muncul saat di klik
document.addEventListener("click", function (e) {
  const clickY = e.clientY;
  if (clickY < 100 || navbar.contains(e.target)) {
    navbar.style.top = "0";
  }
});
