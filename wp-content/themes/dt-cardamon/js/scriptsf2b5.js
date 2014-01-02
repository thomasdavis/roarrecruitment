// JavaScript Document
jQuery(document).ready(function($){
	$.fn.imageLoaded = function( callback ){
		var $this = this[0];

		if (typeof $this == "undefined") { return false };

		var timer  = setInterval(function(){
			if($this.complete == true) {
				clearInterval(timer);
				callback.call($this);
			}
		},200);

		return $this;
	};
});

jQuery(document).ready( function($) {
     
    $("#nav-above a").live( 'click', function () {
        if( jQuery(this).hasClass('no-act') )
            return true;
        
        if( jQuery(this).parent().hasClass('act') )
            return true;

        $("html"+( ! $.browser.opera ? ",body" : "")).animate({scrollTop: 0}, 500);
    });

    $('#footer .widget').each( function(){
        $(this).wrap("<div class='one-fourth'></div>");
    });

	$("blockquote").wrap('<div class="blockquote-bg"></div>').parent(".blockquote-bg").append('<div class="blockquote-bot"></div>')

});

jQuery(document).ready(function($){
	//Coda Slider for widgets and shortcodes
	$(".coda-slider").each(function(){

		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

		$(this).codaSlider({
			autoSlide: autoslideOn,
			autoSlideInterval: autoslideInterval,
            crossLinking: false,
			dynamicArrowLeftText: "",
			dynamicArrowRightText: ""
		});
	});

	//Nivo Slider homepage
	$("#slider").each(function(){

		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

        $(this).nivoSlider({
			autoslide: autoslideOn,
            pauseTime: autoslideInterval,
			effect: 'boxRandom',
			animSpeed: 700,
			boxCols: 6,
			directionNav: false,
			controlNav: false,
			prevText: '',
			nextText: '',
			customNav: true,
			customNavPrev: '.big-slider .nivo-prevNav',
			customNavNext: '.big-slider .nivo-nextNav',
			beforeChange: function(){
				$('.grid').delay(100).show().fadeTo(500, 0.8).delay(200).fadeOut(700).fadeTo(700, 0);
			},
			afterChange: function(){}
		});
	});

	//Nivo Slider widgets
	$(".widget_slider").each(function(){
		var prev_slide = $(this).parents(".widget").find(".navig-small .SliderNamePrev"),
			next_slide = $(this).parents(".widget").find(".navig-small .SliderNameNext");

		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

        $(this).nivoSlider({
			autoslide: autoslideOn,
            pauseTime: autoslideInterval,
			slices: 4,
			boxCols: 4,
			directionNav: false,
			controlNav: false,
			prevText: '',
			nextText: '',
			customNav: true,
			customNavPrev: prev_slide,
			customNavNext: next_slide
		});
	});

	
	$(".widget_slider2").each(function(){
		var prev_slide = $(this).parents(".widget").find(".navig-small .SliderNamePrev2"),
			next_slide = $(this).parents(".widget").find(".navig-small .SliderNameNext2");
		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

        $(this).nivoSlider({
			autoslide: autoslideOn,
            pauseTime: autoslideInterval,
			slices: 4,
			boxCols: 4,
			directionNav: false,
			controlNav: false,
			prevText: '',
			nextText: '',
			customNav: true,
			customNavPrev: prev_slide,
			customNavNext: next_slide
		});
	});
	//Nivo Slider shortcodes
	$(".slider-short").each(function(){
		var prev_slide = $(this).parents(".widget").find(".navig-small .SliderNamePrev"),
			next_slide = $(this).parents(".widget").find(".navig-small .SliderNameNext");	
		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

        $(this).nivoSlider({
			autoslide: autoslideOn,
            pauseTime: autoslideInterval,
			effect: 'boxRandom',
			animSpeed: 700,
			boxCols: 6,
			directionNav: false,
			controlNav: false,
			prevText: '',
			nextText: '',
			customNav: true,
			customNavPrev: '.shortcode-slide .nivo-prevNav',
			customNavNext: '.shortcode-slide .nivo-nextNav',
			beforeChange: function(){
				$('.grid').delay(100).fadeTo(500, 0.8).delay(200).fadeTo(700, 0);
			},
			afterChange: function(){
			}
		});
	});
	
	$("#container .slider-short").each(function(){
	
		var prev_slide = $(this).parents(".slider-shprtcode").find(".navig-nivo .nivo-prevNav"),
			next_slide = $(this).parents(".slider-shprtcode").find(".navig-nivo .nivo-nextNav");	
			
		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

        $(this).nivoSlider({
			autoslide: autoslideOn,
            pauseTime: autoslideInterval,
			effect: 'boxRandom',
			animSpeed: 700,
			boxCols: 6,
			directionNav: false,
			controlNav: false,
			prevText: '',
			nextText: '',
			customNav: true,
			customNavPrev: '.shortcode-slide .nivo-prevNav',
			customNavNext: '.shortcode-slide .nivo-nextNav',
			beforeChange: function(){
				$('.grid').delay(100).fadeTo(500, 0.8).delay(200).fadeTo(700, 0);
			},
			afterChange: function(){
			}
		});
	});
	
	//Menu down
	$("#nav li").each(function () {
		if ($(this).find("div").length > 0) {
				$(this).addClass('children');
		}
		$(this).hover(function () {
			$(this).children('div').css({visibility: "visible",display: "none"}).slideDown('normal');
		}, function () {
			$('div', this).css({visibility: "hidden"});
		});
	})
	
	//Android menu click
var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if(isAndroid) {

	// find the mobiles devices user-agent names

		// see whether device supports touch events (a bit simplistic, but...)
	var hasTouch = ("ontouchstart" in window);
		 
		// hook touch events for drop-down menus
		// NB: if has touch events, then has standards event handling too
		if (hasTouch && document.querySelectorAll) {
			var i, len, element,
				dropdowns = document.querySelectorAll("#nav li.children");
		 
			function menuTouch(event) {
				// toggle flag for preventing click for this link
				var i, len, noclick = !(this.dataNoclick);
		 
				// reset flag on all links
				for (i = 0, len = dropdowns.length; i < len; ++i) {
					dropdowns[i].dataNoclick = false;
				}		 
				// set new flag value and focus on dropdown menu
				this.dataNoclick = noclick;
				this.focus();
			}
		 
			function menuClick(event) {
				// if click isn't wanted, prevent it
				if (this.dataNoclick) {
					event.preventDefault();
				}
			}
		 
			for (i = 0, len = dropdowns.length; i < len; ++i) {
				element = dropdowns[i];
				element.dataNoclick = false;
				element.addEventListener("touchstart", menuTouch, false);
				element.addEventListener("click", menuClick, false);
			}
		}			
		
	}
	/*$('#nav li div').each( function() {
		$(this).prev('a').css('cursor', 'auto');
	});*/

	//Carousel widgets and shortcodes
	$(".carouFredSel_1").each(function(){

		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= parseInt($(this).attr("data-autoslide") || 7000);
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}


		$(this).carouFredSel({
			width: "variable",
			items: 1,
			auto : {
				play			: autoslideOn,
				pauseDuration	: autoslideInterval,
				pauseOnHover	: true
			},
			prev: $(this).next(),
			next: $(this).next().next(),
			pagination: false,
			scroll: 1
		});


		var	$slides		= $("li", $this),
			slidesCount	= $slides.length,
			slideWidth	= $slides.eq(0).outerWidth(),
			slidesWidth	= slideWidth*slidesCount;
			wraperWidth	= $this.parents(".list-carousel").outerWidth()
		
		if (slidesWidth < ( wraperWidth + slideWidth/2 ) ){
			$this.parent().next().remove();
			$this.parent().next().remove();
		}
		
		setTimeout( function() {
			$this.parents(".list-carousel").css({"overflow": "visible"});
		}, 800);
		
	});

});


