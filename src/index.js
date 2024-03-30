import User from './backend.js';

console.log("Welcome to Karya-Khata!!")


// function getDate() {
//     // Get the value of the date input field
//     const dateValue = document.getElementById("date").value;

//     // Log the date value to the console
//     console.log("Selected Date:", dateValue);
//     console.log("Type: ", typeof dateValue);
// }

// document.getElementById("sub").addEventListener("click", getDate);
// function toDo() {
//     const title = "Hello Hello";
//     const gettitle = () => title;
//     let desc = "Hello guys.";
//     const setDesc = (descp) => {
//         desc = descp;
//     };
//     const getDesc = () => desc;
//     return { gettitle, setDesc, getDesc, title, desc};
// }

// console.log(JSON.stringify(toDo()));
// arb = []
// let todoItem = toDo("Exercise", "2 Sets of Squats and Push-ups each.", "2023-1-11", 2, "Nothing");
// arb.push(todoItem);
// todoItem = toDo("Dinner", "2 Sets of Squats and Push-ups each.", "2023-1-11", 2, "Nothing");
// arb.push(todoItem);
// todoItem.setDesc("Pizza and Pasta!")

// console.log("Stringified ToDo", toDo("Exercise", "2 Sets of Squats and Push-ups each.", "2023-1-11", 2, "Nothing").stringify())

const user = User();
