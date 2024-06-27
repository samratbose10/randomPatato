document.addEventListener("DOMContentLoaded", () => {
    const potatoImages = [
        "aloooo.jpg",
        "allo1.jpg",
        "pototoo.png"
    ];

    const aloo = document.getElementById("aloo");
    const nayaAlooButton = document.getElementById("nayaAloo");

    const loadRandomPotato = () => {
        aloo.classList.remove("fade-in");
        aloo.classList.remove("rotate");
        const randomImage = potatoImages[Math.floor(Math.random() * potatoImages.length)];
        aloo.src = randomImage;
        aloo.style.width = "200px";
        aloo.onload = () => {
            aloo.classList.add("fade-in");
            aloo.classList.add("rotate");
        };
    };

    loadRandomPotato();

    aloo.addEventListener("click", () => {
        const currentWidth = aloo.clientWidth;
        aloo.style.width = currentWidth + 20 + "px";
        aloo.classList.add("rotate");
        setTimeout(() => {
            aloo.classList.remove("rotate");
        }, 1000);
    });

    nayaAlooButton.addEventListener("click", loadRandomPotato);
});