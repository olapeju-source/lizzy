/*const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");
  const navActives = document.querySelectorAll(".nav-links li");

  menu.addEventListener("click", () => {
    //toggle
    nav.classList.toggle("nav-actives");

    // animation
    navActives.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          1.5}s`;
      }
    });
    //burger animation
    menu.classList.toggle("toggle");
  });
};
navSlide();*/
(function($) {
  if ($("#navtop").length) {
    var $mobile_nav = $("#navtop")
      .clone()
      .prop({
        id: "mobile-nav"
      });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: ""
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $(document).on("click", "#mobile-nav-toggle", function(e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  $(
    ".nav-bar a, .btn a, #mobile-nav a, .row a, .arrowup a, .list a, .button a"
  ).on("click", function() {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 50
        },
        800
      );
      if ($(this).parents(".nav-menu").length) {
        $(".nav-menu .menu-active").removeClass("menu-active");
        $(this)
          .closest("li")
          .addClass("menu-active");
      }

      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
        $("#mobile-body-overly").fadeOut();
      }
    }
  });
})(jQuery);

window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    document.querySelector(".head").style.boxShadow =
      "0px 0px 15px rgb(170, 169, 169)";
  } else {
    document.querySelector(".head").style.boxShadow = "none";
  }
});
//arrowup
var arrowUp = document.querySelector(".arrowup");
window.addEventListener("scroll", clickArrow);

function clickArrow() {
  if (window.scrollY > 50) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
}
