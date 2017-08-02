var inputField = document.getElementById("inputField");
var ulList = document.getElementById("list");
var clearButton=document.getElementById("clearall");
var btn=document.getElementById('btn');
var editToDoItem;



//ClearAll Button

var clrBtn=document.createElement("button");
var clrBtnText=document.createTextNode("Clear All");

clrBtn.setAttribute('class','borderRadius')

clrBtn.appendChild(clrBtnText);
clearButton.appendChild(clrBtn);


clrBtn.setAttribute('onClick','clearAll();');

function clearAll(){
ulList.innerHTML="";
console.log(ulList);
}



//Add Function

function addTodo() {
    var li = document.createElement("li");
    var liText = document.createTextNode(inputField.value);
    li.appendChild(liText);


    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");

    editBtn.setAttribute('onClick', 'editTodo(this.parentElement);')
    editBtn.setAttribute('class','borderRadius liDelEdit');

    editBtn.appendChild(editBtnText);
    li.appendChild(editBtn);


    var deletebtn = document.createElement("button");
    var btnText = document.createTextNode("Delete");


    deletebtn.setAttribute('class','borderRadius liDelEdit');
    deletebtn.setAttribute('onClick', 'deleteTodo(this);');

    deletebtn.appendChild(btnText);
    li.appendChild(deletebtn);

    ulList.appendChild(li);


    inputField.value = "";
}



//Delete Todo

function deleteTodo(elToDelete) {
    elToDelete = elToDelete.parentElement;
    var nodeToRemove = ulList.removeChild(elToDelete);
}


//Edit Todo

function editTodo(elToEdit) {
    editToDoItem=elToEdit;
    btn.innerHTML='Save';
    btn.setAttribute('onClick','saveToDo();');
    inputField.value=elToEdit.childNodes[0].nodeValue;
}

//Save Todo

function saveToDo(){
    var editedToDo=inputField.value;
    editToDoItem.childNodes[0].nodeValue=editedToDo;
    btn.innerHTML='Add';
    btn.setAttribute('onClick','addTodo();');
    inputField.value='';
    editToDoItem=undefined;
}