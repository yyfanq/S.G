  let navbar = document.querySelector('.navbar');

  document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
  }

  function reveal() {
    var reveals = document.querySelectorAll('.reveal');
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  
  window.addEventListener('scroll', reveal);

  reveal();

  function reveal1() {
    var reveals = document.querySelectorAll('.reveal1');
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  
  window.addEventListener('scroll', reveal1);

  reveal1();

  function reveal2() {
    var reveals = document.querySelectorAll('.reveal2');
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  
  window.addEventListener('scroll', reveal2);

  reveal2();