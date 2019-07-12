$(window).scroll(function(){
    if($(window).scrollTop()>2375 ){
        $('header') .addClass('h-sedow');
    }
    else{
        $('header').removeClass('h-sedow');
    }
   
    if($(window).scrollTop()>500 && $(window).scrollTop()<1364){
        $('.hWhite') .addClass('hWhite-animation');
        $('.hRad') .addClass('hRad-animation');
    }
    else{
        $('.hRad').removeClass('hRad-animation')
        $('.hWhite').removeClass('hWhite-animation')
    }
   
    if($(window).scrollTop()>800 && $(window).scrollTop()<1882){
        $('.red2') .addClass('red2-animation');
        $('.yellow') .addClass('yellow-animation');
        $('.get') .addClass('get-animation');
        $('.light') .addClass('light-animation');
        $('.random') .addClass('random-animation');
        
    }
    else{
        $('.red2').removeClass('red2-animation')
        $('.yellow').removeClass('yellow-animation')
        $('.get').removeClass('get-animation')
        $('.random').removeClass('random-animation')
    }
})
$(document).ready(function(){
    $(".nav").click(function(){
      $(".h-menu").slideToggle(400);
	}); 
    $(".play-btn").click(function(){
      $("iframe").show();
    }); 
    $(".show").click(function(){
        $(".s-text").show();
      }); 
    $(".less").click(function(){
        $(".s-text").hide();
      }); 
    $(".show").click(function(){
        $(".show").hide();
      }); 
    $(".less").click(function(){
        $(".show").show();
      }); 
	 });
   

