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

    const updateTodo = (proID, todoID) => {
        const title = document.getElementById("Title-" + todoID).value;
        const desc = document.getElementById("Desc-" + todoID).value;
        const notes = document.getElementById("Notes-" + todoID).value;
        const dueDate = document.getElementById("Date-" + todoID).value;
        const prior = parseInt(document.getElementById("Priority-" + todoID).value) + 1;
        const status = document.getElementById("Status-" + todoID).checked;
        user.updateTodo(proID, todoID, title, desc, notes, dueDate, prior, status);
    };
    const todoActionHandler = (button) => {
        return function (event) {
            event.preventDefault();
            if (button.classList.contains("edit-button")) {
                front.editToDo(button.getAttribute("todoID"), button);
            }
            else if (button.classList.contains("save-button")) {
                const pID = button.getAttribute("proID");
                const todoID = button.getAttribute("todoID");
                updateTodo(pID, todoID);
                front.saveToDo(button.getAttribute("todoID"), button);
            }
            else if (button.classList.contains("del-button")) {
                const pID = button.getAttribute("proID");
                const todoID = button.getAttribute("todoID");
                user.remTodo(pID, todoID);
                front.remToDo(todoID);
            }
        };
    };
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
    const allProjects = document.querySelectorAll(".project-tile");
    allProjects.forEach((project) => {
        project.addEventListener("click", () => {
            front.renderProject(user, project.getAttribute("proID"));
            const todoButtons = document.querySelectorAll(".todo-button");
            todoButtons.forEach((button) => {
                button.addEventListener('click', todoActionHandler(button));
            });
        });
    });
})();

