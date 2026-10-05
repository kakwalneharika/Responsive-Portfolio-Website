// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been submitted.");

    document.getElementById("contactForm").reset();
});


// Welcome message in browser console
window.addEventListener("load", function() {
    console.log("Welcome to Neharika's Portfolio Website!");
});