document.addEventListener('DOMContentLoaded', () => {
  console.log('Document loaded and ready.');

  var CSbody = document.querySelector("body");
  const CSnavbarMenu = document.querySelector("#cs-navigation");
  const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      setupScrollListener();
    })
    .catch(error => console.error('Error loading the header:', error));

  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading the footer:', error));

  CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
  });

  function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');
    csUL.setAttribute('aria-expanded', csExpanded === 'false' ? 'true' : 'false');
  }
});

function setupScrollListener() {
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop){
      // Scrolling down
      document.getElementById('header').style.top = "-70px";
    } else {
      // Scrolling up
      document.getElementById('header').style.top = "0px";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }, false);
}
