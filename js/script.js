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
		
		
	});
	$('.ul-group p.ddlist2').click(function(){
		$('.ul-group p.ddlist22').slideToggle();	
		
	});
	/*end price from , price to in shop.html*/
	
	/* start niceScroll in all pages */
	$("html").niceScroll();
	/* end niceScroll in all pages */

	
	/*start  bottom-right-button that show when scroll > 300*/
	$(window).scroll(function(){
		 var scroll_value=$(this).scrollTop();
		 if(scroll_value >= 300){
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
		
		
			

	
	
})