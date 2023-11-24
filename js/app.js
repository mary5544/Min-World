(function(){
  let mouseCursor = document.querySelector('.cursor');
  let navLinks = document.querySelectorAll('.nav-inner li');
  let logoLinks = document.querySelectorAll('.logo');
  
  window.addEventListener('mousemove', cursor);
  
  function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
  }
  
  navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove("link-grow");
    });
    link.addEventListener('mouseover', () => {
      mouseCursor.classList.add("link-grow");
    });
  });
  
  logoLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove("link-grow");
    });
    link.addEventListener('mouseover', () => {
      mouseCursor.classList.add("link-grow");
    });
  });
})();

(function(){
  $('#popupBanner .xBtn').click(function(){
    $('#popupBanner').hide();
  });
})();