//header elements
jQuery(function($){
	$(".logo-left .logo img, .logo-right .logo img").imageLoaded(function() {
		var logoHeight = $(this).outerHeight();
		$(".contact-block").css({
			"margin-top": 15 + logoHeight/2 - $(".contact-block").outerHeight()/2,
			"visibility": "visible"
		});
	});
})
/*Carousel height*/
jQuery( function($) {
	var wrap=$('.caroufredsel_wrapper ul').find(" > img");
//    if( wrap.length ) {
	    var h_wrap = wrap.attr("height");
/*    }else {
        var h_wrap = $('.caroufredsel_wrapper ul').find('li > div').height();
    }
*/
	$(this).css('height', h_wrap); //'.caroufredsel_wrapper'
});

//Fade effect
jQuery( function($) {
	$('a.alignleft, a.alignright, a.alignnone, a.photo, .gallery-item a').append('<i></i>').each(function () {
	  var $span = $('i', this);
     if ($.browser.msie && $.browser.version < 9)
        $span.hide();
     else
        $span.css('opacity', 0);
	  $(this).hover(function () {
		  
	    if ($.browser.msie && $.browser.version < 9)
	      $span.show();
	    else
   	    $span.stop().fadeTo(500, 1);
	  }, function () {
	    if ($.browser.msie && $.browser.version < 9)
	      $span.hide();
	    else
  	      $span.stop().fadeTo(500, 0);
	  });
	});
})

/*Hover height width*/
jQuery( function($) {
	$("a.alignleft").each(function () {
		var i=$(this).find(" > img");
		var i_w = i.attr("width");
		var i_h = i.attr("height");
		$('i', this).css('width', i_w);
		$('i', this).css('height', i_h);
	});
});

