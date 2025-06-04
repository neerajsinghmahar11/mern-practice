
let input = document.querySelector(".todoInput");
let addTodoBtn=document.querySelector(".todoBtn");
let todoList=document.querySelector(".todoList");


const listTodo=()=>{
    todoText=input.value.trim();
    let listItem=document.createElement("li");
    if(todoText!=""){
        listItem.textContent=todoText;
        todoList.appendChild(listItem);
    }
    input.value="";
    addTodoBtn.disabled=true;
}   


function addList(){
    console.log(input.value)
     if(input.value!=""){
        addTodoBtn.disabled=false;
    }else{
        addTodoBtn.disabled=true;
    }
}