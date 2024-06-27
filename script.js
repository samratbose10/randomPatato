document.addEventListener("DOMContentLoaded", () => {
  const potatoImages = [
        "alloq1.jpg",
        "aloooo.jpg",
        "pototoo.jpg",
    ];

  const potatoImg = document.getElementById("aloo");
  potatoImg.src = potatoImages[Math.floor(Math.random() * potatoImages.length)];