/*Widget find last element*/
jQuery( function($) {
	$(".widget").each(function () {
		$(this).find(".post:last-child").addClass('last');
	})
	$("#aside").find(".widget:last-child").addClass('last');
});
//Width for h1
jQuery( function($) {
	var inner_w = $('.inner-navig').width();
	if(('.inner-navig').length){
		$('#container > h1').css({
			'maxWidth':$('#container').width() - 40 - inner_w
		})
	}
	else{
	}
});
//Width for portfolio inner info
jQuery( function($) {
	
	var anit_w = $('.slider-shortcode.anything').width();
	if(!$('.slider-shortcode.anything').length){
		$('.full-left').css({
			'maxWidth':100+'%'
		})
		
	}
	else {
		$('.full-left').css({
			'maxWidth':960 - 50 -anit_w
		})
	}
});
/*nivo-caption width*/
jQuery( function($) {
	$(".slider-shortcode").each(function () {
		var im=$(this).find("img");
		var im_w = im.attr("width");
		var im_h = im.attr("height");
		$('.nivo-caption', this).css({
			'width': im_w
		})
		$('.html-caption', this).css({
			'width': im_w -30
		}).show()
		$('.nivo-caption p, .html-caption p', this).css({
			'maxHeight': im_h/2 
		});
		
		
	});
	$(".widget .nivoSlider").each(function () {
		var im=$(this).find("img");
		var im_w = im.attr("width")-8;
		var im_h = im.attr("height");
		$('.nivo-caption', this).css('width', im_w, 'maxHeight', im_h/3);
	});
	
	$(".full-width .slider-shortcode, .one-fourth .slider-shortcode, .half .slider-shortcode, .one-third .slider-shortcode, .two-thirds .slider-shortcode").each(function () {
		var im=$(this).find("img");
		var im_w = im.attr("width");
		var im_h = im.attr("height");
		$('.nivo-caption', this).css({
			'width': im_w - 8,
			'maxHeight': im_h/2
		});
		
		
	});
	/*$('#container .navig-nivo').each(function(){
		var a = $(this).find('a');
		var a_h = a.height()
		$(this).css({
			top:50 + '%',
			'marginTop':-a_h/2
		});
	})*/
});

/*photo i height*/
jQuery( function($) {
	$(".textwidget-photo a.photo").each(function () {
		var im=$(this).find("img");
		var im_h = im.attr("height");
		var im_w = im.attr("width");
		$('i', this).css('height', im_h);
		
	});
});

/*Slider textwidget*/
jQuery( function($) {
	if (!('.caroufredsel_wrapper .textwidget').length){
		return false;
	} else
	var block_counter = 0;
	
	$('.caroufredsel_wrapper .textwidget').each(function() {
		
		block_counter++;
		$(this).addClass('block_no_'+block_counter);
		$('.widget-info', this).appendTo('body').addClass('block_no_'+block_counter);
	});
			show_me = '';
			$('.caroufredsel_wrapper .textwidget').hover(
				function() {
					$('body > .widget-info').hide();
					var w = $(this).find("img");
					var w_w = w.attr("width");
					show_me = $(this).attr('class').match(/block_no\_.+?\b/);
					
					var offset = $(this).offset();
					$('body > .'+show_me[0]).css({ top: offset.top - 5, left: offset.left -5, width: w_w}).fadeIn(300);

				} , function() {
					$('body > .'+show_me[0]).hover( function() { 
						//$(this).hide();
					} , function() {
						
						$(this).hide();
					}
				);

		});	
	

});
/*Coda slider autor*/

//Widget
jQuery( function($) {
	$(".textwidget").hover(
		function(){
			$('> .widget-info', this).stop().fadeTo(400, 1);
		}, function(){
			$('> .widget-info', this).stop().fadeTo(200, 0, function(){ $(this).hide() });
		}
	);
});

//PS fade info
jQuery( function($) {
	if (!('.ps-album').length){
		return false;
	} else {
	$(".ps-album").hover(
		function() {
			if ($.browser.msie && $.browser.version < 9)
			{
				$(".ps-desc", this).stop().show();
			} else {
				$(".ps-desc", this).stop().fadeTo(400, 1);
			}
		} , function() {
			if ($.browser.msie && $.browser.version < 9)
			{
				$(".ps-desc", this).stop().hide();
			} else {
				$(".ps-desc", this).stop().fadeTo(200, 0, function(){$(this).hide()});
			}
		});
	}
});

// flickr animations
jQuery( function($) {
	
		$(".flickr i").animate({
				 opacity: 0
		
			  }, {
				 duration: 300,
				 queue: false
			  });      
	
	   $(".flickr").parent().hover(
		   function () {},
		   function () {
			  $(".flickr i").animate({
				 opacity: 0
			  }, {
				 duration: 300,
				 queue: false
			  });
	   });
	 $('.flickr').each(function(){
		 
	   $("i", this).hover(
		  function () {
			  
		 	$(this).parents('.flickr').addClass('act');
			  
			  $(this).animate({
				 opacity: 0
		
			  }, {
				 duration: 300,
				 queue: false
			  });      
	
			  $(".flickr.act i").not( $(this) ).animate({
				 opacity: 0.4
			  }, {
				 duration: 300,
				 queue: false
			  });
			  
		 	$(this).parents('.flickr').removeClass('act');
		  }, function () {
			  
		  }
	   );
	});

});

