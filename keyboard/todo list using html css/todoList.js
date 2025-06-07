let input = document.querySelector(".todoInput");
let addTodoBtn = document.querySelector(".todoBtn");
let todoList = document.querySelector(".todoList");
let i = 0;
let todoData = {};

const showTodo = () => {
  let listItem = document.createElement("li");
  let label = document.createElement("label");
  let toggle = document.createElement("input");
  let span = document.createElement("span");
  let span1 = document.createElement("span");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");

  if (typeof todoData !== "undefined" && todoData !== null) {
    for (let key in todoData) {
      listItem.className = "list-row";
      span.textContent = todoData[key];

      label.className = "switchToggle";
      label.htmlFor = `toggle${key}`;

      toggle.type = "checkbox";
      toggle.name = "checkbox";
      toggle.id = `toggle${key}`;
      toggle.className = "classToggle";

      div1.className = "div1";
      div2.className = "div2";

      span1.textContent = "completed : ";
      div1.appendChild(span);
      div2.append(span1, toggle, label);
      listItem.append(div1, div2);
      todoList.appendChild(listItem);
    }
  }
};

showTodo();

const listTodo = () => {
  let todoText = input.value.trim();

  if (todoText != "") {
    todoData[i] = todoText;
    i++;
  }
  input.value = "";
  addTodoBtn.disabled = true;
  showTodo();
  console.log(todoData);
};

function addList() {
  if (input.value != "") {
    addTodoBtn.disabled = false;
  } else {
    addTodoBtn.disabled = true;
  }
}
