const { v4: uuidv4 } = require('uuid');

function getPriCol(pr) {
    const mapping = ["red", "orange", "yellow", "blue", "aqua"];
    return mapping[pr-1];
}
export default function toDo(Title, Desc, DueDate, Priority, Notes, Status=false) {
    let id = uuidv4();
    let title=Title, desc=Desc, dueDate=DueDate, priority=Priority, notes=Notes, isDone=Status;
    const setTitle = (tl) => {title = tl};
    const getTitle = () => title;
    const setDesc = (descp) => {desc = descp};
    const getDesc = () => desc;
    const setdueDate = (date) => {dueDate = date};
    const getdueDate = () => dueDate;
    const setPrior = (prior) => {priority};
    const getPrior = () => priority;
    const setNotes = (note) => {notes = note};
    const getNotes = () => notes;
    const setStatus = (status) => {isDone = status};
    const getStatus = () => isDone;
    const getId = () => id;
    const getPriorCol = () => {
        return getPriCol(priority);
    };
    const getData = () => {
        return {id, title, desc, dueDate, priority, notes, isDone};
    };
    const stringify = () => {
        return JSON.stringify(getData());
    };

    return {setDesc, setNotes, setPrior, setStatus, setTitle, setdueDate, getdueDate, getDesc, getId, getNotes, getStatus, getTitle, getPrior, getPriorCol, stringify};
}