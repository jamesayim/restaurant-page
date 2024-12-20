export default function loadHome() {
    const content = document.getElementById("content");

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-container");
    homeDiv.innerHTML = 
    `<h1>Welcome to Jaysthetic Restaurant!</h1>
    <p>Hold on... Bro can really cook for you!</p>`;
    content.appendChild(homeDiv);
}