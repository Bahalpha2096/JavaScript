
"use strict";

let course = [
    {
        id: "101",
        course: "English",
    },
    {
        id: "102",
        course: "Spanish",
        
    },
    {
        id: "103",
        course: "French",
        
    },
];
window.onload = function (){
    loadcourseDropdown();
};
    
   function loadcourseDropdown() {
    const courseDropdown = document.getElementById("courseDropdown");

    let selectOneOption = new Option("seletc One...", "")

    for (let i = 0; i < course.length; i++) {
            let theOption = document.createElement("option");
           theOption.textContent = course[i].course;
            theOption.value = course[i].id;
            courseDropdown.appendChild(theOption);
         }
}