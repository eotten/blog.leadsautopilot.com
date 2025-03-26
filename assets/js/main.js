// Main JavaScript file for LeadsAutopilot Blog

document.addEventListener('DOMContentLoaded', function() {
  // Initialize mobile menu toggle (already handled in header.html)
  
  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add class to header on scroll
  const header = document.querySelector('header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }
  
  // Add active class to current navigation item
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Check if the current path starts with the link path
    // Exclude the home link when on other pages
    if (linkPath !== '/' && currentPath.startsWith(linkPath) || 
        linkPath === '/' && currentPath === '/') {
      link.classList.add('text-blue-700');
      link.classList.remove('text-gray-600');
    }
  });
}); 