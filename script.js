const works = {
    "task1" : {"title" : "Welcome Page", "url" : "works/task1/Welcome_Page.html"},
    "task2" : {"title" : "Hover Effect", "url" : "works/task2/HOVER.html"},
    "task3" : {"title" : "Welcome Alert", "url" : "works/task3/Name input.html"},
    "task4" : {"title" : "Calculator", "url" : "works/task4/Calculator with JS.html"},
    "task5" : {"title" : "Github Integration", "url" : "works/task5/Github Integration.html"},
    "task6" : {"title" : "Console Output", "url" : "works/task6/Console Output.html"},
    "task7" : {"title" : "String Case Conversion", "url" : "works/task7/String Operations.html"},
    "task8" : {"title" : "Grade Calculator ", "url" : "works/task8/Grade Calculator.html"},
    "task9" : {"title" : "Call-Stack with Array ", "url" : "works/task9/Call_stack.html"},
    "task10" : {"title" : "StarsTriangle ", "url" : "works/task10/StarsTriangle.html"},
    "task11" : {"title" : "Sum Function ", "url" : "works/task11/Sum Function.html"},
    "task12" : {"title" : "Working With Objects ", "url" : "works/task12/Objects.html"},
    "task13" : {"title" : "Student Data Management System ", "url" : "works/task13/Student Data Management System.html"},
    "task14" : {"title" : "Random Nmber Generation ", "url" : "works/task14/Random.html"},
    "task15" : {"title" : "Bootstrap Forms ", "url" : "works/task15/BootstrapForms.html"},
    "task16" : {"title" : "Github Page ", "url" : "works/task16/Github Page.html"},
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