window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
  
  const lines = this.querySelectorAll('.line');
  if (this.classList.contains('active')) {
    lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    lines[1].style.opacity = '0';
    lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    lines[0].style.transform = 'rotate(0) translate(0, 0)';
    lines[1].style.opacity = '1';
    lines[2].style.transform = 'rotate(0) translate(0, 0)';
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      if (navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        const lines = hamburger.querySelectorAll('.line');
        lines[0].style.transform = 'rotate(0) translate(0, 0)';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'rotate(0) translate(0, 0)';
      }
    }
  });
});

const animateOnScroll = function() {
  const elements = document.querySelectorAll('.brand-content, .newsletter-content');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.brand-content, .newsletter-content');
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
  });
  
  setTimeout(() => {
    animateOnScroll();
  }, 500);
});

window.addEventListener('scroll', animateOnScroll);

document.addEventListener('mousemove', function(e) {
  const particles = document.querySelector('.particles');
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  particle.style.left = e.pageX + 'px';
  particle.style.top = e.pageY + 'px';
  
  const size = Math.random() * 10 + 5;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  
  const color = Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.5)' : 'rgba(255, 0, 228, 0.5)';
  particle.style.backgroundColor = color;
  
  particles.appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 1000);
});