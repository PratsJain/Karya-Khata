import homeIcon from './assets/home-minus-outline.svg';
import projectIcon from './assets/note-edit-outline.svg';
import sunIcon from './assets/sun.png';
import moonicon from './assets/moon.png';
import man from './assets/man.png';
import editIcon from './assets/edit.png';
import delIcon from './assets/delete.png';
import saveIcon from './assets/save.png';
import { format } from 'date-fns';


export default function frontend() {

    document.querySelector(".backdrop").addEventListener("click", () => {
        document.querySelector('.backdrop').classList.toggle("show");
        document.querySelector('.popup-modal').classList.toggle("show");
    });

    document.querySelector('.theme').addEventListener("click", () => {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon.src === moonicon) {
            themeIcon.src = sunIcon;
        }
        else {
            themeIcon.src = moonicon;
        }
    });

    const fav_icon = (img) => {
        const favicon = document.createElement('link');

        favicon.rel = 'icon';
        favicon.type = 'image/png';
        favicon.href = img;
        const existingFavicon = document.querySelector('link[rel="icon"]');
        if (existingFavicon) {
            document.head.removeChild(existingFavicon);
        }
        document.head.appendChild(favicon);
        const themeIcon = new Image();
        themeIcon.src = moonicon;
        themeIcon.classList.add('theme-icon');
        const themeButton = document.querySelector('.theme');
        themeButton.appendChild(themeIcon);

    };


    const getPriCol = (pr) => {
        const mapping = ["red", "orange", "yellow", "blue", "aqua"];
        return mapping[pr];
    }

    const loginForm = () => {
        document.querySelector('.backdrop').classList.toggle("show");
        document.querySelector('.popup-modal').classList.toggle("show");
    };
    const updateName = (uname) => {
        try {
            document.querySelector(".user-name").textContent = uname;
            const ncard = document.querySelector(".name-card.sidebar-anim");
            ncard.classList.toggle('.sidebar-anim');
            // ncard.classList.add('.sidebar-anim');
            // ncard.style.display = 'none';
            // ncard.style.display = 'flex';
        }
        catch (error) {
            console.log("No such element");
        }
    };


    const todoActionsHover = (parent, elements) => {
        parent.addEventListener("mouseenter", function () {
            elements.forEach((element) => {
                element.style.display = "inline";
            });

        });

        parent.addEventListener("mouseleave", function () {
            elements.forEach((element) => {
                element.style.display = "none";
            });
        });
    };

    const editToDo = (todoID, button) => {
        document.getElementById("Title-" + todoID).disabled = false;
        document.getElementById("Desc-" + todoID).disabled = false;
        document.getElementById("Notes-" + todoID).disabled = false;
        document.getElementById("Date-" + todoID).disabled = false;
        document.getElementById("Date-" + todoID).style.display = "block";
        document.getElementById("Date-" + todoID).nextElementSibling.style.display = "none";
        document.getElementById("Priority-" + todoID).disabled = false;
        document.getElementById("Title-" + todoID).previousSibling.style.display = "block";
        document.getElementById("Desc-" + todoID).previousSibling.style.display = "block";
        button.querySelector("img").src = saveIcon;
        button.classList.remove("edit-button");
        button.classList.add("save-button");
    };

    const saveToDo = (todoID, button) => {
        document.getElementById("Title-" + todoID).disabled = true;
        document.getElementById("Desc-" + todoID).disabled = true;
        document.getElementById("Notes-" + todoID).disabled = true;
        document.getElementById("Date-" + todoID).disabled = true;
        document.getElementById("Date-" + todoID).style.display = "none";
        document.getElementById("Date-" + todoID).nextElementSibling.style.display = "block";
        document.getElementById("Priority-" + todoID).disabled = true;
        document.getElementById("Title-" + todoID).previousSibling.style.display = "none";
        document.getElementById("Desc-" + todoID).previousSibling.style.display = "none";
        button.querySelector("img").src = editIcon;
        button.classList.add("edit-button");
        button.classList.remove("save-button");
    };

    const remToDo = (todoID) => {
        const todoDiv = document.querySelector(`.content-item[todoID=${todoID}]`);
        todoDiv.remove();
    };

    const createActionButton = (clsList, defDis, buttonImage, pID, todoID = null) => {

        const formButton = document.createElement("button");
        clsList.forEach((cls) => {
            formButton.classList.add(cls);
        })

        formButton.style.display = defDis;

        const buttonImg = new Image;
        buttonImg.src = buttonImage;
        buttonImg.classList.add("todo-button-img");
        formButton.appendChild(buttonImg);

        formButton.setAttribute("proID", pID);
        if (todoID) {
            formButton.setAttribute("todoID", todoID);
        }
        return formButton;
    };

    const renderInputElement = (elType, id, name, value, cls, label, type = null, isDisable = true, labelDisplay = false) => {
        const divwrap = document.createElement("div");
        divwrap.classList.add(cls);
        const lbl = document.createElement("label");
        lbl.setAttribute("for", id);
        lbl.textContent = label;
        if (!labelDisplay) {
            lbl.style.display = "none";
        }
        divwrap.appendChild(lbl);
        const inp = document.createElement(elType);
        if (type) {
            inp.setAttribute("type", type);
        }
        inp.setAttribute("id", id);
        inp.setAttribute("name", name);
        inp.value = value;
        inp.disabled = isDisable;
        divwrap.appendChild(inp);
        if (type === 'date') {
            const dateDiv = document.createElement("div");
            dateDiv.classList.add("date-viewer");
            dateDiv.textContent = format(inp.value, "MMMM dd, yyyy");
            inp.style.display = "none";
            inp.addEventListener("change", (event) => {
                dateDiv.textContent = format(inp.value, "MMMM dd, yyyy");
            });
            divwrap.appendChild(dateDiv);
        }
        return divwrap;
    };
    const renderTodo = (pID, todo, isDisable = true) => {
        const todoID = todo.getId();
        const mbitem = document.createElement("div");
        mbitem.classList.add("content-item");
        mbitem.setAttribute("proID", pID);
        mbitem.setAttribute("todoID", todoID);
        const todoForm = document.createElement("form");
        todoForm.classList.add("todo-form");
        todoForm.appendChild(renderInputElement("input", "Title-" + todoID, "ToDo-Title", todo.getTitle(), "todo-title", "TITLE", "text"));
        todoForm.appendChild(renderInputElement("input", "Desc-" + todoID, "ToDo-Desc", todo.getDesc(), "todo-desc", "DESCRIPTION", "text"));
        todoForm.appendChild(renderInputElement("input", "Date-" + todoID, "ToDo-Date", todo.getdueDate(), "todo-date", "DUE DATE", "date", true, true));
        todoForm.appendChild(renderInputElement("textarea", "Notes-" + todoID, "ToDo-Notes", todo.getNotes(), "todo-notes", "NOTES", null, true, true));


        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.textContent = "COMPLETION STATUS";
        const div = document.createElement("div");
        div.classList.add("todo-status");
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "Status-" + todoID);
        input.setAttribute("name", "ToDo-Status");
        input.classList.add("todo-status-box");
        input.setAttribute("proID", pID);
        input.setAttribute("todoID", todoID);
        input.checked = todo.getStatus();
        const label = document.createElement("label");
        label.setAttribute("for", "Status-" + todoID);
        label.textContent = "Completed";
        div.appendChild(input);
        div.appendChild(label);
        fieldset.appendChild(legend);
        fieldset.appendChild(div);
        todoForm.appendChild(fieldset);

        const todoPriorityDiv = document.createElement("div");
        todoPriorityDiv.classList.add("todo-priority");

        const label1 = document.createElement("label");
        label1.setAttribute("for", "Priority-" + todoID);
        label1.textContent = "PRIORITY";

        // Create a select element
        const select = document.createElement("select");
        select.setAttribute("name", "Priority");
        select.setAttribute("id", "Priority-" + todoID);

        // Create an array of priority options
        const priorityOptions = [
            "Urgent",
            "Very Important",
            "Important",
            "Reminder",
            "Casual"
        ];

        // Create and append option elements to the select element
        priorityOptions.forEach(function (optionText, index) {
            const option = document.createElement("option");
            option.setAttribute("value", index); // Set the value as the index (starting from 0)
            option.textContent = optionText;
            select.appendChild(option);
        });

        // Append the label and select elements to the todoPriorityDiv
        select.selectedIndex = todo.getPrior() - 1;
        select.disabled = isDisable;
        const selectDiv = document.createElement("div");
        selectDiv.classList.add("select-container");
        selectDiv.appendChild(select);

        const priorCol = document.createElement("div");
        priorCol.classList.add("prior-color");
        priorCol.style.backgroundColor = getPriCol(parseInt(select.value));

        select.addEventListener("change", (event) => {
            priorCol.style.backgroundColor = getPriCol(parseInt(select.value));
        });

        selectDiv.appendChild(priorCol);
        todoPriorityDiv.appendChild(label1);
        todoPriorityDiv.appendChild(selectDiv);
        todoForm.appendChild(todoPriorityDiv);

        const formButton = createActionButton(["todo-button", "edit-button"], "none", editIcon, pID, todoID);
        const delbutton = createActionButton(["todo-button", "del-button"], "none", delIcon, pID, todoID);
        const buttons = [formButton, delbutton];
        todoActionsHover(mbitem, buttons);

        todoForm.appendChild(formButton);
        todoForm.appendChild(delbutton);
        mbitem.appendChild(todoForm);
        document.querySelector(".content").appendChild(mbitem);

    };


    const renderProject = (user, pID) => {
        const project = user.getProject(pID);
        if (project) {
            document.querySelector(".content").innerHTML = "";
            const headerDiv = document.querySelector(".header");
            headerDiv.innerHTML = "";
            const proTitleContainer = document.createElement("div");
            proTitleContainer.classList.add("header-title-container");
            proTitleContainer.classList.add("topdown-animation");
            const proTitle = document.createElement("input");
            proTitle.setAttribute("type", "text");
            proTitle.setAttribute("proID", pID);
            proTitle.setAttribute("id", "Title-" + pID);
            proTitle.setAttribute("name", "Project Title");
            proTitle.classList.add("header-title");
            proTitle.disabled = true;
            proTitle.value = project.getTitle();
            proTitleContainer.appendChild(proTitle);

            const formButton = createActionButton(["todo-button", "edit-project-button"], "none", editIcon, pID);
            const delbutton = createActionButton(["todo-button", "del-project-button"], "none", delIcon, pID);
            const buttons = [formButton, delbutton];
            todoActionsHover(proTitleContainer, buttons);
            proTitleContainer.appendChild(formButton);
            proTitleContainer.appendChild(delbutton);
            headerDiv.appendChild(proTitleContainer);

            const addTodoButton = document.createElement("button");
            addTodoButton.classList.add("add-todo-button");
            addTodoButton.setAttribute("id", "add-todo-" + pID);
            addTodoButton.textContent = "New Task +";
            addTodoButton.classList.add("topdown-animation");
            headerDiv.appendChild(addTodoButton);


            document.querySelector(".header-title").textContent = project.getTitle();
            const todos = project.getTodoAll();
            for (let todo of todos) {
                renderTodo(pID, todo);
            }
        }
    };


    const renderProjectName = (pname, cls, pid = null, icon = null) => {
        const sidebar = document.querySelector(".sidebar");
        const pro_items = document.querySelector('.user-projects');
        const swidget = document.createElement("div");
        swidget.classList.add("sidebar-widget");
        swidget.classList.add(cls);
        swidget.classList.add("sidebar-anim");
        if (pid) {
            swidget.setAttribute("proID", pid);
        }
        if (icon) {
            const widicon = new Image();
            widicon.src = icon;
            widicon.classList.add("icon");
            swidget.appendChild(widicon);
        }
        const widContent = document.createElement("p");
        widContent.textContent = pname;
        swidget.appendChild(widContent);
        pro_items.appendChild(swidget);
    };


    const renderSidebar = (user) => {
        const uname = user.getName();
        const ncard = document.createElement("div");
        ncard.classList.add("name-card");
        ncard.classList.add("sidebar-anim");
        const propic = new Image();
        propic.src = man;
        propic.classList.add("user-image");
        const nameDiv = document.createElement("p");
        nameDiv.classList.add("user-name");
        nameDiv.textContent = uname;
        ncard.appendChild(propic);
        ncard.appendChild(nameDiv);
        ncard.addEventListener('click', loginForm);
        const sidebar = document.querySelector(".sidebar");
        sidebar.appendChild(ncard);
        const createPro = document.createElement("button");
        createPro.classList.add("create-pro");
        createPro.classList.add("sidebar-anim");
        createPro.textContent = "New Project";
        sidebar.appendChild(createPro);
        const pro_items = document.createElement("div");
        pro_items.classList.add("user-projects");
        sidebar.appendChild(pro_items);
        renderProjectName("Home", "home-tile", null, homeIcon);
        renderProjectName("All Projects", "all-projects-tile", null, projectIcon);
        for (let project of user.getProjectAll()) {
            renderProjectName(project.getTitle(), "project-tile", project.getId(), projectIcon);
        }
    };
    return { fav_icon, loginForm, renderSidebar, updateName, renderProject, editToDo, saveToDo, remToDo };
}