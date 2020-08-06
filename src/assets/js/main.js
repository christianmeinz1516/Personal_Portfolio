// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

// Allows for a change of css file
function changeCSS(cssFile, cssLinkIndex, welcome_img_path, contact_img_path) {
  var oldLink = document.getElementsByTagName("link").item(cssLinkIndex);
  var newLink = document.createElement("link");

  newLink.setAttribute("rel", "stylesheet");
  newLink.setAttribute("type", "text/css");
  newLink.setAttribute("href", cssFile);
  
  document.getElementsByTagName("ngx-spinner").item(0).setAttribute("color", "")
  document.getElementsByTagName("head").item(0).replaceChild(newLink, oldLink);
  document.getElementById("welcome_bg").setAttribute("style", "background-image: url('" + welcome_img_path + "');");
  document.getElementById("contact_bg").setAttribute("style", "background-image: url('" + contact_img_path + "'); background-position: center center; background-size: contain; background-repeat:no-repeat");
}

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
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
