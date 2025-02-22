// Contact form submission script
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields!");
        return;
    }

    // Redirect to the thank-you page after successful submission
    window.location.href = "thank-you.html";
});

// Set the current year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll progress bar script
var preogressbar = document.getElementById("preogressbar");
var percent = document.getElementById("percent");

var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    var progress = (window.pageYOffset / totalHeight) * 100;
    preogressbar.style.height = progress + "%";
    percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%";
};

// Preloader hide after page load
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    loader.style.display = "none";
});

// Sticky navbar and scroll-up button visibility script
$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up button click
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // smooth scroll on menu item click
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar on button click
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation
    var typed = new Typed(".typing-0", {
        strings: [".Aryan", ".Gupta"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Tester", "Back End Developer", "Software Engineer", "Fresher", "Quality Assurance"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Tester", "Back End Developer", "Software Engineer", "Fresher", "Quality Assurance"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel initialization
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Intersection Observer for Experience Items Animation
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.grid-list-items__item');
    const observerOptions = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    items.forEach(item => observer.observe(item));
});
