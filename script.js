// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links .nav-link');
const scrollTop = document.querySelector('.scroll-top');
const themeToggle = document.querySelector('.theme-toggle');
const searchButton = document.querySelector('.search-button');
const searchBubble = document.querySelector('.search-bubble');
const scrollIndicators = document.querySelectorAll('.scroll-indicator');
const timelineNodes = document.querySelectorAll('.timeline-node');
const sectionContainer = document.querySelector('.section-container');

// Search quotes
const searchQuotes = [
  "I like programming low-level stuff! Not because I'm not creative...",
  'I have lots of ideas... but specs are the best',
  'Just Read the Friendly Manual, scrub.',
  "That's nice... but is it BLAZINGLY fast?",
  'It compiles? Ship it.',
  "I'm not stuck, I'm just... deeply optimizing.",
  'Works on my machine™.',
  "If it ain't in version control, it never happened.",
  'Benchmark first, optimize later... maybe.',
  'Why write docs when you can write code that explains itself?',
  'Undefined behavior? More like unexpected feature.',
  'Segfaults build character.',
  'Trust the process. Even when the process segfaults.',
  "It's not a bug, it's a hardware interaction.",
  'Who needs comments when you have git blame?',
];

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Scroll to Top Button
sectionContainer.addEventListener('scroll', () => {
  if (sectionContainer.scrollTop > 300) {
    scrollTop.classList.add('visible');
  } else {
    scrollTop.classList.remove('visible');
  }
});

scrollTop.addEventListener('click', () => {
  sectionContainer.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Toggle icon
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                `;
  } else {
    themeToggle.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                `;
  }
});
themeToggle.dispatchEvent(new Event("click"));

// Search Button
let hideTimeout;
searchButton.addEventListener('click', () => {
  const randomQuote =
    searchQuotes[Math.floor(Math.random() * searchQuotes.length)];
  searchBubble.textContent = randomQuote;
  searchBubble.style.display = 'block';

  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    searchBubble.style.display = 'none';
  }, 3000);
});

// Smooth Scroll for Indicators
scrollIndicators.forEach((indicator) => {
  indicator.addEventListener('click', () => {
    const parentSection = indicator.closest('.card-section');
    const nextSection = parentSection.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active Timeline Node
timelineNodes.forEach((node) => {
  node.addEventListener('click', () => {
    timelineNodes.forEach((n) => n.classList.remove('active'));
    node.classList.add('active');
  });
});

// Update active nav link based on scroll position
const sections = document.querySelectorAll('.card-section');

sectionContainer.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (sectionContainer.scrollTop >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    const href = link.getAttribute('href').substring(1);
    if (href === current) {
      link.classList.add('active');
    }
  });
});

const modal = document.getElementById('contactModal');
const openBtns = document.querySelectorAll('.radio-btn');
const closeBtn = document.querySelector('.close-modal');

openBtns[0].addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('hidden');
  modal.classList.add('active')
});
openBtns[1].addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('hidden');
  modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('active');
});
