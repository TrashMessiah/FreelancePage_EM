////*************************Animations */

window.sr = ScrollReveal();
sr.reveal('.info, .photo,#services1,#services2,#info1-gestalt,#info2-gestalt,#info3-gestalt', { delay: 200, reset: true, duration: 2000 });
/////OfferSite
sr.reveal('#photo-offer, #info-gestalt', { delay: 200, reset: true, duration: 2000 });
/////GestaltSite
sr.reveal('#info-cennik, #photo-gestalt', { delay: 200, reset: true, duration: 2000 });
////PriceSite
sr.reveal('#photo-price,#info-price', { delay: 200, reset: true, duration: 2000 });

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});
