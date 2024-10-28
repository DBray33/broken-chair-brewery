// Change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

window.onload = function () {
  document.querySelector('.logo').classList.add('show');
};

// Toggle mobile Menu + click away
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
  const mobileMenuLinks = document.querySelectorAll(
    '.navbar .mobile-menu-items a'
  ); // Select all links in the mobile menu

  // Toggle mobile menu on hamburger button click
  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside of it
  document.addEventListener('click', function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !toggleButton.contains(event.target)
    ) {
      mobileMenu.classList.remove('active');
    }
  });
});

window.addEventListener('load', function () {
  const iframe = document.querySelector('iframe');

  function resizeIframe() {
    iframe.style.height =
      iframe.contentWindow.document.body.scrollHeight + 'px';
  }

  iframe.onload = resizeIframe;
  window.addEventListener('resize', resizeIframe);
});
