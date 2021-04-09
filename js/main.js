$(document).ready(function () {
  /*- start scroll -*/
  $(window).on("scroll", function () {
    const Y = window.scrollY;
    if (Y >= 200) {
      $("nav").addClass("scroll-nav");
    } else {
      $("nav").removeClass("scroll-nav");
    }
  });
  /*- end scroll -*/

  $(".nav-320 ul li a").click(function (e) {
    e.preventDefault();
    const ST = $(this).attr("data-scroll");
    $("html, body").animate(
      {
        scrollTop: $(ST).offset().top
      },
      1000
    );
  });
  $(".go-top").on("click", function () {
    $("html, body").animate({
      scrollTop: $("#go-top").offset().top
    },1000 );
  });

  /*- start shuffle -*/
  $("#sectionThree .C-2 li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $("#sectionThree .C-2 li").on("click", function () {
    const filter = $(this).attr("data-filter");
    if (filter === ".all") {
      $(".shuff .item").show("slow", function () {
        $(this).children($("a")).attr("data-lightbox", "55");
      });
    } else {
      $(".shuff .item")
        .not(filter)
        .hide("slow", function () {
          $(this).children($("a")).removeAttr("data-lightbox");
        });
      $(".shuff .item")
        .filter(filter)
        .show("slow", function () {
          $(this).children($("a")).attr("data-lightbox", "55");
        });
    }
  });

  /*- end shuffle -*/

  /*- lightbox -*/
  lightbox.option({
    disableScrolling: true,
    fadeDuration: 600
  });
  /*- lightbox -*/

  new WOW().init();
  // End
});
