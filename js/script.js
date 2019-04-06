$(document).ready(function(){
	/*start categories +,- drowpdwn menus in shop.html*/
	$(".h6-1").click(function(){
		
		$('.ul-1').slideToggle('slow');
		$(".h6-1").toggleClass('change-ul-color');
		$('.ss11').toggle();
		$('.ss21').toggle();
		
 	});
	
	$(".h6-2").click(function(){
		
		$('.ul-2').slideToggle('slow');
		$(".h6-2").toggleClass('change-ul-color');
		$('.ss12').toggle();
		$('.ss22').toggle();
	});
	
	$(".h6-3").click(function(){
		
		$('.ul-3').slideToggle('slow');
		$(".h6-3").toggleClass('change-ul-color');
		$('.ss13').toggle();
		$('.ss23').toggle();
	 	
	});
	
	$(".h6-4").click(function(){
		
		$('.ul-4').slideToggle('slow');
		$(".h6-4").toggleClass('change-ul-color');
		$('.ss14').toggle();
		$('.ss24').toggle();
	});
	/*end categories menus in shop.html*/

	
	/*start price from , price to in shop.html*/
	$('.ul-group p.ddlist1').click(function(){
		$('.ul-group p.ddlist11').slideToggle();
		$('.ul-group p.ddlist11 span:eq(0)').click(function(){
			 $('.ul-group p.ddlist1 span.float-left').text($(this).text());

			
		});
		$('.ul-group p.ddlist11 span:eq(1)').click(function(){
			 $('.ul-group p.ddlist1 span.float-left').text($(this).text());

			
		});
		$('.ul-group p.ddlist11 span:eq(2)').click(function(){
			 $('.ul-group p.ddlist1 span.float-left').text($(this).text());

			
		});
		$('.ul-group p.ddlist11 span:eq(3)').click(function(){
			 $('.ul-group p.ddlist1 span.float-left').text($(this).text());

			
		});
		$('.ul-group p.ddlist11 span:eq(4)').click(function(){
			 $('.ul-group p.ddlist1 span.float-left').text($(this).text());

			
		});
		
		
	});
	$('.ul-group p.ddlist2').click(function(){
		$('.ul-group p.ddlist22').slideToggle();
		$('.ul-group p.ddlist22 span:eq(0)').click(function(){
			 $('.ul-group p.ddlist2 span.float-left').text($(this).text());

			
		});
	    $('.ul-group p.ddlist22 span:eq(1)').click(function(){
			 $('.ul-group p.ddlist2 span.float-left').text($(this).text());

			
		});	
		$('.ul-group p.ddlist22 span:eq(2)').click(function(){
			 $('.ul-group p.ddlist2 span.float-left').text($(this).text());

			
		});		
		$('.ul-group p.ddlist22 span:eq(3)').click(function(){
			 $('.ul-group p.ddlist2 span.float-left').text($(this).text());

			
		});
		$('.ul-group p.ddlist22 span:eq(4)').click(function(){
			 $('.ul-group p.ddlist2 span.float-left').text($(this).text());

			
		});
		
	});
	/*end price from , price to in shop.html*/
	
	/* start niceScroll in all pages */
	$("html").niceScroll();
	/* end niceScroll in all pages */

	
	/*start  bottom-right-button that show when scroll > 300*/
	$(window).scroll(function(){
		 var scroll_value=$(this).scrollTop();
		 if(scroll_value >= 600){
		     $('.bottom-right-button').show('fast');		 
		    // $('.bottom-right-button').css('opacity',1);		 
		 }
		 else{
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
		 $('.cog-check').click(function(){
			
			$('.color-option').fadeToggle('fast');
			});
			$('.theme1').click(function(){
		 
			 $('.page-style').attr('href','css/theme01.css');
				});
			
			 $('.theme2').click(function(){
				 
				 $('.page-style').attr('href','css/theme02.css');
			 });
			 $('.theme3').click(function(){
				 
				 $('.page-style').attr('href','css/theme03.css');
			 });
			 $('.theme4').click(function(){
				 
				 $('.page-style').attr('href','css/theme04.css');
			 });
			 $('.theme5').click(function(){
				 
				 $('.page-style').attr('href','css/theme05.css');
			 });
	 		//end color-option for index.html
			
	 		//start color-option for contact.html
			  
			$('.theme1').click(function(){
		 
			 $('.change-txt-color').css('color','#20639B');
			 $('.change-bg-color').css('background','#20639B');
				});
			
			 $('.theme2').click(function(){
				 
				 $('.change-txt-color').css('color','#80ced6');
			   $('.change-bg-color').css('background','#80ced6');
			 });
			 
			 $('.theme3').click(function(){
				 
				$('.change-txt-color').css('color','#ed553b');
			 $('.change-bg-color').css('background','#ed553b');
				});
			
			 
			 $('.theme4').click(function(){
				 
			$('.change-txt-color').css('color','#618685');
			 $('.change-bg-color').css('background','#618685');
				});
			
			 $('.theme5').click(function(){
				 
				 $('.change-txt-color').css('color','#ffc107');
				$('.change-bg-color').css('background','#ffc107');
			});
	 		//end color-option for contact.html

			
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