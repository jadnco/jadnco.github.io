$("#outline").on("click", function() {
  if ($(this).hasClass("on")) {
    $("body").removeClass("outlined");
    $(this).removeClass("on");
  } else {
    $("body").addClass("outlined");
    $(this).addClass("on");
  }
});

$("a.internal").on("click", function(e) {
  e.preventDefault();

  // Scroll to section in href
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top
  }, 800);
});

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
