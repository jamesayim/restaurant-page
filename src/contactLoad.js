export default function contactLoad() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add("contact-container");
    contactDiv.innerHTML = '<h2>Contact us at: <b>restaurant@jaysthetic.com</b></h2>';
    content.appendChild(contactDiv);
}