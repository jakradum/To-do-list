
// checklist items related script below:
const todo= document.getElementById("todo-list");
const buttonClick=document.getElementById("todo-button");
const input1=document.getElementById("userinput");
const listArray=document.querySelectorAll("li");

function createListElement () {
	if(input1.value.length>0){
	var list= document.createElement("li");
	var listCreateNode=document.createTextNode(input1.value);
	var addCheckbox=document.createElement("input");
	addCheckbox.type="checkbox";
	addCheckbox.addEventListener("change",function() {
	if(addCheckbox.checked) {
		list.classList.add("done")
	} else {
		list.classList.add("new")
		list.classList.remove("done");
	}}
	);
	// add event listener called "change" and declare a function where, using 'classList' you can add or remove classes.
	list.appendChild(addCheckbox);
	list.appendChild(listCreateNode);
	todo.appendChild(list);
	}
	input1.value="";
}
buttonClick.addEventListener("click",createListElement);
input1.addEventListener("keypress", function(event) {
	if(event.key==="Enter") {createListElement();}
}
);
// end of checklist script

// H1 script




