(function($){
	"use strict";

    // Responsive Menubar Js
    $('.menu').meanmenu();

	// Sticky Menu
	$(window).on('scroll', function() {
        if ($(this).scrollTop() > 10){
        $('.header_area').addClass('menu-shrink animated slideInDown');
        } else {
        $('.header_area').removeClass('menu-shrink animated slideInUp');
        }
    });
        // data-background
        $("[data-background]").each(function(){
            $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
            });
    // Hero slider js
    $(".hero_slider_box").owlCarousel({
        items:1,
        margin:20,
        lazyLoad:true,
        pagination:true,
        navigation:false,
        autoPlay:true,
        autoPlayTimeout:9000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            400:{
                items:1,
            },
            800:{
                items:1,
            },
            1040:{
                items:1,
            }
        }
    });

    // Aos Animation js
    AOS.init({
        offset: 100,
        duration:1000,
      });

    // Testimonial Slider Js
    $("#testimonial-slider").owlCarousel({
        items:2,
        margin:40,
        loop:false,
        pagination:true,
        navigation:false,
        autoPlay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            800:{
                items:2,
            },
            1040:{
                items:2,
            }
        }
    });

    	//   TO-TOP
	$('.to-top').toTop({
		//options with default values
		autohide: true,  //boolean 'true' or 'false'
		offset: 420,     //numeric value (as pixels) for scrolling length from top to hide automatically
		speed: 400,      //numeric value (as mili-seconds) for duration
		position:true,   //boolean 'true' or 'false'. Set this 'false' if you want to add custom position with your own css
		left: 15,       //numeric value (as pixels) for position from right. It will work only if the 'position' is set 'true'
		bottom: 40       //numeric value (as pixels) for position from bottom. It will work only if the 'position' is set 'true'
	});

    $('#basic').daterangepicker({
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
      });

        $("#order_cn_btn").click(function(){
            $("#appoinment,#status").hide(),
            $("#order").show()
        });
        $("#apoinment_cn_btn").click(function(){
            $("#order").hide(),
            $("#appoinment , #status").show()
        });


})(jQuery);