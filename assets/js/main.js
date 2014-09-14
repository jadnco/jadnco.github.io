$(window).on("scroll", function() {
  $("#container .sec").each(function() {
    // Get scroll offset for section w/ 600px buffer
    var scrollForSec = $(this).offset().top - 600;

    if ($(window).scrollTop() >= scrollForSec) {
      if (!$(this).find(".inner").hasClass("scrolled")) {
        $(this).find(".inner").addClass("fade-in scrolled");
      }
    }
  });
});
