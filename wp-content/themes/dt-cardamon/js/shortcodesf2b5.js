jQuery(document).ready(function($){
	/*anythingSlider*/
	$('.anything-slider').each(function(){

		var $this				= $(this).parent(".anything"),
			autoslideOn			= $this.attr("data-autoslide_on") || 0,
			autoslideInterval	= $this.attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

		$(this).anythingSlider({
			hashTags            : true,
			resizeContents      : false, // If true, solitary images/objects in the panel will expand to fit the viewport
			navigationSize      : 3,     // Set this to the maximum number of visible navigation tabs; false to disable
			navigationFormatter : function(index, panel){ // Format navigation labels with text
				return ['Recipe', 'Quote', 'Image', 'Quote #2', 'Image #2'][index - 1];
			},
			onSlideComplete: function(slider) {
				// keep the current navigation tab in view
				slider.navWindow( slider.currentPage );
			},
			autoPlay	: autoslideOn,
			delay		: autoslideInterval
		});
		var $_firstPage = $('.panel.activePage');
			
		if($_firstPage.find('iframe').length > 0) {
			$('.anything').addClass('anything-video');
		}
		else {
			$('.anything').removeClass('anything-video')
		}
			
	});


});

jQuery(document).ready(function($) {
	$(".toggle a.question").click(function (event) {
		event.preventDefault(); 
		$(this).toggleClass("act");
		$(this).next("div.answer").slideToggle("fast");
	});
});

jQuery().ready(function(){
		// simple accordion
		jQuery('.list1a').accordion();
		jQuery('.list1b').accordion({
			autoheight: false
		});
		
		
	});
	
/*Tabs*/
jQuery(function($) {	  
	  $(".tab").organicTabs({
		  "speed": 200
	  });

  });

(function($){

  /*Tooltip*/  
 function simple_tooltip(target_items, name){
 $(target_items).each(function(i){
		$("body").append("<div class='"+name+"' id='"+name+i+"'>"+$(this).find('span.tooltip_c').html()+"</div>");
		var my_tooltip = $("#"+name+i);

		$(this).removeAttr("title").mouseover(function(){
					my_tooltip.css({opacity:1, display:"none"}).fadeIn(400);
		}).mousemove(function(kmouse){
				var border_top = $(window).scrollTop();
				var border_right = $(window).width();
				var left_pos;
				var top_pos;
				var offset = 15;
				if(border_right - (offset *2) >= my_tooltip.width() + kmouse.pageX){
					left_pos = kmouse.pageX+offset;
					} else{
					left_pos = border_right-my_tooltip.width()-offset;
					}

				if(border_top + (offset *2)>= kmouse.pageY - my_tooltip.height()){
					top_pos = border_top +offset;
					} else{
					top_pos = kmouse.pageY-my_tooltip.height()-2.2*offset;
					}

				my_tooltip.css({left:left_pos, top:top_pos});
		}).mouseout(function(){
				my_tooltip.css({left:"-9999px"});
		});



	});
}

$(document).ready(function(){
	 simple_tooltip(".tooltip","tooltip_cont");
	 $(".cont_butt").click(function ()
	 {
	    //$("#order_form").submit();
	    return false;
	 });
      if ($.validationEngine) {
         $(".valForm, .uniform").each(function () {
            return;
            if ( $(this).attr("valed") ) return;
            $(this).attr("valed", "1").validationEngine({
               ajaxSubmit: true,
               ajaxSubmitFile: window.location.href
            });
         });
      }
});

})(jQuery)
