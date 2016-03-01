$(document).on('ready', function() {
    var sliderCount = $('.carousel-inner > .item').length;
    if (sliderCount === 1) {
        $('.carousel-indicators').hide();
        $('.left.carousel-control').hide();
        $('.right.carousel-control').hide();
    }


    //Hero Carousel Speed
    $('#myCarousel').carousel({
        interval: 3000
    });
});