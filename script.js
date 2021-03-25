$(document).ready(function() {

    $('.navbar').hide();

    $(function () {
        $(window).scroll(function() {

            if ($(this).scrollTop() > 140) {
                //fait apparaitre la navbar quand on descend de 140px
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
});