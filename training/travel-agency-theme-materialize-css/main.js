//sidenav
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

//Slider
$(document).ready(function(){
    $('.slider').slider({
        indicators : false,
        interval: 4000
    });    
});

// Scrollspy
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, options);
});

// Material Box

$(document).ready(function(){
  $('.materialboxed').materialbox();
});