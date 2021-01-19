//  rgba color choose
// const post = document.getElementsByClassName("post-hover");
// post[1].style.background = " rgba(70, 130, 180, 0.7)";
// post[2].style.background = " rgba(171, 32, 32, 0.7)";
// post[3].style.background = " rgba(103, 58, 183, 0.7)";
// post[4].style.background = " rgba(255, 255, 0, 0.8)";
// post[5].style.background = " rgba(102, 178, 102, 0.7)";

// smooth

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// sticky navbar

window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector(".menu-bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