/*Soc ico effect*/
jQuery( function($) {
	var $soc_top;
	$('.trigger').each(function () {
		$(this).hover(function () {
			$('body > .soc-info').remove();
			var $span = $('> span', this);
			var $old_html = $span.html();
			var $new_html = '<span class="soc-info"><span class="soc-cont">' + $span.html() + '<span class="soc-b"></span></span></span>';
			$('body').append($new_html);
			$soc_top = $('body > .soc-info');
			if ($.browser.msie && $.browser.version < 9)
			{
				$soc_top.css({ 'left' : $(this).offset().left, 'top' : $(this).offset().top-30, 'z-index' : '999', 'display' : 'block' })
			} else {
				$soc_top.css({ 'left' : $(this).offset().left, 'top' : $(this).offset().top-30, 'z-index' : '999' }).fadeIn(300)
			}
		}, function () {
			$soc_top.fadeOut(300, function () {$(this).remove()});
		});
	});
});

//Search
jQuery( function($){
 var inputWdith = '212px';
  var inputWdithReturn = '83px';
  jQuery(".top-cont .i-s").each(function () {
	  $('.top-cont .i-search').click(function () {
		 $(this).parent().animate({
			  width: inputWdith
		  }, 200)
	  });
	  jQuery('.top-cont .i-search').blur(function () {
	    
		    $('.top-cont .i-search').parent().animate({
			  width: inputWdithReturn 
		    }, 200) 
		 
    });            
  });
});

// PIE
/*jQuery(function () {
    $('.alignleft, #about, .textwidget-photo, .partner-bg, .alignleft, .alignright, .aligncenter, .shadow-light, .reviews-t, #aside .twit .reviews-t, .blockquote-bg, .navigation, .map, .navig-category, .slider-shprtcode, .toggle, .basic .accord, .shadow_dark, .shadow_dark i, .caption-head, .text-capt, .twit .reviews-t, #footer .flickr .alignleft, .contact-block, .shadow_light, .alignright, ul.tab-tab li').each(function() {
        if ($.browser.msie) PIE.attach(this);
    });
});*/
// end PIE

/*Highslide*/

hs.showCredits = 0;
		hs.padToMinWidth = true;		
		//hs.align = 'center';
		if (hs.registerOverlay) {
			// The white controlbar overlay
			hs.registerOverlay({
				thumbnailId: 'thumb3',
				overlayId: 'controlbar',
				position: 'top right',
				hideOnMouseOut: true
			});
			// The simple semitransparent close button overlay
			hs.registerOverlay({
				thumbnailId: 'thumb2',
				html: '<div class="closebutton"	onclick="return hs.close(this)" title="Close"></div>',
				position: 'top right',
				fade: 2 // fading the semi-transparent overlay looks bad in IE
			});
		}
		
		// ONLY FOR THIS EXAMPLE PAGE!
		// Initialize wrapper for rounded-white. The default wrapper (drop-shadow)
		// is initialized internally.
		if (hs.addEventListener && hs.Outline) hs.addEventListener(window, 'load', function () {
			new hs.Outline('rounded-white');
			new hs.Outline('glossy-dark');
		});
		
		// The gallery example on the front page
		var galleryOptions = {
			slideshowGroup: 'gallery',
			wrapperClassName: 'dark',
			//outlineType: 'glossy-dark',
			dimmingOpacity: 0.8,
			align: 'center',
			transitions: ['expand', 'crossfade'],
			fadeInOut: true,
			wrapperClassName: 'borderless floating-caption',
			marginLeft: 100,
			marginBottom: 80
		};
		
		if (hs.addSlideshow) hs.addSlideshow({
			slideshowGroup: 'gallery',
			interval: 5000,
			repeat: false,
			useControls: true,
			overlayOptions: {
				className: 'text-controls',
				position: 'bottom center',
				relativeTo: 'viewport',
				offsetY: -60
			}/*,
			thumbstrip: {
				position: 'left top',
				mode: 'vertical',
				relativeTo: 'viewport'
			}
		*/
		});
		hs.Expander.prototype.onInit = function() {
			hs.marginBottom = (this.slideshowGroup == 'gallery') ? 150 : 15;
		}
		
		// focus the name field
		hs.Expander.prototype.onAfterExpand = function() {
		
			if (this.a.id == 'contactAnchor') {
				var iframe = window.frames[this.iframe.name],
					doc = iframe.document;
				if (doc.getElementById("theForm")) {
					doc.getElementById("theForm").elements["name"].focus();
				}
		
			}
		}
		
		
		// Not Highslide related
		function frmPaypalSubmit(frm) {
			if (frm.os0.value == '') {
				alert ('Please enter your domain name');
				return false;
			}
			return true;
		}
		
// Footer
//footer
jQuery( function($) {
	///
	$(window).resize(function () {
		h = $(window).outerHeight() - $("#top-bg").outerHeight() - $("#header").outerHeight() - $("#slide").outerHeight() - $(".line-footer").outerHeight() - $("#footer").outerHeight();

		$("#container").css('min-height', h+"px");
	});
	$(window).trigger("resize");
	setTimeout(function() {
		$(window).trigger("resize");
	}, 1500);
});

