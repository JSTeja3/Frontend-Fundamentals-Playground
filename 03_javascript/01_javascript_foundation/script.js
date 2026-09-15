let count = 0;

//To retrive element by id
//We use const instead of let because we just wan to change the value but not the referencing element
const countElement = document.getElementById("count");

//We now assign button elements to variables
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

const themeButton = document.getElementById("themeButton");



//addEventListener tells code to execute when the respective button is clicked
increaseButton.addEventListener("click", increaseCount);

decreaseButton.addEventListener("click", decreaseCount);


themeButton.addEventListener("click", themeSwitch);

//We can seperate the function instead of putting everything in evenlistener
function increaseCount() {
    count++;
    //Change its text content wiht our value
    countElement.textContent = count;
}

function decreaseCount() {
    if (count > 0)
        count--;
    //Change its text content wiht our value
    countElement.textContent = count;
}

function themeSwitch(){
    // We can use classList property of javascript to add/remove class form DOM element or simply toggle which add if not present or removes if present
    // document.body.classList.add("dark-mode");
    // document.body.classList.remove("dark-mode");
    
    //const can be used as every click event a new const is initialized insteaof reassignment
    const isDarkMode = document.body.classList.toggle("dark-mode");

    if(isDarkMode){
        themeButton.textContent = "☀ Light Mode";
    }
    else{
        themeButton.textContent = "🌙 Dark Mode"
    }
}







