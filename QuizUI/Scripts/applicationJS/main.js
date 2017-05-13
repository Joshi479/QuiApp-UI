
$(document).ready(function () {
    $(window).on('scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#startDiv').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 300 // fade out at 400px from top
        });
    });

    $('#getStarted').click(function () {
        TweenMax.to($('.rel-div'), 1, { opacity: 0, paddingLeft: 0, paddingRight:'600px', ease: Power2.easeOut });
        TweenMax.to($('.play'), 1, { opacity: 0, paddingLeft: 0, paddingRight: '600px', ease: Power2.easeOut });
        TweenMax.to($('.start-play'), 1, { opacity: 1, left:'300px', ease: Power2.easeOut });
    });

    $('.start-play-btn').click(function () {
        $('#play').css({
            'background-color': 'rgba(29, 25, 25, 1)',
            'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 60px 10px rgba(247, 213, 10, 0.71)'
        });
        $('.start-play-rules').css({
            'padding-top':0
        });
        $('.start-play-btn').css({
            'display': 'none'
        });
    });
});
