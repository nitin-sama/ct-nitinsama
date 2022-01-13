window.sr = ScrollReveal();
        sr.reveal('.navbar', {
            duration:2000,
            origin:'bottom'
        });

        sr.reveal('.showcase-left', {
            duration:2000,
            origin:'top',
            distance:'300px'
        });

        sr.reveal('.showcase-right', {
            duration:2000,
            origin:'right',
            distance:'300px'
        });

        sr.reveal('.showcase-btn', {
            duration:2000,
            delay:1000,
            origin:'bottom'
        });

        sr.reveal('#testimonial div', {
            duration:2000,
            origin:'bottom',
        });

        sr.reveal('.info-right', {
            duration:2000,
            origin:'right',
            distance:'300px',
            viewFactor: 0.2
        });

        sr.reveal('.info-left', {
            duration:2000,
            origin:'left',
            distance:'300px',
            viewFactor: 0.2
        });

// Smooth scrolling

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });