const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function savetheNameHo(text){
    localStorage.setItem(USER_LS, text);
}

function eventHandler(event){
    event.preventDefault();    
    const inputValue = input.value;
    showTheName(inputValue);
    savetheNameHo(inputValue);
}

function askTheName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",eventHandler)   
}

function showTheName(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const loadedName = localStorage.getItem(USER_LS);
    if (loadedName === null){
        askTheName()
    }else{
        showTheName(loadedName);
    }
}



function init(){    
    loadName();
}

init();