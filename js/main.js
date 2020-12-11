var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("myslides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 2000);
}

//gallery slides

/*var slides = document.querySelector(".home-images").children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function() {
  next("next");
};
prevSlide.onclick = function() {
  next("prev");
};

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}
//home-foot*/

const buttons = document.querySelectorAll(".button");
const section = document.querySelectorAll(".home-divide");

buttons.forEach(item => {
  item.addEventListener("click", () => {
    buttons.forEach(item => {
      item.className = "";
    });
    item.className = "active";

    //filter
    let values = item.textContent;
    section.forEach(show => {
      show.style.display = "none";

      if (show.getAttribute("data-id") === values || values === "All") {
        show.style.display = "block";
      }
    });
  });
});

// links

// easy scroll
/*$(".nav-bar a, .btn a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate({ scrollTop: $(hash).offset().top - 80 }, 800);
  }
});*/

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
//scroll
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

//loader
