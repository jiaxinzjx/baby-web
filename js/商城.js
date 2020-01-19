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
//		else if(n=="one_s"){
//			$("#one_s").show().siblings().hide();
//		}
//		else if(n=="two_s"){
//			$("#two_s").show().siblings().hide();
//		}
//	
	
	});
    
 });
 
