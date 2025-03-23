const works = {
    "task1" : {"title" : "Project 1", "url" : "works/task1/index.html"},
    "task2" : {"title" : "Project 2", "url" : "works/task2/index.html"},
    "task3" : {"title" : "Project 3", "url" : "works/task3/index.html"}
};


// write your code here 
// you need to display the list of work titles in a navigation panel 
// if a work title is clicked, the body section should display the work without reloading the page




// Get the navigation and iframe elements
const navDiv = document.getElementById("nav_div");
const contentFrame = document.getElementById("content_frame");

// Add project links to the navigation panel
for (let key in works) {
    let projectLink = document.createElement("div"); // Create a new div
    projectLink.innerText = works[key].title; // Set the text
    projectLink.className = "nav_item"; // Add styling class

    // When clicked, update the iframe to show the project
    projectLink.onclick = function () {
        contentFrame.src = works[key].url;
    };

    navDiv.appendChild(projectLink); // Add to the navigation panel
}