jQuery( function($) {
	$('.soc-ico').css({
		'max-width' : $('#header nav').width() - $('#nav').width() - 20 +'px'
	})
});

function initiate_parallax() {
    var options = {frameDuration:  15};
    if( arguments.length == 1 && typeof arguments[0] == 'object' ) {
        options = jQuery().extend( options, arguments[0] );
    }

(function($) {
	$(window).resize( function () {
		var parallax_holder = $('#parallax');
		var parallax_holder_w = parallax_holder.width();
		var parallax_holder_h = parallax_holder.height();
		$('> li:nth-child(1)', parallax_holder).css({'width' : parallax_holder_w+30+'px' , 'height' : parallax_holder_h+20+'px' , 'left' : '-15px'});
		$('> li:nth-child(2)', parallax_holder).css({'width' : parallax_holder_w+50+'px' , 'height' : parallax_holder_h+40+'px' , 'left' : '-25px'});
		$('> li:nth-child(3)', parallax_holder).css({'width' : parallax_holder_w+90+'px' , 'height' : parallax_holder_h+60+'px' , 'left' : '-45px'});
		$('> li:nth-child(4)', parallax_holder).css({'width' : parallax_holder_w+130+'px' , 'height' : parallax_holder_h+80+'px' , 'left' : '-65px'});
		var isiPad = navigator.userAgent.match(/iPad/i) != null;
			if(isiPad){
			}
			else{
	  			$('> li', parallax_holder).parallax( options );
			}
	});
	$(window).trigger("resize");
	
	if ($.browser.SafariMobile){
		//$(".scrollbar").css("display", "none");
			
		window.scrollTo(0, 1);
		 $("html").css({
		   "overflow" : "hidden"
		  });
				
	}	
})(jQuery);
}

jQuery( function($){
	$('.one-fourth .header, .one-fourth h2, .one-third .header, .one-third h2, .half .header, .half h2, .two-thirds .header, .two-thirds h2, .full-width .header, .full-width h2').each(function(){
		var nex = $(this).next()
		var parent = $(this).parent();
		var parent_width = parent.width();
		if(nex.hasClass('reviews-t') || nex.hasClass('partner-bg')){			
			$(this).addClass('max-w');
			$(this).css({
				maxWidth:parent_width-40
			});
		}
	})
	//Arrow slider for window < 1030
	$(window).resize(function () {
		var window_w = $(window).width();
		if(window_w < 1030){
			$('.navig-nivo').addClass('small');
		}
		else {
			$('.navig-nivo').removeClass('small');
		}
	});
	$(window).trigger("resize");
	

})

// new ajax scripts
  
// comments form
function move_form_to(ee)
{
      ( function($) {
      var e = $("#form-holder").html();
      var tt = $("#form-holder .header").text();
      
      var sb =$("#form-holder .go_button").attr("title");
      
      var to_slide_up = ($(".comment #form-holder").length ? $("#form-holder") : $(".share_com"));
      
      to_slide_up.slideUp(500, function () {
         $("#form-holder").remove();
         
         ee.append('<div id="form-holder">'+e+'</div>');
         $("#form-holder .header").html(tt);
         $("#form-holder [valed]").removeAttr('valed');
         $("#form-holder .do-clear").attr('remove', 1);

        /* 
         $("#form-holder .go_button cufon").remove();
         $("#form-holder .go_button span span :not(i)").remove();
         $("#form-holder .go_button span i").after( sb );
         */

         //alert(sb);
         Cufon.refresh('#form-holder .header');
		 
         $(".formError").remove();
         
         $("#form-holder").hide();
         
         to_slide_up = ($(".comment #form-holder").length ? $("#form-holder") : $(".share_com"));
         if (to_slide_up.hasClass('share_com')) $("#form-holder").show();
         
         to_slide_up.slideDown(500);
         
         if (ee.attr("id") != "form_prev_holder")
         {
            var eid = ee.parent().attr("id");
            if (!eid)
               eid = "";
            $("#comment_parent").val( eid.replace('comment-', '') );
         }
         else
         {
            $("#comment_parent").val("0");
         }
         
         //update_form_validation();
      });

      })(jQuery);
}
jQuery(function ($) {
   $("#comments .comments").click(function () {
      move_form_to( $(this).parent().parent() );
      return false;
   });
});

jQuery(document).ready( function($) {
/*    $('a.go_button' ).live( 'click', function() {
//        $(this).parents('form.uniform').submit();
//        return false;


		var e=$(this).parents("form");

		if( !e.attr("valed") && !e.hasClass('ajaxing') ) {
			e.validationEngine();
		}
		e.attr("valed", "1");
		e.submit(); 
		return false;

    });*/
    $('form a.do-clear').live( 'click', function() {
        var container = $(this).parents('form.uniform');
        if( container.length ) {
            $('.i-h > input, .t-h > textarea', container ).val('');
        }

		if ($(this).attr("remove") && !$(this).parents("#form_prev_holder").length) {
			move_form_to( $("#form_prev_holder") );
			$("#form_holder .do_clear").removeAttr('remove');
		}

        return false;
    });
});

// new added
jQuery(document).ready( function($) {
    $(document).on( "click", ".go_submit, .go_button", function () {
      var e = $(this).parents("form");

      if( !e.attr("valed") && e.hasClass('ajaxing') ) {
        e.validationEngine({
            ajaxSubmit: true,
            ajaxSubmitFile: e.attr("action")
        });
      }else if( !e.attr("valed") ) {
        e.validationEngine();
      }

      e.attr("valed", "1");
      e.submit(); 

      return false;
   });
    
});
// end comments form

function widget_add_hover() {
	jQuery(".textwidget").hover(
		function(){
			jQuery('> .widget-info', this).stop().fadeTo(400, 1);
		}, function(){
			jQuery('> .widget-info', this).stop().fadeTo(200, 0, function(){ jQuery(this).hide() });
		}
	);
}

function element_add_hover( element ) {
    
    if( typeof element == 'string' ) {
        element = jQuery(element);
    }
    
    var span;
    if( typeof arguments[1] == 'undefined' || typeof arguments[1] == 'number' ) {
        span = jQuery('>i.widget-inf', element);
    }else if( typeof arguments[1] == 'string' ) {
        span = jQuery(arguments[1], element);
    }else {
        span = arguments[1];
    }

    var fade_timeout = 500; 
    if( typeof arguments[1] == 'number' ) {
        fade_timeout = arguments[1];
    }else if( typeof arguments[2] == 'number' ) {
        fade_timeout = arguments[2];
    }

    if(jQuery.browser.msie && jQuery.browser.version < 9) {
	    span.hide();
    }else {
	    span.css('opacity', 0);
    }

    element.hover(function () {
	    if (jQuery.browser.msie && jQuery.browser.version < 9)
		    span.show();
		else
		    span.stop().fadeTo(fade_timeout, 1);
	}, function () {
		if (jQuery.browser.msie && jQuery.browser.version < 9)
		    span.hide();
		else
		    span.stop().fadeTo(fade_timeout, 0);
	});
}

function portfolio_add_zoom( element ) {
    if( typeof element == 'string' ) {
        element = jQuery(element);
    }

    element.each(function(){
        jQuery('a.photo', this).append('<i class="widget-inf"></i>').each(function () {
            element_add_hover( jQuery(this) );
	    });
	});
}

function list_to_grid() {	
    jQuery(".gallery-inner").fadeOut("fast", function() {
	    jQuery(this).fadeIn("fast").addClass("w-i");
		jQuery('.textwidget:first', this).removeClass('first')
        jQuery('.textwidget.text', this).each(function(){
	        jQuery(this).removeClass('text');
			jQuery('.info', this).each(function () {
			    jQuery(this).wrap("<div class='widget-info'></div>");
			});						
            jQuery('.textwidget-photo', this).each(function() {
		        jQuery(this).clone(true).prependTo(jQuery(this).parent(".textwidget").find(".widget-info"))
			});
			jQuery('.widget-info .info a.button', this).removeClass("button").addClass('details');
		});
        portfolio_add_zoom( jQuery('.widget-info', this) );
    });
	return false;
}

function grid_to_list() {
    $(".gallery-inner").fadeOut("fast", function() {
	    $(this).fadeIn("fast").addClass("t-l");
		$('.textwidget:first', this).addClass('first')
		$('.textwidget', this).each(function(){			
			$(this).addClass('text')
			$(this).append( $('.widget-info > .info', this))
			$('.widget-info', this).remove();
			$('.info a.details', this).removeClass("details").addClass('button')				
		});
		Cufon.refresh('.textwidget > .info > .head');
	})		
	return false;
}

// add click events to layout switcher
/*
jQuery('.navig-category').delegate('a.button.categ.td:not(.act)' , 'click' , function(){
    jQuery("a.button.categ.td").addClass("act"); 
	jQuery("a.button.categ.list").removeClass("act");
		
	list_to_grid();	
});
*/

function add_hover_effect( element ) {
    if( typeof element == 'string' ) {
        element = jQuery(element);
    }

    if( (typeof arguments[1] == 'undefined') || arguments[1] ) {
        element.append('<i></i>');
    }

	element.each(function () {
        element_add_hover( jQuery(this), 'i' );
	});
}

function add_i_height() {
	jQuery(".textwidget-photo a.photo").each(function () {
		var im = jQuery(this).find("img");
		var im_h = im.attr("height");
		var im_w = im.attr("width");
		jQuery('i', this).css('height', im_h);
		jQuery(this).next('.form-protect').css({
			'height': im_h, 
			'width': im_w
		});
		var form_w = jQuery(this).next('.form-protect').width();
		if(form_w < 230){
			jQuery(this).next('.form-protect').addClass('fourth')
		}
		else{
			jQuery(this).next('.form-protect').removeClass('fourth')
		}
	});
	
	jQuery('.textwidget-photo').each(function () {
		  var $span = jQuery('.form-protect', this);
		 if (jQuery.browser.msie && jQuery.browser.version < 9)
			$span.hide();
		 else
			$span.css('opacity', 0);
		  jQuery(this).hover(function () {
			  
			if (jQuery.browser.msie && jQuery.browser.version < 9)
			  $span.show();
			else
			$span.stop().fadeTo(500, 1);
		  }, function () {
			if (jQuery.browser.msie && jQuery.browser.version < 9)
			  $span.hide();
			else
			  $span.stop().fadeTo(500, 0);
		  });
		});
}

function portfolio_add_cufon() {
    jQuery('.textwidget .info > .head').each(function(){
		jQuery(this).clone().prependTo(jQuery(this).parent()).removeClass("head").addClass("hide-me");
	})		
	cufon_in_gall();
}

// dt ajax object
function DT_PAGE_AJAX() {
    var used_hash = '';
    
    this.parse_hash = function( hash ) {
        if( -1 == hash.search(/\//) )
            return null;

        hash_arr = hash.split('/');
        
        if( hash_arr.length != 3 )
            return null;

        return hash_arr;
    }

    this.do_ajax = function( hash ) {
        hash = hash.slice(1);
        
        if( used_hash == hash ) {
            return false;
        }
        
        used_hash = hash;
        
        var cat_id = '', page = 1, layout = 'list';
        
        var hash_arr = this.parse_hash(hash);
        if( hash_arr ) {
            cat_id = hash_arr[0];
            page = hash_arr[1];
            layout = hash_arr[2]; 
        }else
            return false;

        jQuery('.dt-ajax-content').load( dt_ajax.ajaxurl, {
            action:         'dt_post_type_do_ajax',
            cat_id:         cat_id,
            paged:          page,
            post_id:        dt_ajax.post_id,
            layout:         layout,
            page_layout:    dt_ajax.page_layout,
            nonce:          dt_ajax.nonce 
        }, function() {
            if( jQuery(this).parent().next().is('#nav-above') )
                jQuery(this).parent().next().detach();
            jQuery('#nav-above', jQuery(this)).insertAfter(jQuery(this).parent());
            widget_add_hover();
            add_hover_effect(jQuery('a.photo', this));
            if ( 'grid' == layout ) {
                jQuery(this).addClass("w-i");
                portfolio_add_zoom( jQuery('.widget-info', this) );		
            }
            add_i_height();
            portfolio_add_cufon();
			jQuery(window).attachHs();
			preloadAjaxImages();
        });
  
    }
}

var dt_pajax_obj = new DT_PAGE_AJAX();

function dt_change_layout_hash() {
    var cur_hash = dt_pajax_obj.parse_hash(window.location.hash.slice(1));
    jQuery('.navig-category').children('a.button.categ').each( function() {
        href = jQuery(this).attr('href').split('#');
        if( href && href.length == 2 ) {
            hash = dt_pajax_obj.parse_hash(href[1]);
            if( (hash && hash.length == 3) && (cur_hash && cur_hash.length == 3) ) {
                hash[0] = cur_hash[0];
                hash[1] = cur_hash[1];
                href[1] = hash.join('/');
                jQuery(this).attr('href', href.join('#'));
            }
        }
    });
}

function dt_change_pagination_hash() {
    var cur_hash = dt_pajax_obj.parse_hash(window.location.hash.slice(1));
    jQuery('#nav-above').find('a').each( function() {
        href = jQuery(this).attr('href').split('#');
        if( href && href.length == 2 ) {
            hash = dt_pajax_obj.parse_hash(href[1]);
            if( (hash && hash.length == 3) && (cur_hash && cur_hash.length == 3) ) {
                hash[2] = cur_hash[2];
                hash[0] = cur_hash[0];
                href[1] = hash.join('/');
                jQuery(this).attr('href', href.join('#'));
            }
        }
    });
}

function dt_replace( old_data, new_data ) {
    if( typeof old_data == 'array' && typeof new_data == 'array' ) {
        for( i=0;i<old_data.length;i++) {
            if( typeof new_data[i] != 'undefined' ) {
                old_data[i] = new_data[i];
            }
        }
    }else {
        old_data = new_data;
    }
    return old_data;
}

function dt_change_navigation_hash() {
    var cur_hash = dt_pajax_obj.parse_hash(window.location.hash.slice(1));
    jQuery('.navig-category').children('a.button').not('.categ').each( function() {
        href = jQuery(this).attr('href').split('#');
        if( href && href.length == 2 ) {
            hash = dt_pajax_obj.parse_hash(href[1]);
            if( (hash && hash.length == 3) && (cur_hash && cur_hash.length == 3) ) {
                hash[2] = cur_hash[2];
                href[1] = hash.join('/');
                jQuery(this).attr('href', href.join('#'));
            }
        }
    });
}

function dt_portfolio_ajax() {    
    var holder = jQuery('.navig-category');
    var hash_orig;

    window.onhashchange = function() {
//        showBlackLoader();

        dt_change_layout_hash();
        dt_change_pagination_hash();
        dt_change_navigation_hash();

        dt_pajax_obj.do_ajax( window.location.hash );
    };

    if( !window.location.hash ) {
        var btn_href = holder.children('.button.categ.act').attr('href');
        var layout = 'list';
        if( btn_href ) {
            btn_href = btn_href.split('#');
            if( btn_href[1] ) {
                layout = dt_pajax_obj.parse_hash(btn_href[1]);
                layout = layout[2];
            }
        }else if( dt_ajax.layout ) {
            layout = dt_ajax.layout;
        }

        window.location.hash = 'all/1/' + layout;
    }
    window.onhashchange();
        
    hash_orig = dt_pajax_obj.parse_hash(window.location.hash);
    
    holder.find('a.button').not('.categ').each(function(){
        if( hash_orig && (-1 != jQuery(this).attr('href').search(hash_orig[0])) ) {
            holder.find("a.button.act").not('.categ').removeClass("act");
            jQuery(this).addClass("act");
        }
        
        jQuery(this).click(function(){
            
            if( jQuery(this).hasClass('act') ) {
                return false;
            }
            
            // reassign act class properly
            holder.find("a.button.act").not('.categ').removeClass("act");
            jQuery(this).addClass("act");
        });
    });

    // remove window.onhashchange handler wen layout switcher is clicked
    holder.find('a.button.categ').each( function() {
        if( hash_orig && (-1 != jQuery(this).attr('href').search(hash_orig[2])) ) {
            holder.find("a.button.categ.act").removeClass("act");
            jQuery(this).addClass("act");
        }
        
        jQuery(this).click( function(e) {
            if( jQuery(this).hasClass('act') ) {
                return false;
            }
            e.preventDefault();
            window.location.hash = '#'+jQuery(this).attr('href').split('#')[1];

            // reassign act class properly
            holder.find("a.categ.act").removeClass("act");
            jQuery(this).addClass("act");
            return false;
        }); 
    });
}// dt_portfolio_ajax end

jQuery(document).ready(function() {

    if( jQuery('.dt-ajax-content').length ) {
        dt_portfolio_ajax();
    }

    if( jQuery('#comments .comments-container').length ) {
        jQuery('#comments .comments-container').find('.children').each(function() {
            jQuery(this).children('.comment:last').addClass('last');
        });
    }

	//Comment children last child
//	jQuery('#comments .children .children .children .children:last-child').addClass('last');
});

//Comment children last child
jQuery(function($){
 $('#comments .children .children .children .children:last-child').addClass('last');
 var sibl = $('#comments .children .level1 ~ .level1');
 
 if(sibl){
   $('.children .level1').addClass('first')
 }
 
 var sibl2 = $('#comments .children .level2 ~ .level2');
 
 if(sibl2){
   $('.children .level2').addClass('first')
 }
 
 var sibl3 = $('#comments .children .level3 ~ .level3');
 
 if(sibl){
   $('.children .level3').addClass('first')
 }
 
 var sibl4 = $('#comments .children .level4 ~ .level4');
 
 if(sibl4){
   $('.children .level4').addClass('first')
 }
 var sibl5 = $('#comments .children .level5 ~ .level5');
 
 if(sibl5){
   $('.children .level4').addClass('first')
 }
 
 var sibl_children = $('#comments .children .comment.first').next('.children');
  sibl_children.addClass('visible')


 jQuery('#comments .comments-container').find('.children').each(function() {
  jQuery(this).children('.comment:last').addClass('last');
 });
 jQuery('#comments .comments-container').find('.children').each(function() {
  jQuery(this).children('.children:last').addClass('last');
 });
 $('.children .level2, .children .level1, .children .level3, .children .level4, .children .level5').each(function(){
  var this_children = $(this).find('.children');
  if(this_children.siblings('.level2')){
   $(this).addClass('first')
  }
  else if (this_children.siblings('last')){
   $(this).removeClass('first')
  }
  
 })
})

// end ajax

jQuery(document).ready(function($){
	$.fn.imageLoaded = function( callback ){
		var $this = this[0];

		var timer  = setInterval(function(){
			if($this.complete == true) {
				clearInterval(timer);
				callback.call($this);
			}
		},200);

		return $this;
	};

	window.preloadImages = function () {
		var $my_images = $('#container img, #footer img, #slide img, #slider img, #aside img');
		$my_images.css({'opacity':'0','visibility':'visible'});
	
		$my_images.each( function() {
			$(this).imageLoaded(function(){
				$(this).animate({'opacity':'1'}, 500, function(){});
			});
		});
	}
	
	window.preloadAjaxImages = function () {
		var $my_images = $('.dt-ajax-content img');
		$my_images.css({'opacity':'0','visibility':'visible'});
	
		$my_images.each( function() {
			$(this).imageLoaded(function(){
				$(this).animate({'opacity':'1'}, 500, function(){});
			});
		});
	}
	
	preloadImages();

});
