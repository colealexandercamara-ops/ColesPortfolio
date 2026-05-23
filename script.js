console.log("IRON HANDS TERMINAL ONLINE");

/* CUSTOM CURSOR */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/* LOADING MESSAGE */

setTimeout(() => {

    document.getElementById("loading-message").innerHTML =
    "WELCOME INITIATE";

}, 3500);

/* CONTACT FORM */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("form-message").innerHTML =
    "TRANSMISSION COMPLETE";

});