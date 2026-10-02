// Welcome message in browser console
console.log("Bean & Bloom Café website loaded successfully!");


// Highlight navigation link while clicking
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});
