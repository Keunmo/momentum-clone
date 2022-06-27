const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function deleteTodo(event){
  const li = event.target.parentElement;
  todos = todos.filter(item => item.id !== parseInt(li.id));
  console.log(todos);
  saveTodos();
  li.remove();
}

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(todo){
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "delete";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todoInput.value = "";
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

// function sayHello(item){
//   console.log(item);
// }

const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));

if(savedTodos){
  // savedTodos.forEach(sayHello);
  savedTodos.forEach(element => paintTodo(element));
  todos = savedTodos;
}