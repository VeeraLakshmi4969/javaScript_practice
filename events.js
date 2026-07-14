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