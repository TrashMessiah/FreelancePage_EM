(window.sr = ScrollReveal()),
  sr.reveal(
    ".info, .photo,#services1,#services2,#info1-gestalt,#info2-gestalt,#info3-gestalt",
    { delay: 200, reset: !0, duration: 2e3 }
  ),
  sr.reveal("#photo-offer, #info-gestalt", {
    delay: 200,
    reset: !0,
    duration: 2e3,
  }),
  sr.reveal("#info-cennik, #photo-gestalt", {
    delay: 200,
    reset: !0,
    duration: 2e3,
  }),
  sr.reveal("#photo-price,#info-price", {
    delay: 200,
    reset: !0,
    duration: 2e3,
  }),
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

setTimeout(() => {
  let bookero = document.getElementsByClassName("bookero-sticky-plugin-toggle");
  bookero[1].innerHTML = "Zamów wizytę";
  bookero[1].style.display = "block";
  bookero[0].classList.add('close-button');
  bookero[1].classList.add('nav-button')
  bookero[0].style.display = "block";
}, "1000");
