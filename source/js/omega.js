$(window).scroll(function () {
    $(window).scrollTop() > $(window).height() * 0.5 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});

$(function () {
    $("#rocket").on('click', function () {
        $("#rocket").addClass("launch");
        $("html, body").animate({
            scrollTop: 0
        }, 1000, function () {
            $("#rocket").removeClass("show launch");
        });
        return false;
    });
})

// Tooltip Init
$(function () {
    $("[data-toggle='tooltip']").tooltip();
    FastClick.attach(document.body);
});

// responsive tables
$(document).ready(function () {
    $("table").wrap("<div class='table-responsive'></div>");
    $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () {
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function ($) {
    let MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        let headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
            previousTop: 0
        },
            function () {
                let currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});
