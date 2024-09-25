let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




function toggleText() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("read-more-btn");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
    }
  }
















  document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.skills-content .bar span');

    // Function to animate progress bars
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = '0%'; // Reset to 0% for animation effect

            // Use a timeout to allow the reset to take effect before animating
            setTimeout(() => {
                bar.style.transition = 'width 2s ease'; // Add transition for smooth animation
                bar.style.width = progress; // Set the width to the data attribute
            }, 100); // Delay to ensure reset takes effect
        });
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars(); // Call the function to animate
            } else {
                // Reset the widths if it leaves the viewport
                progressBars.forEach(bar => {
                    bar.style.width = '0%'; // Reset to 0%
                });
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    // Observe the skills section
    observer.observe(skillsSection);
});













// Initialize particles (stars)
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100, // Number of stars
            "density": {
                "enable": true,
                "value_area": 1000 // Spread over a wide area
            }
        },
        "color": {
            "value": "#ffffff" // White stars
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.6, // Slightly transparent stars
            "random": true // Twinkling effect
        },
        "size": {
            "value": 2, // Small stars
            "random": true // Random sizes for variety
        },
        "line_linked": {
            "enable": false // No lines between stars
        },
        "move": {
            "enable": true,
            "speed": 0.5, // Increased speed for more sensitive movement 
            "direction": "none", // Random directions
            "random": true,
            "straight": false, // Randomly curved paths
            "out_mode": "out", // Stars reappear when leaving screen
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": true
});