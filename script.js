const todoform = document.getElementById("mainform");

todoform.addEventListener("submit",handleFormSubmit);

const todoListElement = document.getElementById("todo-list");

todoListElement.addEventListener("input", handleOnInput);

const listItemsElement = document.getElementById("list-items");
const arrayitems = [];

function handleFormSubmit(event){
  event.preventDefault();
  
  if (todoListElement.value.trim() === "" ){
    alert("You must write a Task!")
    return;
  } else {
  arrayitems.push(todoListElement.value);
  renderItems();
  todoListElement.value = '';
  }
}
function handleOnInput(){
  document.getElementById("errorPrintElement").innerHTML = "";
}
function renderItems(){
  listItemsElement.innerHTML = "";

  arrayitems.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML =  item;
    
    const span = document.createElement("span");
    span.textContent = "\u00d7";
    
    li.append(span);
    listItemsElement.append(li);
    
    li.addEventListener("click",() => {
      li.classList.toggle("completed");
    });
    
  })
}

listItemsElement.addEventListener("click")


