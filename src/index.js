import homeLoadContent from "./loadHome.js";
import menuLoadContent from "./loadMenu.js";
import contactLoadContent from "./contactLoad.js";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
    
    const content = document.getElementById("content");

    const clearContent = () => {
        content.innerHTML = "";
    };

    document.getElementById("homeTab").addEventListener("click", () => {
        clearContent();
        homeLoadContent();
    });

    document.getElementById("menuTab").addEventListener("click", () => {
        clearContent();
        menuLoadContent();
    });

    document.getElementById("contactTab").addEventListener("click", () => {
        clearContent();
        contactLoadContent();
    });
    homeLoadContent();
});
