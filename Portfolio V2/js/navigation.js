const sections = document.querySelectorAll(".section");
const allLinks = document.querySelectorAll('a[href^="#"]');
const navLinks = document.querySelectorAll(".nav a");

allLinks.forEach(link => {

    link.addEventListener("click", function(e){

        const targetId = this.getAttribute("href");

        // Ignore empty links like href="#"
        if(targetId === "#") return;

        e.preventDefault();

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // Show target section
        document.querySelector(targetId).classList.add("active");

        // Update nav active state
        navLinks.forEach(nav => {
            nav.classList.remove("active");

            if(nav.getAttribute("href") === targetId)
            {
                nav.classList.add("active");
            }
        });

    });

});