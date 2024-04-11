import homeIcon from './assets/home-minus-outline.svg';
import projectIcon from './assets/note-edit-outline.svg';
import sunIcon from './assets/sun.png';
import moonicon from './assets/moon.png';
import man from './assets/man.png';
import editIcon from './assets/edit.png';
import delIcon from './assets/delete.png';
import saveIcon from './assets/save.png';
import { el } from 'date-fns/locale';


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

    const renderInputElement = (elType, id, name, value, cls, label, type = null) => {
        const divwrap = doc.createElement("div");
        divwrap.classList.add(cls);
        const lbl = document.createElement("label");
        lbl.setAttribute("for", id);
        lbl.textContent = label;
        divwrap.appendChild(lbl);
        const inp = document.createElement(elType);
        if (type) {
            inp.setAttribute("type", type);
        }
        inp.setAttribute("id", id);
        inp.setAttribute("name", name);
        inp.setAttribute("value", value);
        divwrap.appendChild(inp);
        return divwrap;
    };
    const renderTodo = (pID, todo) => {
        const todoID = todo.getId();
        const mbitem = document.createElement("div");
        mbitem.classList.add("content-item");
        mbitem.setAttribute("proID", pID);
        mbitem.setAttribute("todoID", todoID);
        const todoForm = document.createElement("form");
        todoForm.classList.add("todo-form");
        todoForm.appendChild(renderInputElement("input", "Title-" + todoID, "ToDo-Title", todo.getTitle(), "todo-title", "Title", "text"));
        todoForm.appendChild(renderInputElement("input", "Desc-" + todoID, "ToDo-Desc", todo.getDesc(), "todo-desc", "Description", "text"));
        todoForm.appendChild(renderInputElement("input", "Date-" + todoID, "ToDo-Date", todo.getdueDate(), "todo-date", "Due Date", "date"));
        todoForm.appendChild(renderInputElement("textarea", "Notes-" + todoID, "ToDo-Notes", todo.getNotes(), "todo-notes", "Notes"));
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.textContent = "Completion Status";
        const div = document.createElement("div");
        div.classList.add("todo-status");
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "Status-" + todoID);
        input.setAttribute("name", "ToDo-Status");
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
        label1.textContent = "Priority";

        // Create a select element
        const select = document.createElement("select");
        select.setAttribute("name", "Priority");
        select.setAttribute("id", "Priority-" + todoID);

        // Create an array of priority options
        const priorityOptions = [
            "--Please choose an option--",
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
        todoPriorityDiv.appendChild(label);
        todoPriorityDiv.appendChild(select);
        todoForm.appendChild(todoPriorityDiv);

        const formButton = document.createElement("button");
        formButton.classList.add("todo-button");
        formButton.classList.add("edit-button");
        formButton.style.display = "none";
        const buttonImg = new Image;
        buttonImg.src = editIcon;
        buttonImg.classList.add("todo-button-img");
        formButton.appendChild(buttonImg);
        formButton.setAttribute("proID", pID);
        formButton.setAttribute("todoID", todoID);
        const delbutton = document.createElement("button");
        delbutton.classList.add("todo-button");
        delbutton.classList.add("del-button");
        const buttonImg1 = new Image;
        buttonImg1.src = delIcon;
        buttonImg1.classList.add("todo-button-img");
        delbutton.appendChild(buttonImg1);
        todoForm.appendChild(formButton);
        mbitem.appendChild(todoForm);
        document.querySelector(".content").appendChild(mbitem);

    };
    const renderProject = (user, pID) => {
        const project = user.getProject(pID);
        if (project) {
            document.querySelector("header-title").textContent = project.getTitle();
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
    return { fav_icon, loginForm, renderSidebar, updateName };
}