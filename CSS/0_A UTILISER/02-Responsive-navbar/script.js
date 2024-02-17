const navToggler = document.querySelector(".button");
const navigation = document.querySelector("nav");

navToggler.addEventListener("click", openClose);

function openClose() {
    navigation.classList.toggle("active");
}