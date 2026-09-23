const fetchBtn = document.getElementById("fetchBtn");
const userData = document.getElementById("userData");
const statusMessage = document.getElementById("statusMessage");

fetchBtn.addEventListener("click", fetchDetails);


//This is syncronous promise
// function fetchDetails() { 
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//         .then((response) => {  // waits for response
//             return response.json(); 
//         })
//         .then((data) => {    // waits for response to be parsed
//             userData.innerHTML = `<h2>User Details</h2> 
//                     <p><strong>Name: </strong>${data.name}</p>
//                     <p><strong>Email: </strong>${data.email}</p> 
//                     <p><strong>City: </strong>${data.address.city}</p>` 
//         }); 
// }

async function fetchDetails() {
    fetchBtn.disabled = true;
    statusMessage.textContent = "Loading...";
    userData.innerHTML = "";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); //waits for response
        if (!response.ok) {
            throw new Error(`${response.status}: Failed to fetch data`);
        }
        const data = await response.json(); //waits for response body to be parsed
        userData.innerHTML = `<h2>User Details</h2>
                <p><strong>Name: </strong>${data.name}</p>
                <p><strong>Email: </strong>${data.email}</p>
                <p><strong>City: </strong>${data.address.city}</p>`
        statusMessage.textContent = `${response.status}: User Details Loaded Successfully`;
    }
    catch (ex) {
        statusMessage.textContent = ex.message;
    }
    finally {
        fetchBtn.disabled = false;
    }

}

// new Promise(...) creates a Promise.
// resolve(...) fulfills it with a value.
// .then(...) runs when the Promise fulfills and receives that value as result.
const myPromise = new Promise((resolve, reject) => {
    resolve("Hello Promise");
});

myPromise.then((result) => {
    console.log(result);
});

//A Promise has three state
//1. Pending-The operation isn't finished
//2. Fulfilled-The operation completed successfully with a result
//3. Rejecteed-The operation failed with reason