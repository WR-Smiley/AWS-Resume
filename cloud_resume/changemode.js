function myFunction() {
    let body = document.body;
    let button = document.querySelector(".modeButton")
    body.classList.toggle("dark");
    button.classList.toggle("dark");
    button.classList.toggle("light");
}