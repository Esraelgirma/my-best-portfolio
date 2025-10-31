




window.addEventListener('load', function(){
    const preloader = document.getElementById('preloader');

    // ከ3 ሰከንድ (3000 ሚሊሰከንድ) በኋላ እንዲጠፋ
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 3000); 
});








/* ================= toggle icon navbar================ */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('X');
  navbar.classList.toggle('active');
};



/* ================= scroll secton active link================ */


let sections = document.querySelectorAll('section');
let navLinks =document. querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        });
    };
  });
  /* ================= sticky navbar================ */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

    /* ================= remove toggle icon and navbar when click navbar link (scroll)=============== */
     menuIcon.classList.remove('X');
  navbar.classList.remove('active'); 
};

 /* ================= scroll reveal================ */
 ScrollReveal({
  //reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


  /* ================= typed js============== */
const typed = new Typed('.multiple-text', {
  strings: ['Frontend developer', 'Video Editor', 'Graphic Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

 /* ================= read more button============= */
// Select all toggle buttons and paragraphs
const toggleButtons = document.querySelectorAll('.toggle-button');
const paragraphs = document.querySelectorAll('.paragraph');

// Loop through each button
toggleButtons.forEach((button, index) => {
    button.onclick = () => {
        // Toggle classes for the corresponding paragraph
        if (paragraphs[index].classList.contains('hidden')) {
            paragraphs[index].classList.remove('hidden'); // Remove hidden class
            paragraphs[index].classList.add('expanded'); // Add expanded class
            button.innerText = 'Read Less'; // Change button text
        } else {
            paragraphs[index].classList.add('hidden'); // Add hidden class
            paragraphs[index].classList.remove('expanded'); // Remove expanded class
            button.innerText = 'Read More'; // Change button text back
        }
    };


});







    // Get all filter buttons and portfolio items
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-box');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            button.classList.add('active');

            // Loop through all portfolio items
            portfolioItems.forEach(item => {
                // Check if the item matches the filter
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.add('visible'); // Show item
                } else {
                    item.classList.remove('visible'); // Hide item
                }
            });
        });
    });



    
// Dark Mode Toggle Logic
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;
const sunIcon = "<i class='bx bxs-sun'></i>";
const moonIcon = "<i class='bx bxs-moon'></i>";

// ተጠቃሚው ከዚህ በፊት Dark Modeን ከመረጠ፣ እሱን መጫን
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = sunIcon;
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); // ምርጫውን አስቀምጥ
        darkModeToggle.innerHTML = sunIcon; // ፀሐይን አሳይ (ለመመለስ)
    } else {
        localStorage.setItem('theme', 'light'); // ምርጫውን አስቀምጥ
        darkModeToggle.innerHTML = moonIcon; // ጨረቃን አሳይ
    }
});




