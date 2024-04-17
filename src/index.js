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
            else if (button.classList.contains("edit-project-button")) {
                front.editProject(button.getAttribute("proID"), button);
            }
            else if (button.classList.contains("save-project-button")) {
                const pID = button.getAttribute("proID");
                let title = document.getElementById("Title-" + pID).value;
                title = (title.trim() === "") ? "Edited Project" : title.trim();
                user.updateProject(title, pID);
                front.saveProject(pID, button, title);
            }
            else if (button.classList.contains("del-project-button")) {
                const pID = button.getAttribute("proID");
                user.removeProject(pID);
                front.delProjectName(pID);
                renderHome();
            }
        };
    };

    const toggleTodoStatus = (inp) => {
        const proID = inp.getAttribute("proID");
        const todoID = inp.getAttribute("todoID");
        const status = inp.checked;
        user.toggleTodo(proID, todoID, status);
    };

    const addTodo = (proID, todoID) => {
        const title = document.getElementById("Title-" + todoID).value;
        const desc = document.getElementById("Desc-" + todoID).value;
        const notes = document.getElementById("Notes-" + todoID).value;
        const dueDate = document.getElementById("Date-" + todoID).value;
        const prior = parseInt(document.getElementById("Priority-" + todoID).value) + 1;
        const status = document.getElementById("Status-" + todoID).checked;
        const tID = user.addTodo(proID, title, desc, notes, dueDate, prior, status);
        front.addNewTodo(proID, user.getProject(proID).getTodo(tID));
        return tID;
    };

    const homeAddTodo = (proID, todoID) => {
        const title = document.getElementById("Title-" + todoID + proID).value;
        const desc = document.getElementById("Desc-" + todoID + proID).value;
        const notes = document.getElementById("Notes-" + todoID + proID).value;
        const dueDate = document.getElementById("Date-" + todoID + proID).value;
        const prior = parseInt(document.getElementById("Priority-" + todoID + proID).value) + 1;
        const status = document.getElementById("Status-" + todoID + proID).checked;
        const tID = user.addTodo(proID, title, desc, notes, dueDate, prior, status);
        front.homeAddNewTodo(proID, user.getProject(proID).getTodo(tID));
        return tID;
    };


    const addNewTodo = (pID) => {

        if (!document.querySelector(".content-item[todoID='new-todo']")) {
            front.renderNewTodo(pID, document.querySelector(".content"));
            document.querySelector(".edit-new-button[todoID='new-todo']").addEventListener('click', (event) => {
                event.preventDefault();
                const todoID = addTodo(pID, "new-todo");
                const newTodoButtons = document.querySelectorAll(`.todo-button[todoID='${todoID}']`);
                newTodoButtons.forEach((button) => {
                    button.addEventListener('click', todoActionHandler(button));
                });
                const inp = document.getElementById(`Status-${todoID}`);
                inp.addEventListener("change", (event) => {
                    toggleTodoStatus(inp);
                });
            });

            document.querySelector(".del-new-button[todoID=new-todo]").addEventListener('click', (event) => {
                event.preventDefault();
                front.removeNewTodo();
            });
        }
    };

    const homeAddNewTodo = (pID) => {

        if (!document.querySelector(`.content-item[todoID='new-todo'][proID="${pID}"]`)) {

            front.homeRenderNewTodo(pID);
            document.querySelector(`.edit-new-button[todoID='new-todo'][proID="${pID}"]`).addEventListener('click', (event) => {
                event.preventDefault();
                const todoID = homeAddTodo(pID, "new-todo");
                const newTodoButtons = document.querySelectorAll(`.todo-button[todoID='${todoID}']`);
                newTodoButtons.forEach((button) => {
                    button.addEventListener('click', homeTodoActionHandler(button));
                });
                const inp = document.getElementById(`Status-${todoID}`);
                inp.addEventListener("change", (event) => {
                    toggleTodoStatus(inp);
                });
            });

            document.querySelector(`.del-new-button[todoID='new-todo'][proID="${pID}"]`).addEventListener('click', (event) => {
                event.preventDefault();
                front.homeRemoveNewTodo(pID);
            });
        }
    };

    const homeEditTodo = (proID, todoID) => {
        const title = document.getElementById("Title-" + todoID + proID).value;
        const desc = document.getElementById("Desc-" + todoID + proID).value;
        const notes = document.getElementById("Notes-" + todoID + proID).value;
        const dueDate = document.getElementById("Date-" + todoID + proID).value;
        const prior = parseInt(document.getElementById("Priority-" + todoID + proID).value) + 1;
        const status = document.getElementById("Status-" + todoID + proID).checked;
        user.updateTodo(proID, todoID, title, desc, notes, dueDate, prior, status);
    };

    const homeInfoTodo = (pID, todoID) => {

        if (!document.querySelector(`.content-item[todoID="${todoID}"][proID="${pID}"]`)) {
            front.homeRenderNewTodo(pID, todoID, user.getProject(pID).getTodo(todoID));

            document.querySelector(`.edit-new-button[todoID="${todoID}"][proID="${pID}"]`).addEventListener('click', (event) => {
                event.preventDefault();
                homeEditTodo(pID, todoID);
                front.homeRemoveNewTodo(pID);
                front.homeUpdateTodo(user.getProject(pID).getTodo(todoID));
            });

            document.querySelector(`.del-new-button[todoID="${todoID}"][proID="${pID}"]`).addEventListener('click', (event) => {
                event.preventDefault();
                user.remTodo(pID, todoID);
                front.homeRemoveNewTodo(pID);
                front.homeRemTodo(todoID);
            });
        }
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


    const homeTodoActionHandler = (button, event) => {
        const pID = button.getAttribute("proID");
        
        if (event.target.classList.contains("todo-status-box")) {
            return;
        }
        if (button.classList.contains("add-new-task")) {
            homeAddNewTodo(pID);
        }
        else {
            const todoID = button.getAttribute("todoID");
            homeInfoTodo(pID, todoID);
        }
    };

    const renderHome = () => {
        front.renderHome(user.getProjectAll());

        const todoButtons = document.querySelectorAll(".todo-button");
        todoButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                homeTodoActionHandler(button, event);
            });
        });

        document.querySelectorAll(".todo-home-container").forEach((todoEL) => {
            todoEL.addEventListener("click", (event) => {
                homeTodoActionHandler(todoEL, event);
            });
        });

        const todoStatusInputs = document.querySelectorAll(".todo-status-box");
        todoStatusInputs.forEach((inp) => {
            inp.addEventListener("change", (event) => {
                toggleTodoStatus(inp);
            });
        });
    };

    const renderProject = (project) => {
        front.renderProject(user, project.getAttribute("proID"));

        const todoButtons = document.querySelectorAll(".todo-button");
        todoButtons.forEach((button) => {
            button.addEventListener('click', todoActionHandler(button));
        });

        const todoStatusInputs = document.querySelectorAll(".todo-status-box");
        todoStatusInputs.forEach((inp) => {
            inp.addEventListener("change", (event) => {
                toggleTodoStatus(inp);
            });
        });

        document.getElementById(`add-todo-${project.getAttribute("proID")}`).addEventListener("click", (event) => {
            addNewTodo(project.getAttribute("proID"));
        });
    };

    front.renderSidebar(user);

    document.querySelector(".create-pro").addEventListener("click", (event) => {

        if (!document.getElementById("new-project")) {
            front.addNewProject();
            document.querySelector(".edit-project-button[proID='new-project']").addEventListener('click', (event) => {

                let title = document.getElementById("Title-new-project").value;
                title = (title.trim() === "") ? "New Project" : title.trim();
                const proID = user.addProject(title);
                const project = user.getProject(proID);
                front.renderProjectName(project.getTitle(), "project-tile", project.getId());
                const pTile = document.querySelector(`.project-tile[proID="${proID}"]`);
                pTile.addEventListener("click", () => {
                    renderProject(pTile);
                });
                front.renderProject(user, proID);
                renderProject(pTile);
            });

            document.querySelector(".del-project-button[proID=new-project]").addEventListener('click', (event) => {
                renderHome();
            });
        }
    });

    renderHome();

    document.querySelector(".home-tile").addEventListener("click", () => {
        renderHome();
    });

    const allProjects = document.querySelectorAll(".project-tile");
    allProjects.forEach((project) => {
        project.addEventListener("click", () => {
            renderProject(project);
        });
    });

})();

