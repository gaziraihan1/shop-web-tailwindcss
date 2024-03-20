let menuBtn = document.getElementById("menuBtn");
let mainMenu = document.getElementById("mainMenu");

menuBtn.addEventListener("click", () => {
    mainMenu.classList.toggle('hidden');
})