import homeIcon from './assets/home-minus-outline.svg';
import projectIcon from './assets/note-edit-outline.svg';
import sunIcon from './assets/sun.png';
import moonicon from './assets/moon.png';
import man from './assets/man.png';
import editIcon from './assets/edit.png';
import delIcon from './assets/delete.png';
import saveIcon from './assets/save.png';
import addIcon from './assets/add.png';
import { format } from 'date-fns';
// import { container } from 'webpack';


export default function frontend() {

    document.documentElement.className = "dark";
    document.querySelector(".backdrop").addEventListener("click", () => {
        document.querySelector('.backdrop').classList.toggle("show");
        document.querySelector('.popup-modal').classList.toggle("show");
    });

    document.querySelector('.theme').addEventListener("click", () => {
        const themeIcon = document.querySelector('.theme-icon');
        const root = document.documentElement;
        if (themeIcon.src === moonicon) {
            themeIcon.src = sunIcon;
            root.className = "dark";
        }
        else {
            themeIcon.src = moonicon;
            root.className = "light";
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
        themeIcon.src = sunIcon;
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
            ncard.classList.remove('.sidebar-anim');
            // ncard.classList.add('.sidebar-anim');
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
        const todoDiv = document.querySelector(`.content-item[todoID='${todoID}']`);
        todoDiv.remove();
    };

    const addNewTodo = (pID, todo) => {
        removeNewTodo();
        renderTodo(pID, todo);
    };

    const removeNewTodo = () => {
        document.querySelector(".content-item[todoID='new-todo']").remove();
    };
    const editProject = (pID, button) => {
        document.getElementById("Title-" + pID).disabled = false;
        button.querySelector("img").src = saveIcon;
        button.classList.remove("edit-project-button");
        button.classList.add("save-project-button");
    };

    const saveProject = (pID, button, title) => {
        document.getElementById("Title-" + pID).disabled = true;
        document.querySelector(`.project-tile[proID="${pID}"] p`).textContent = title;
        button.querySelector("img").src = editIcon;
        button.classList.remove("save-project-button");
        button.classList.add("edit-project-button");
    }

    const addNewProject = () => {
        document.querySelector(".content").innerHTML = "";
        renderProjectTitle("new-project");
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
            if (isDisable) {
                inp.style.display = "none";
            }
            else {
                dateDiv.style.display = "none";
            }
            inp.addEventListener("change", (event) => {
                dateDiv.textContent = format(inp.value, "MMMM dd, yyyy");
            });
            divwrap.appendChild(dateDiv);
        }
        return divwrap;
    };


    const renderNewTodo = (pID, parent, customCls = null) => {
        const todoID = "new-todo";
        const mbitem = document.createElement("div");
        mbitem.classList.add("content-item");
        if (customCls) {
            mbitem.classList.add(customCls);
        }
        mbitem.setAttribute("proID", pID);
        mbitem.setAttribute("todoID", todoID);
        const todoForm = document.createElement("form");
        todoForm.classList.add("todo-form");
        const title = "Task Name";
        const desc = "Task Description";
        let dt = new Date();
        dt = dt.toISOString().slice(0, 10);
        const notes = "Add Notes";
        todoForm.appendChild(renderInputElement("input", "Title-" + todoID, "ToDo-Title", title, "todo-title", "TITLE", "text", false, true));
        todoForm.appendChild(renderInputElement("input", "Desc-" + todoID, "ToDo-Desc", desc, "todo-desc", "DESCRIPTION", "text", false, true));
        todoForm.appendChild(renderInputElement("input", "Date-" + todoID, "ToDo-Date", dt, "todo-date", "DUE DATE", "date", false, true));
        todoForm.appendChild(renderInputElement("textarea", "Notes-" + todoID, "ToDo-Notes", notes, "todo-notes", "NOTES", null, false, true));

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
        input.checked = false;
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
        select.selectedIndex = 0;
        select.disabled = false;
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

        const formButton = createActionButton(["todo-button", "edit-new-button"], "none", saveIcon, pID, todoID);
        const delbutton = createActionButton(["todo-button", "del-new-button"], "none", delIcon, pID, todoID);
        const buttons = [formButton, delbutton];
        todoActionsHover(mbitem, buttons);

        todoForm.appendChild(formButton);
        todoForm.appendChild(delbutton);
        mbitem.appendChild(todoForm);
        parent.appendChild(mbitem);

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



    const renderProjectTitle = (pID, value = "Project Title", isDisable = false, icon = saveIcon) => {
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
        proTitle.disabled = isDisable;
        proTitle.value = value
        proTitleContainer.appendChild(proTitle);

        const formButton = createActionButton(["todo-button", "edit-project-button"], "none", icon, pID);
        const delbutton = createActionButton(["todo-button", "del-project-button"], "none", delIcon, pID);
        const buttons = [formButton, delbutton];
        todoActionsHover(proTitleContainer, buttons);
        proTitleContainer.appendChild(formButton);
        proTitleContainer.appendChild(delbutton);
        headerDiv.appendChild(proTitleContainer);
    };

    const renderProject = (user, pID) => {
        const project = user.getProject(pID);
        if (project) {
            document.querySelector(".content").innerHTML = "";
            renderProjectTitle(pID, project.getTitle(), true, editIcon);

            const addTodoButton = document.createElement("button");
            addTodoButton.classList.add("add-todo-button");
            addTodoButton.setAttribute("id", "add-todo-" + pID);
            addTodoButton.textContent = "New Task +";
            addTodoButton.classList.add("topdown-animation");
            const headerDiv = document.querySelector(".header");
            headerDiv.appendChild(addTodoButton);


            const todos = project.getTodoAll();
            for (let todo of todos) {
                renderTodo(pID, todo);
            }
        }
    };


    const delProjectName = (pID) => {
        document.querySelector(`.project-tile[proID="${pID}"]`).remove();
    };

    const renderProjectName = (pname, cls, pid = null, icon = projectIcon, widgetCls = "sidebar-widget") => {
        const sidebar = document.querySelector(".sidebar");
        const pro_items = document.querySelector('.user-projects');
        const swidget = document.createElement("div");
        swidget.classList.add(widgetCls);
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
        renderProjectName("All Projects", "all-projects-tile", null, projectIcon, "sidebar-widget-fixed");
        for (let project of user.getProjectAll()) {
            renderProjectName(project.getTitle(), "project-tile", project.getId(), projectIcon);
        }
    };

    const renderTodoHome = (pID, todo) => {
        const todoID = todo.getId();
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo-home-container");
        todoContainer.classList.add(`prior-${todo.getPrior()}`);
        todoContainer.setAttribute("id", "todocard-" + todo.getId());
        todoContainer.setAttribute("proID", pID);
        todoContainer.setAttribute("todoID", todo.getId());
        const todoInfo = document.createElement("div");
        todoInfo.classList.add("home-todo-info");
        const todoTitle = document.createElement("div");
        todoTitle.classList.add("home-todo-title");
        todoTitle.setAttribute("proID", pID);
        todoTitle.setAttribute("todoID", todoID);
        todoTitle.textContent = todo.getTitle();
        todoInfo.appendChild(todoTitle);

        const todoDate = document.createElement("div");
        todoDate.classList.add("home-todo-date");
        todoDate.setAttribute("proID", pID);
        todoDate.setAttribute("todoID", todoID);
        todoDate.textContent = format(todo.getdueDate(), "MMMM dd, yyyy");
        todoInfo.appendChild(todoDate);
        todoContainer.appendChild(todoInfo);

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "Status-" + todoID);
        input.setAttribute("name", "ToDo-Status");
        input.classList.add("todo-status-box");
        input.setAttribute("proID", pID);
        input.setAttribute("todoID", todoID);
        input.checked = todo.getStatus();
        todoContainer.appendChild(input);

        // const formButton = createActionButton(["todo-button", "home-edit-button"], "none", editIcon, pID, todoID);
        // const delbutton = createActionButton(["todo-button", "home-del-button"], "none", delIcon, pID, todoID);
        // const buttons = [formButton, delbutton];
        // todoActionsHover(todoContainer, buttons);
        // todoContainer.appendChild(formButton);
        // todoContainer.appendChild(delbutton);

        return todoContainer;
    };

    const renderProjectHome = (project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("home-item");
        projectDiv.setAttribute("proID", project.getId());
        const projectTitle = document.createElement("div");
        projectTitle.classList.add("project-title-home");
        projectTitle.setAttribute("proID", project.getId());
        projectTitle.textContent = project.getTitle();
        const addbutton = createActionButton(["todo-button", "add-new-task"], "none", addIcon, project.getId());
        const buttons = [addbutton];
        todoActionsHover(projectDiv, buttons);
        projectTitle.appendChild(addbutton);
        projectDiv.appendChild(projectTitle);

        const todos = document.createElement("div");
        todos.classList.add("home-content-item");
        todos.setAttribute("proID", project.getId());
        const proTodos = project.getTodoAll();
        proTodos.forEach((todo) => {
            todos.appendChild(renderTodoHome(project.getId(), todo));
        });
        const todosContainer = document.createElement("div");
        todosContainer.classList.add("home-item-container");
        todosContainer.setAttribute("proID", project.getId());
        todosContainer.appendChild(todos);
        projectDiv.appendChild(todosContainer);
        projectDiv.classList.add("topdown-animation");
        document.querySelector(".content").appendChild(projectDiv);
    };

    const renderHome = (projects) => {
        const headerDiv = document.querySelector(".header");
        headerDiv.innerHTML = "";
        document.querySelector(".content").innerHTML = "";

        const proTitleContainer = document.createElement("div");
        proTitleContainer.classList.add("header-title-container");
        proTitleContainer.classList.add("topdown-animation");
        proTitleContainer.textContent = "Home";
        headerDiv.appendChild(proTitleContainer);

        projects.forEach((project) => {
            renderProjectHome(project);
        });
    };


    const homeRenderNewTodo = (pID, todoID="new-todo", todo=null) => {
        const mbitem = document.createElement("div");
        mbitem.classList.add("content-item");
        mbitem.classList.add("item-home-popup");
        mbitem.setAttribute("proID", pID);
        mbitem.setAttribute("todoID", todoID);
        const todoForm = document.createElement("form");
        todoForm.classList.add("todo-form");
        let title = "Task Name";
        let desc = "Task Description";
        let dt = new Date();
        dt = dt.toISOString().slice(0, 10);
        let notes = "Add Notes";
        let priorIndex = 0;
        let todoStatus = false;
        if (todo) {
            title = todo.getTitle();
            desc = todo.getDesc();
            dt = todo.getdueDate();
            notes = todo.getNotes();
            priorIndex = todo.getPrior() - 1;
            todoStatus = todo.getStatus();
        }
        todoForm.appendChild(renderInputElement("input", "Title-" + todoID + pID, "ToDo-Title", title, "todo-title", "TITLE", "text", false, true));
        todoForm.appendChild(renderInputElement("input", "Desc-" + todoID + pID, "ToDo-Desc", desc, "todo-desc", "DESCRIPTION", "text", false, true));
        todoForm.appendChild(renderInputElement("input", "Date-" + todoID + pID, "ToDo-Date", dt, "todo-date", "DUE DATE", "date", false, true));
        todoForm.appendChild(renderInputElement("textarea", "Notes-" + todoID + pID, "ToDo-Notes", notes, "todo-notes", "NOTES", null, false, true));

        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.textContent = "COMPLETION STATUS";
        const div = document.createElement("div");
        div.classList.add("todo-status");
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "Status-" + todoID + pID);
        input.setAttribute("name", "ToDo-Status");
        input.classList.add("todo-status-box");
        input.setAttribute("proID", pID);
        input.setAttribute("todoID", todoID);
        input.checked = todoStatus;
        const label = document.createElement("label");
        label.setAttribute("for", "Status-" + todoID + pID);
        label.textContent = "Completed";
        div.appendChild(input);
        div.appendChild(label);
        fieldset.appendChild(legend);
        fieldset.appendChild(div);
        todoForm.appendChild(fieldset);

        const todoPriorityDiv = document.createElement("div");
        todoPriorityDiv.classList.add("todo-priority");

        const label1 = document.createElement("label");
        label1.setAttribute("for", "Priority-" + todoID + pID);
        label1.textContent = "PRIORITY";

        // Create a select element
        const select = document.createElement("select");
        select.setAttribute("name", "Priority");
        select.setAttribute("id", "Priority-" + todoID + pID);

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
        select.selectedIndex = priorIndex;
        select.disabled = false;
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

        const formButton = createActionButton(["todo-button", "edit-new-button"], "none", saveIcon, pID, todoID);
        const delbutton = createActionButton(["todo-button", "del-new-button"], "none", delIcon, pID, todoID);
        const buttons = [formButton, delbutton];
        todoActionsHover(mbitem, buttons);

        todoForm.appendChild(formButton);
        todoForm.appendChild(delbutton);
        mbitem.appendChild(todoForm);
        const parent = document.querySelector(`.home-item-container[proID="${pID}"]`);
        // parent.classList.add("popup-active");
        parent.appendChild(mbitem);
        // parent.classList.add("popup-active");

    };

    const homeRemoveNewTodo = (pID) => {
        document.querySelector(`.content-item[proID="${pID}"]`).remove();
        // document.querySelector(`.home-content-item[proID="${pID}"]`).classList.remove("popup-active");
    };

    const homeAddNewTodo = (pID, todo) => {
        homeRemoveNewTodo(pID);
        document.querySelector(`.home-content-item[proID="${pID}"]`).appendChild(renderTodoHome(pID, todo));
    };

    const homeUpdateTodo = (todo) => {
        const todoID = todo.getId();
        document.querySelector(`.home-todo-title[todoID="${todoID}"]`).textContent = todo.getTitle();
        document.querySelector(`.home-todo-date[todoID="${todoID}"]`).textContent = format(todo.getdueDate(), "MMMM dd, yyyy");
        document.querySelector(`.todo-status-box[todoID="${todoID}"]`).checked = todo.getStatus();
        const todoContainer = document.querySelector(`.todo-home-container[todoID="${todoID}"]`);
        for(let i = 1; i < 6; i++) {
            todoContainer.classList.remove(`prior-${i}`);
        }
        todoContainer.classList.add(`prior-${todo.getPrior()}`);
    };

    const homeRemTodo = (todoID) => {
        document.querySelector(`.todo-home-container[todoID="${todoID}"]`).remove();
    };

    return { fav_icon, loginForm, renderSidebar, updateName, renderProject, editToDo, saveToDo, remToDo, editProject, saveProject, addNewTodo, renderNewTodo, removeNewTodo, addNewProject, renderProjectName, renderHome, delProjectName, homeRenderNewTodo, homeRemoveNewTodo, homeAddNewTodo, homeUpdateTodo, homeRemTodo };
}