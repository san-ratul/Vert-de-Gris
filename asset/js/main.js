(function ($) {
    "use strict";

    /*--- showlogin toggle function ----*/
    $('#showlogin').on('click', function () {
        $('#checkout-login').slideToggle(900);
    });

    /*--- showlogin toggle function ----*/
    $('#showcoupon').on('click', function () {
        $('#checkout_coupon').slideToggle(900);
    });

    /*--- showlogin toggle function ----*/
    $('#ship-box').on('click', function () {
        $('#ship-box-info').slideToggle(1000);
    });

})(jQuery);