const counter = document.querySelector(".counter");
async function updateCounter() {
    let response = await fetch("https://g2oosoewxvf3pxeu4sffoks26u0dciuo.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Site Views: ${data}`;
}
updateCounter();