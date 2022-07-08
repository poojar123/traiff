// page loader
window.addEventListener("load", function () {
  var preloadpage = document.getElementById("preloader");
  preloadpage.style.display = "none";
});

// for common date input
$(document).ready(function () {
  $(".date")
    .datepicker({
      // minDate: "+30d",
      format: "dd-mm-yyyy",
      autoclose: true,
      todayHighlight: true,
      toggleActive: true,
    })
    .on("changeDate", function (e) {
      var date = new Date(e.date);
      if (date) {
        var month = date.getMonth();
        month = month + 1;
        var day = date.getDate();
        var newformattedDate = date.getFullYear() + "-" + month + "-" + day;
      }
    });
});

// top bar
// $('.top-bar .navbar-toggler').click(function(){
//   if('.top-bar navbar-toggler').data(){}
// })

// rtl setup
var body = $("body");
var html = $("html");

// language
var lanBtn = $(".language-convert-select");
$(lanBtn).change(function () {
  if ($(this).val() === "ar") {
    html.attr("dir", "rtl").attr("lang", "ar");
    body.attr("direction", "rtl");
    window.localStorage.setItem("lang-version", "ar");
  } else {
    html.attr("dir", "ltr").attr("lang", "en-US");
    body.attr("direction", "ltr");
    window.localStorage.setItem("lang-version", "en");
  }
});
// languare localStorage
if (window.localStorage.getItem("lang-version") === "ar") {
  html.attr("dir", "rtl").attr("lang", "ar");
  body.attr("direction", "rtl");
  $(".language-convert-select option[value=ar]").attr("selected", "selected");
} else if (window.localStorage.getItem("lang-version") === "en") {
  html.attr("dir", "ltr").attr("lang", "en-US");
  body.attr("direction", "ltr");
}

// dark mode
$(body).attr("theme-version", "light");
var darkMode = $(".dark-mode");
$(darkMode).click(function () {
  if ($(body).attr("theme-version") == "light") {
    $(body).attr("theme-version", "dark");
    $(darkMode).removeClass("active");
    window.localStorage.setItem("theme-version", "dark");
  } else {
    $(body).attr("theme-version", "light");
    $(darkMode).addClass("active");
    window.localStorage.setItem("theme-version", "light");
  } 
});

// dark mode localStorage
if (window.localStorage.getItem("theme-version") === "dark") {
  body.attr("theme-version", "dark");
  $(darkMode).removeClass("active");
} else if (window.localStorage.getItem("theme-version") === "light") {
  body.attr("theme-version", "light");
  $(darkMode).addClass("active");
}

// font size
// $('.font-slider input[type="range"]').on("input change", function () {
//   var newSize = $(this).val(),
//     minSize = 6,
//     maxSize = 8;

//   if (newSize <= maxSize && newSize >= minSize) {
//     $("html").css("font-size", newSize + "px");
//     window.localStorage.setItem("fontSizeUser", newSize);
//   }
// });

// function for fs localStorage
// function holdValFs(e) {
//   let holdFsVal = window.localStorage.getItem("fontSizeUser");
//   $("html").css("font-size", holdFsVal + "px");
//   $(".fs_slider").attr("value", holdFsVal);
// }
// holdValFs();

// custome select attr
const select = document.querySelectorAll(".selectBtn");
const option = document.querySelectorAll(".tf-option");
let index = 9;

select.forEach((a) => {
  a.addEventListener("click", (b) => {
    const next = b.target.nextElementSibling;
    next.classList.toggle("toggle");
    next.style.zIndex = index++;
  });
});
option.forEach((a) => {
  a.addEventListener("click", (b) => {
    b.target.parentElement.classList.remove("toggle");

    const parent = b.target.closest(".tf-select").children[0];
    parent.setAttribute("data-type", b.target.getAttribute("data-type"));
    parent.innerText = b.target.innerText;
  });
});

// plan type carousel
$(".owl-carousel").owlCarousel({
  dots: false,
  pagination: false,
  margin: 15,
  nav: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 3.3,
    },
    1200: {
      items: 4.3,
    },
  },
});

// for all expand

$(".accordionBtn").click(function () {
  if ($(".accordion-collapse").hasClass("show")) {
    $(".accordion-collapse").removeClass("show");
    $(".accordion-button ").addClass("collapsed");
    $(".accordionBtn").text("Expand All");
  } else {
    $(".accordion-button ").removeClass("collapsed");
    $(".accordion-collapse").addClass("show");
    $(".accordionBtn").text("Colllepse All");
  }
});
