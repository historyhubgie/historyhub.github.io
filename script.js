
document.addEventListener('DOMContentLoaded', function() {
    // Click event for progress circles
    var progressCircles = document.querySelectorAll('.progress-circle');
    progressCircles.forEach(function(circle) {
        circle.addEventListener('click', function() {
            var sectionId = this.getAttribute('data-section');
            var section = document.querySelector(sectionId);
            var sectionOffset = section.offsetTop;
            window.scrollTo({
                top: sectionOffset,
                behavior: 'smooth'
            });
        });
    });

    // Scroll event to update active progress circle
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var documentHeight = document.body.scrollHeight;
        var progressCircles = document.querySelectorAll('.progress-circle');

        // Calculate the total number of sections
        var totalSections = document.querySelectorAll('.section').length;

        // Calculate the active section based on scroll position
        var activeSection = Math.floor((scrollPosition + windowHeight / 2) / windowHeight) + 1;

        // Highlight the corresponding progress circle
        progressCircles.forEach(function(circle, index) {
            if (index === activeSection - 1) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to section when navbar item is clicked
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior of link
            var targetId = this.getAttribute('href'); // Get target section id
            var targetSection = document.querySelector(targetId); // Find target section
            if (targetSection) {
                var offsetTop = targetSection.offsetTop; // Get offset top of target section
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // Smooth scroll behavior
                });
            }
        });
    });
});



