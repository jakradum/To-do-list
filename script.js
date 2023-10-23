// many comments contain notes to self that I made for my own learning. Pls ignore as needed
// insert date function copied from ChatGPT and edited slightly
const today = new Date();
const options = { day: 'numeric' ,month: 'short'};
const formattedDate = today.toLocaleDateString('en', options);
document.getElementById("date-heading").innerHTML="Tasks on: "+formattedDate;
// if list is empty error msg
function taskListEmpty() {
	var percent= 100-(listArray.length/taskArray.length*100);
	if(listArray.length===0) {document.getElementById("errormsg").innerHTML="No tasks"}
	else if(listArray.length===1) {document.getElementById("errormsg").innerHTML=listArray.length+" task"}
	else{document.getElementById("errormsg").innerHTML=listArray.length+" tasks"};
	document.getElementById("file").value = percent;

}
// checklist items related to the script below:
const todo= document.getElementById("todo-list");
const buttonClick=document.getElementById("todo-button");
const input1=document.getElementById("userinput");
const xButton=document.querySelectorAll("span");
const task=document.querySelectorAll("li");
const listArray=[];
const taskArray=[];
// checklist creation function below:
function createListElement () {
	if(input1.value.length>0){
	const list= document.createElement("li");
	var listCreateNode=document.createTextNode(input1.value);
	var addCheckbox=document.createElement("input");
	const closeButton= document.createElement("span"); // declare a new constant to create a span element, will be used later
	// const task=document.querySelectorAll("li");
	addCheckbox.type="checkbox";
	list.classList.add("task") 
	// event listener for checkbox starts below
	addCheckbox.addEventListener("change",function() {
	if(addCheckbox.checked) {
		list.classList.add("done") //added a new class to checked off tasks
			const doneTasks=document.querySelectorAll(".done"); //using queryselectorall to identify the checked off tasks
			listArray.splice(doneTasks,1); //using splice method to update the listArray by deleting tasks that have the class name "done"
			taskListEmpty();//calling this function here to update the number of tasks shown in the <p> element
	} else {
		list.classList.remove("done");
			const undoneTasks=document.querySelectorAll(".task");
			listArray.push(undoneTasks);
			// taskArray.push(undoneTasks);
			taskListEmpty(); //function is called here again
	}
}
	);
		closeButton.innerHTML="✕"; // span element being added to the html here
		list.appendChild(addCheckbox);
		list.appendChild(listCreateNode);
		list.appendChild(closeButton);
		list.appendChild(closeButton);
		todo.appendChild(list);
		input1.value="";
		const listItems = document.getElementsByClassName("task");
		listArray.push(listItems);
		taskArray.push(listItems);
	closeButton.addEventListener("click",function(){
	list.classList.add("delete");
	let deleted=document.querySelectorAll(".delete");
	let taskItem=document.querySelectorAll(".task");
	let doneStuff=document.querySelectorAll(".done");
	let doneAndDusted=document.querySelectorAll(".delete.done");
	listArray.splice(deleted,1);
	taskArray.splice(deleted,1);
	todo.removeChild(list);
	taskListEmpty();
	}
	);//event listener on the x element along with function to removechild on click event
	taskListEmpty(); // call the function once here and at the end also
}}
buttonClick.addEventListener("click",createListElement);
input1.addEventListener("keypress", function(event) {
	if(event.key==="Enter") {createListElement();}
}
);
taskListEmpty(); // call this function at the end so that it counts after all actions are taken
// end of checklist script
