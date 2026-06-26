// variables

// var
var a = 6;
var a = 6;
var a = 3;
// let

let b = 5;
b = 7;
b = 45;
b = 29;

// const
const c = "eyfr";
const d = "gvegu";
const n = "gvegu";

// function

function hello(msg) {
  return msg;
}

// const hello=(msg)=>{
//     return msg;
// }

// const hello =()=>{
//     return "dhcg"
// }

// (()=>{
// console.log("object")
// })();

// const num=[1,2,3,4,5,6];
// const newArray=num.map((element)=>{
//     return element*2
// });

// console.log(newArray);

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((data) => data.json())
//   .then((todos) => {
//     console.log(todos);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const fetchTodos = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const todos = await res.json();
    console.log(todos);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("completed");
  }
};

// se÷
console.log("before function");
fetchTodos();
console.log("after function");
