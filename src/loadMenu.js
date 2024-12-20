export default function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add("menu-container");
    menuDiv.innerHTML = 
    `<h3>Oh, here is our menu!</h3>
    <p>Burger: $7.0</p>
    <p>Fries: $3.0</p>
    <p>Pizza: $5.0</p>
    <p>Salad: $9.0</p>`;
    content.appendChild(menuDiv);
}