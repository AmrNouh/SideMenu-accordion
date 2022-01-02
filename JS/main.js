$("#side-menu > h2").on("click", function () {
  $("div.content")
    .filter(function () {
      return this.style.display == "block";
    })
    .stop()
    .slideUp("slow");
  $(this).next("div.content").stop().slideToggle("slow");
});
$("#side-menu").on("mouseleave", function () {
  $("div.content").css("display", "none");
});
