document.addEventListener("DOMContentLoaded", function () {
    // Ensure Typed.js is available before initializing
    if (typeof Typed !== "undefined") {
        var typed = new Typed('.auto-type', {
            strings: ['a Student', 'and a Passionate Developer'],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
    } else {
        console.error("Typed.js not found. Ensure it's linked in your HTML file.");
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for navbar height
                    behavior: "smooth"
                });
            }
        });
    });

    // Form Submission Handling
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let formMessage = document.getElementById("formMessage");

            if (name && email && message) {
                formMessage.style.color = "green";
                formMessage.innerText = `Thank you, ${name}! Your message has been sent.`;
                this.reset(); // Clear form fields
            } else {
                formMessage.style.color = "red";
                formMessage.innerText = "Please fill in all fields.";
            }
        });
    } else {
        console.error("Form with ID 'contactForm' not found.");
    }
});
