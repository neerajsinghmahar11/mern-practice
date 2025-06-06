
let input = document.querySelector(".todoInput");
let addTodoBtn=document.querySelector(".todoBtn");
let todoList=document.querySelector(".todoList");


const listTodo=()=>{
    todoText=input.value.trim();
    let listItem=document.createElement("li");
    let label=document.createElement("label");
    let toggle=document.createElement("input");
    let span=document.createElement("span");
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    
    if(todoText!=""){
        listItem.className="list-row"
        span.textContent=todoText;

        label.className="switchToggle";
        label.htmlFor="switchToggle";

        toggle.type="checkbox";
        toggle.name="checkbox";
        toggle.id="toggle";

        div1.appendChild(span)
        div2.append(toggle,span)
        listItem.append(div1,div2)
        // listItem.appendChild(toggle)
        // listItem.appendChild(label);
        todoList.appendChild(listItem);
    }
    input.value="";
    addTodoBtn.disabled=true;
}   


function addList(){
     if(input.value!=""){
        addTodoBtn.disabled=false;
    }else{
        addTodoBtn.disabled=true;
    }
}