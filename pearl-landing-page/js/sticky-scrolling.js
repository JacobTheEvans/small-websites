$(document).ready(function() {
  $(document).on("scroll", function() {
    if($(document).scrollTop() > $(".intro-header").height() + 50) {
      $("nav").addClass("fixed-top");
      $(".navbar").addClass("big-nav");
      $(".navbar .navbar-nav").addClass("big-nav-nav");
      console.log("Here");
      $(".navbar-nav").css("padding-left", "0px");
      $(".nav-logo-big").show();
    } else {
      $("nav").removeClass("fixed-top");
      $(".navbar").removeClass("big-nav");
      $(".navbar .navbar-nav").removeClass("big-nav-nav");
      $(".navbar-nav").css("padding-left", "120px");
      $(".nav-logo-big").hide();

    }
  })
})
