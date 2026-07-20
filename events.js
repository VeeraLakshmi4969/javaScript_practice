let button = document.getElementById("myButton");
button.addEventListener('click',
    function(){
    console.log("Button clicked!");
});

let form = document.getElementById("myForm");
form.addEventListener("submit",
    function(event){
        event.preventDefault();
        console.log("Form Submitted");
    }
);
// getElementById()
// Finds an HTML element using its unique ID.

// addEventListener()
// Attaches an event (like click, submit, keydown) to an element.

// function()
// Callback function that executes when the event occurs.

// click → Triggered when a button or element is clicked.

// submit → Triggered when a form is submitted.

// event
// Object containing information about the event.

// event.preventDefault()
// Stops the browser's default action (e.g., prevents form submission and page reload).

// document is a built-in JavaScript object that represents the entire HTML page (web page) loaded in the browser.

