
// checklist items related script below:
const todo= document.getElementById("todo-list");
const buttonClick=document.getElementById("todo-button");
const input1=document.getElementById("userinput");
const listArray=[];

// if list is empty error msg
function taskListEmpty() {
	if(listArray.length===0) {document.getElementById("errormsg").innerHTML="No tasks"}
	else if(listArray.length===1) {document.getElementById("errormsg").innerHTML=listArray.length+" task"}
	else{document.getElementById("errormsg").innerHTML=listArray.length+" tasks"};
}

// checklist creation function below:
function createListElement () {
	if(input1.value.length>0){
	const list= document.createElement("li");
	var listCreateNode=document.createTextNode(input1.value);
	var addCheckbox=document.createElement("input");
	addCheckbox.type="checkbox";
	addCheckbox.addEventListener("change",function() {
	if(addCheckbox.checked) {
		list.classList.add("checkbox")
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
	var listItems=document.querySelectorAll(".checkbox.done");
	listArray.push(listItems);
	taskListEmpty(); // call the function once here and at the end also

}
buttonClick.addEventListener("click",createListElement);
input1.addEventListener("keypress", function(event) {
	if(event.key==="Enter") {createListElement();}
}
);
taskListEmpty(); // call this function at the end so that it counts after all actions are taken
// end of checklist script

// insert date function copied from ChatGPT and edited slightly
const today = new Date();
const options = { day: 'numeric' ,month: 'long'};
const formattedDate = today.toLocaleDateString('en', options);
document.getElementById("header").innerHTML="Tasks: "+formattedDate;



