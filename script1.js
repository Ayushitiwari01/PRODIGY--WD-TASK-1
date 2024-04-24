
        window.addEventListener('scroll', function() {
            var navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.style.backgroundColor ="gold"; // Dark gray
            } else {
                navbar.style.backgroundColor = "orange"; // Light gray
            }

            var navLinks = document.querySelectorAll('nav ul li a');
            navLinks.forEach(function(navLink) {
                navLink.addEventListener('mouseenter', function() {
                    this.style.color = '#FF5733'; // Change font color on hover
                });
                navLink.addEventListener('mouseleave', function() {
                    this.style.color = '#333'; // Restore initial font color
                });
            });
        });
   