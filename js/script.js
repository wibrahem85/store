$(document).ready(function () {
    /*start categories +,- drowpdwn menus in shop.html*/
    $(".h6-1").click(function () {

        $('.ul-1').slideToggle('slow');
        $(".h6-1").toggleClass('change-ul-color');
        $('.ss11').toggle();
        $('.ss21').toggle();

    });

    $(".h6-2").click(function () {

        $('.ul-2').slideToggle('slow');
        $(".h6-2").toggleClass('change-ul-color');
        $('.ss12').toggle();
        $('.ss22').toggle();
    });

    $(".h6-3").click(function () {

        $('.ul-3').slideToggle('slow');
        $(".h6-3").toggleClass('change-ul-color');
        $('.ss13').toggle();
        $('.ss23').toggle();

    });

    $(".h6-4").click(function () {

        $('.ul-4').slideToggle('slow');
        $(".h6-4").toggleClass('change-ul-color');
        $('.ss14').toggle();
        $('.ss24').toggle();
    });
    /*end categories menus in shop.html*/

    /*start price from , price to in shop.html*/
    $('.ul-group p.ddlist1').click(function () {
        $('.ul-group p.ddlist11').slideToggle();
        $('.ul-group p.ddlist11 span:eq(0)').click(function () {
            $('.ul-group p.ddlist1 span.float-left').text($(this).text());


        });
        $('.ul-group p.ddlist11 span:eq(1)').click(function () {
            $('.ul-group p.ddlist1 span.float-left').text($(this).text());


        });
        $('.ul-group p.ddlist11 span:eq(2)').click(function () {
            $('.ul-group p.ddlist1 span.float-left').text($(this).text());


        });
        $('.ul-group p.ddlist11 span:eq(3)').click(function () {
            $('.ul-group p.ddlist1 span.float-left').text($(this).text());


        });
        $('.ul-group p.ddlist11 span:eq(4)').click(function () {
            $('.ul-group p.ddlist1 span.float-left').text($(this).text());


        });


    });
    $('.ul-group p.ddlist2').click(function () {
        $('.ul-group p.ddlist22').slideToggle();
        $('.ul-group p.ddlist22 span:eq(0)').click(function () {
            $('.ul-group p.ddlist2 span.float-left').text($(this).text());


        });
        $('.ul-group p.ddlist22 span:eq(1)').click(function () {
            $('.ul-group p.ddlist2 span.float-left').text($(this).text());


        });
        $('.ul-group p.ddlist22 span:eq(2)').click(function () {
            $('.ul-group p.ddlist2 span.float-left').text($(this).text());


        });
        $('.ul-group p.ddlist22 span:eq(3)').click(function () {
            $('.ul-group p.ddlist2 span.float-left').text($(this).text());


        });
        $('.ul-group p.ddlist22 span:eq(4)').click(function () {
            $('.ul-group p.ddlist2 span.float-left').text($(this).text());


        });

    });
    /*end price from , price to in shop.html*/

    /******start pagination in shop.html*/

    /*$('ul.pagination li:nth-child(1)').click(function () {
    $('ul.pagination li:nth-child(1) a').css('background', '#ffc300');
    $('ul.pagination li:not(nth-child(1)) a').toggleClass('activecolor');
});
$('ul.pagination li:nth-child(2)').click(function () {
    $('ul.pagination li:nth-child(2) a').css('background', '#ffc300');
    $('ul.pagination li:not(nth-child(2)) a').toggleClass('activecolor');
});
$('ul.pagination li:nth-child(3)').click(function () {
    $('ul.pagination li:nth-child(3) a').css('background', '#ffc300');
    $('ul.pagination li:not(nth-child(3)) a').toggleClass('activecolor');
});
$('ul.pagination li:nth-child(4)').click(function () {
    $('ul.pagination li:nth-child(4) a').css('background', '#ffc300');
    $('ul.pagination li:not(nth-child(4))  a').toggleClass('activecolor');
});
$('ul.pagination li:nth-child(5)').click(function () {
    $('ul.pagination li:nth-child(5) a').css('background', '#ffc300');
    $('ul.pagination li:not(nth-child(5))  a').toggleClass('activecolor');
});
$('ul.pagination li:nth-child(6)').click(function () {
    $('ul.pagination li:nth-child(6) a').css('background', '#ffc300');
    $('ul.pagination li:not(nth-child(6))  a').css('background', '#fff');
});



/*end pagination in shop.html*/

    /* start niceScroll in all pages */
    $("html").niceScroll();
    /* end niceScroll in all pages */


    /*start  bottom-right-button that show when scroll > 300*/
    $(window).scroll(function () {
        var scroll_value = $(this).scrollTop();
        if (scroll_value >= 600) {
            $('.bottom-right-button').show('fast');
            // $('.bottom-right-button').css('opacity',1);		 
        } else {
            $('.bottom-right-button').hide('fast');
            //$('.bottom-right-button').css("opacity",0);
            // and take opacity:0; in style.css file

        }

    });
    /*end bottom-right-button that show when scroll > 300*/


    //start Loading Screen

    $(".loading-overlay .spinner").fadeOut(2000, function () {



        $(this).parent().fadeOut(1500, function () {

            $(this).remove();

            // Show The Scroll

            $("body").css("overflow", "auto");

        });
    });
    //end Loading Screen


    //start color-option for index.html
    $('.cog-check').click(function () {

        $('.color-option').fadeToggle('fast');
    });
    $('.theme1').click(function () {

        $('.index-page-theme').attr('href', 'css/theme01.css');
    });

    $('.theme2').click(function () {

        $('.index-page-theme').attr('href', 'css/theme02.css');
    });
    $('.theme3').click(function () {

        $('.index-page-theme').attr('href', 'css/theme03.css');
    });
    $('.theme4').click(function () {

        $('.index-page-theme').attr('href', 'css/theme04.css');
    });
    $('.theme5').click(function () {

        $('.index-page-theme').attr('href', 'css/theme05.css');
    });
    //end color-option for index.html

    //start color-option for shop.html
    $('.theme1').click(function () {

        $('.shop-page-theme').attr('href', 'css/theme11.css');
    });

    $('.theme2').click(function () {

        $('.shop-page-theme').attr('href', 'css/theme12.css');
    });
    $('.theme3').click(function () {

        $('.shop-page-theme').attr('href', 'css/theme13.css');
    });
    $('.theme4').click(function () {

        $('.shop-page-theme').attr('href', 'css/theme14.css');
    });
    $('.theme5').click(function () {

        $('.shop-page-theme').attr('href', 'css/theme15.css');
    });

    //end color-option for shop.html

    //start color-option for blog.html

    $('.theme1').click(function () {

        $('.change-txt-color').css('color', '#20639B');
        $('.change-bg-color').css('background', '#20639B');
        $('.footer-bottom i,.footer-bottom p.last-p a').css('color', '#20639B');

    });

    $('.theme2').click(function () {

        $('.change-txt-color').css('color', '#80ced6');
        $('.change-bg-color').css('background', '#80ced6');
        $('.footer-bottom i,.footer-bottom p.last-p a').css('color', '#80ced6');
    });

    $('.theme3').click(function () {

        $('.change-txt-color').css('color', '#ed553b');
        $('.change-bg-color').css('background', '#ed553b');
        $('.footer-bottom i,.footer-bottom p.last-p a').css('color', '#ed553b');


    });


    $('.theme4').click(function () {

        $('.change-txt-color').css('color', '#618685');
        $('.change-bg-color').css('background', '#618685');
        $('.footer-bottom i,.footer-bottom p.last-p a').css('color', '#618685');
    });

    $('.theme5').click(function () {
        $('.change-txt-color').css('color', '#ffc107');
        $('.change-bg-color').css('background', '#ffc107');
        $('.footer-bottom i,.footer-bottom p.last-p a').css('color', '#ffc107');
    });

    //end color-option for blog.html

    //start color-option for about.html

    $('.theme1').click(function () {

        $('.change-txt-color').css('color', '#20639B');
        $('.change-bg-color').css('background', '#20639B');
        $('.footer-bottom i,.footer-bottom p.last-p a').css('color', '#20639B');

    });

    $('.theme2').click(function () {

        $('.change-txt-color').css('color', '#80ced6');
        $('.change-bg-color').css('background', '#80ced6');
        $('.footer-bottom i,.footer-bottom p.last-p a').css('color', '#80ced6');
    });

    $('.theme3').click(function () {

        $('.change-txt-color').css('color', '#ed553b');
        $('.change-bg-color').css('background', '#ed553b');
        $('.footer-bottom i,.footer-bottom p.last-p a').css('color', '#ed553b');


    });


    $('.theme4').click(function () {

        $('.change-txt-color').css('color', '#618685');
        $('.change-bg-color').css('background', '#618685');
        $('.footer-bottom i,.footer-bottom p.last-p a').css('color', '#618685');
    });

    $('.theme5').click(function () {
        $('.change-txt-color').css('color', '#ffc107');
        $('.change-bg-color').css('background', '#ffc107');
        $('.footer-bottom i,.footer-bottom p.last-p a').css('color', '#ffc107');
    });

    //end color-option for about.html

    //start color-option for contact.html

    $('.theme1').click(function () {

        $('.change-txt-color').css('color', '#20639B');
        $('.change-bg-color').css('background', '#20639B');
        $('.option-box .color-option').css('border', '3px solid #20639B');
    });

    $('.theme2').click(function () {

        $('.change-txt-color').css('color', '#80ced6');
        $('.change-bg-color').css('background', '#80ced6');
        $('.option-box .color-option').css('border', '3px solid #80ced6');
    });

    $('.theme3').click(function () {

        $('.change-txt-color').css('color', '#ed553b');
        $('.change-bg-color').css('background', '#ed553b');
        $('.option-box .color-option').css('border', '3px solid #ed553b');


    });


    $('.theme4').click(function () {

        $('.change-txt-color').css('color', '#618685');
        $('.change-bg-color').css('background', '#618685');
        $('.option-box .color-option').css('border', '3px solid #618685');

    });

    $('.theme5').click(function () {

        $('.change-txt-color').css('color', '#ffc107');
        $('.change-bg-color').css('background', '#ffc107');
        $('.option-box .color-option').css('border', '3px solid #ffc107');

    });

    //end color-option for contact.html

    //start color-option for cart.html

    $('.theme1').click(function () {

        $('.cart-page-theme').attr('href', 'css/theme21.css');
    });

    $('.theme2').click(function () {

        $('.cart-page-theme').attr('href', 'css/theme22.css');
    });
    $('.theme3').click(function () {

        $('.cart-page-theme').attr('href', 'css/theme23.css');
    });
    $('.theme4').click(function () {

        $('.cart-page-theme').attr('href', 'css/theme24.css');
    });
    $('.theme5').click(function () {

        $('.cart-page-theme').attr('href', 'css/theme25.css');
    });
    //end color-option for cart.html


    /*$x= $('*').prop("background-color","#ffc107");
     console.log($x);
     $y= $('*').prop("color","#ffc107");
     console.log($y);
     $('.color-option .theme1').click(function(){
    	
    	$x.addClass('theme1');
    	$y.addClass('theme11');
    });

     $('.color-option .theme2').click(function(){
    	
    	$x.addClass('theme2');
    	$y.addClass('theme22');
    });

    $('.color-option .theme3').click(function(){
    	
    	$x.addClass('theme3');
    	$y.addClass('theme33');
    });

    $('.color-option .theme4').click(function(){
    	
    	$x.addClass('theme4');
    	$y.addClass('theme44');
    });

    $('.color-option .theme5').click(function(){
    	
    	$x.addClass('theme5');
    	$y.addClass('theme55');
    });*/





});
