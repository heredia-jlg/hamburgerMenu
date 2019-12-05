// JavaScript source code
$(document).ready(function () {

    $("#popUp").hide();
    //===== Burger menu =====
        var btn = $('<button>&#9776</button>');
        btn.attr('id', 'burger');
        $('#nav').css('position', 'sticky');
    //logo
        var link = $('<a>');
        var logo = $('<img>');
        link.attr('href', 'index.html');
        logo.attr('src', 'images/logo_50px.png');
        logo.attr('id', 'bLogo');

    //loading
        if ($(window).width() < 500) {
            $('#nav').prepend(btn);
            $(link).prepend(logo);
            $('#nav').prepend(link);
            $('.navLi').attr('class', 'navLiBurger');
            $('.navLiBurger').hide();
        } else {
            $('#nav').prepend(btn);
            $('#nav').prepend(logo);
            $('#burger').hide();
            $('#bLogo').hide();
        }
    //resizing
    $(window).resize(function(){
        if ($(Window).width() < 500) {
            $('#nav').prepend(btn);
            $(link).prepend(logo);
            $('#nav').prepend(link);
            $('#burger').show();
            $('#bLogo').show();
            $('.navLi').attr('class', 'navLiBurger');
            $('.navLiBurger').hide();

        }
        else {
            $('li').show();
            $('#burger').hide();
            $('#bLogo').hide();
            $('.navLiBurger').attr('class', 'navLi');
        }
    });

    //Menu drop down
    $('#burger').click(function () {
        $('.navLiBurger').slideToggle('slow', function () {
        });
    });


    //===== kinds of loans- index.html =====
    // hides hover images
    $('#gradImgHover').hide();
    $('#underGradImgHover').hide();

    // shows hover images on hover
    $('#gradImg').mouseenter(function () {
        $('#gradImgHover').show();
    });
    $('#gradImgHover').mouseleave(function () {
        $('#gradImgHover').hide();
    });
    $('#underGradImg').mouseenter(function () {
        $('#underGradImgHover').show();
    });
    $('#underGradImgHover').mouseleave(function () {
        $('#underGradImgHover').hide();
    });


    popUp();

});


//===== pop up - index.html
function popUp()
{
    $('#popUp').show();
    $('#btn').click(function () {
        $('#popUp').hide();
    });
}
