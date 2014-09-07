$("#outline").on("click", function() {
  if ($(this).hasClass("on")) {
    $("body").removeClass("outlined");
    $(this).removeClass("on");
  } else {
    $("body").addClass("outlined");
    $(this).addClass("on");
  }
});
