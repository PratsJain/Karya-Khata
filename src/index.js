import User from './backend.js';
import './style.css';
import fav from './assets/fav.png';
import frontend from './frontend.js';

const app = (function ScreenController() {
    const front = frontend();
    front.fav_icon(fav);
    const user = User();
    if (!user.getisData()) {
        front.loginForm();
    }
    document.querySelector(".login-form-container").addEventListener("submit", (event) => {
        event.preventDefault();
        const fname = document.querySelector("#fname").value;
        const lname = document.querySelector("#lname").value;
        const userName = fname + " " + lname;
        user.setName(userName);
        document.querySelector('.backdrop').classList.toggle("show");
        document.querySelector('.popup-modal').classList.toggle("show");
        front.updateName(userName);
    });
    front.renderSidebar(user);
})();

