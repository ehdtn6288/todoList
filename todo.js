const toDoForm = document.querySelector(".js-formToDoList"),
    toDoInput = document.querySelector(".js-inputToDo"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = new Array();

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deletBtn(event){
    const del = event.target,
        li = del.parentNode;
    toDoList.removeChild(li);
    

    const cleanToDos = toDos.filter(function(todo){
        return li.id !== JSON.stringify(todo.id);
    })
    
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text){
    const li = document.createElement("li"),
        span = document.createElement("span"),
        delBtn = document.createElement("button");
        delBtn.addEventListener("click", deletBtn);

    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    span.innerText = text;
    delBtn.innerText = "X";
    toDoInput.value = "";
    
    const newId = toDos.length + 1;
    li.id = newId;

    const toDoObj = {
        id : newId,
        text : text
    };
    toDos.push(toDoObj);
    saveToDos()
}

function submitHandler(event){
    event.preventDefault();
    const inputValue = toDoInput.value;
    paintToDo(inputValue);    
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(todo){
            paintToDo(todo.text);
        })
        
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", submitHandler);
}

init();