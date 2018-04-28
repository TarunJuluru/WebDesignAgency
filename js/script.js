/*global document*/
/*global window*/
/*global $*/
/*$ = jQuery*/

$(document).ready(function() {

    "use strict";

    var $backToTop = $(".back-to-top");


    //filtering category onClick
    $('.category-item').click(function() {
        if (this.id == 'all') {
            $('.category-items > div').fadeIn(450);
        } else {
            var $other = $('.' + this.id).fadeIn(450);
            $('.category-items > div').not($other).hide();
        }
    });


    //collapsing nav bar when clicked on nav links
    if (window.matchMedia("(max-width: 1366px)").matches) {
        $("nav").find("li").on("click", "a", function() {
            $('.navbar-collapse.in').collapse('hide');
        });
    }



    $(window).on('scroll', function() {

        //hiding the navigation onScroll position
        if ($(document).scrollTop() > 80) {
            $('nav').css({
                backgroundColor: 'rgba(0, 173, 181, 1.0)'
            });
        } else {
            $('nav').css({
                backgroundColor: 'transparent'
            });
        }
        //showing the back-to-top on scroll position
        if ($(this).scrollTop() > 1400) {
            $backToTop.fadeIn(800);
        } else {
            $backToTop.fadeOut(400);
        }

        //scroll animation on click
        $backToTop.on("click", function() {
            $("html, body").stop().animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

    });


    //smooth scrolling onClick nav links
    $("nav").find("a").click(function(event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 'slow');
    });


});