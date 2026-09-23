//const taskInput = document.querySelector(".textInput");
// .querySelector() finds first element that matches the CSS selector like .textInput(class) #addBtn(id) ul(for element itlself)
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskDisplay = document.getElementById("taskDisplay");

//Store Task details in array
let tasks = [];

addBtn.addEventListener("click", addTask);

function addTask(){
    if(taskInput.value.trim()===""){
        return;
    }
    const newTaskObject = {
        id: Number(Date.now()),
        text: taskInput.value.trim(),
        completed: false
    }
    tasks.push(newTaskObject);
    renderTasks();  
    taskInput.value="";
}
function renderTasks(){
    taskDisplay.innerHTML = "";
    tasks.forEach((task) => {
        //Add each task to unorder list as list item
        const newTask = document.createElement("li");
        newTask.textContent = task.text;
        newTask.dataset.taskId = task.id;
        if (task.completed) {
            newTask.classList.add("completed");// or newTask.classList.toggle("completed", task.completed);
        }
        taskDisplay.appendChild(newTask);


        //Add delete button to each list item
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        newTask.appendChild(deleteBtn);

        //Add eventlistener to mark completed
        // newTask.addEventListener("click", function(){
        //     this.classList.toggle("completed");
        // });

        //But By doing so we create listener for each list item making 100 listeners for 100 list items
        //So we use Even Delegations where child click events are handled by parent itself using parent click event(next function)


        //We can we add below to parent event listener as below
        // deleteBtn.addEventListener("click", function(event){
        //     event.stopPropagation();// stops click even to travel heirarchy i.e. go to parent and toggle "completed" class
        //     newTask.remove();
        // });
    });
}
taskDisplay.addEventListener("click", function(event){
    //event.target finds the element which triggered click in parent
    const target = event.target;
    if(target.tagName === "BUTTON"){
        const liParent = target.closest("LI");
        tasks = tasks.filter((task)=>{
            return task.id !== Number(liParent.dataset.taskId);
        })
        renderTasks();
    }
    else if (target.tagName === "LI") {
        target.classList.toggle("completed");
        const toggleTask = tasks.find((task)=>{ //finding the task who triggered the click to toggle class adn mark it completed in array
            return task.id === Number(target.dataset.taskId); // target.dataset.taskId is text so needs to be converted to number
        })
        if (toggleTask) {
            toggleTask.completed = !toggleTask.completed;
            renderTasks();
        }
    }
});