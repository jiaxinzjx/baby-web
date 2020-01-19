 $(function(){
 	var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    $("#nav_id li").click(function(){
	
		$(this).addClass("active").siblings().removeClass("active");
		var n = $(this).attr("data-id");
//		alert(n);
		if(n=="one"){
			$("#one").show().siblings().hide();
		}else if(n=="two"){
			$("#two").show().siblings().hide();
		}else if(n=="three"){
			$("#three").show().siblings().hide();
		}
		else if(n=="four"){
			$("#four").show().siblings().hide();
		}
		else if(n=="five"){
			$("#five").show().siblings().hide();
		}
		else if(n=="one_s"){
			$("#one_s").show().siblings().hide();
		}
		else if(n=="two_s"){
			$("#two_s").show().siblings().hide();
		}
	
	
	});
	window.onscroll=function(){
	$("#nav_body").slideDown(2000);
	
	if($(document).scrollTop()==0){
		$("#nav_body").slideUp(1000);
	}
}
    
    
 });
 

//$("#nav_id li").eq(1).children().click(function(){
//		
//	    $("#nav_id li").not($("#nav_id li").eq(1)).removeClass("active");
//		$("#nav_id li").eq(1).addClass("active");
//		$("#guide_one").hide();
//		$("#guide_two").show();
//		$("#guide_three").hide();
//		
//	});
//	$("#nav_id li").eq(0).children().click(function(){
//		
//	    $("#nav_id li").not($("#nav_id li").eq(0)).removeClass("active");
//		$("#nav_id li").eq(0).addClass("active");
//		$("#guide_one").show();
//		$("#guide_two").hide();
//		$("#guide_three").hide();
//		
//	});
//	$("#nav_id li").eq(2).children().click(function(){
//	    $("#nav_id li").not($("#nav_id li").eq(2)).removeClass("active");
//		$("#nav_id li").eq(2).addClass("active");
//		$("#guide_three").show();
//		$("#guide_two").hide();
//		$("#guide_one").hide();
//		
//	});


	
