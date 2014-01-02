/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = 'js/plugins/highslide/graphics/';
hs.showCredits = false;
hs.outlineType = 'custom';
hs.dimmingOpacity = 0.75;
hs.fadeInOut = true;
hs.align = 'center';
hs.preserveContent = false;
hs.marginBottom = 60;
hs.marginLeft = 10;
hs.captionEval = 'this.a.title';
hs.captionOverlay.position = 'below';
hs.registerOverlay({
	html: '<div class="closebutton" onclick="return hs.close(this)" title="Close"></div>',
	position: 'top right',
	useOnHtml: true,
	fade: 2 // fading the semi-transparent overlay looks bad in IE
});

var slideshow_options = {
	slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: false,
	overlayOptions: {
		className: 'text-controls',
		opacity: 1,
		position: 'bottom center',
		offsetX: 0,
		offsetY: -10,
		relativeTo: 'viewport',
		hideOnMouseOut: false
	},
	thumbstrip: {
		mode: 'vertical',
		position: 'middle left',
		relativeTo: 'viewport'
	}
};
hs.addSlideshow(slideshow_options);

var slideshow_options2 = {
	slideshowGroup: 'default_group',
	interval: 5000,
	repeat: false,
	useControls: false,
	fixedControls: false,
	overlayOptions: false,
	thumbstrip: false
};
hs.addSlideshow(slideshow_options2);

// gallery config object
var config1 = {
	//slideshowGroup: 'group1',
	transitions: ['expand', 'crossfade']
};

//hs.slideshowGroup = 'group1';

var hs_config1 = {
	slideshowGroup: 'group1',
	transitions:    ['expand', 'crossfade']
};

var hs_config2 = {
	slideshowGroup: 'default_group',
	transitions:    ['expand', 'crossfade']
};


jQuery(document).ready(function($) {

	window.hsGroups= [];

	jQuery.fn.attachHs = function() {
		$(".hidden-container:not(.hs-redy)").each(function() {
			var $this		= $(this),
				groupId		= $this.attr("data-hs_group"),
				newOptions	= {};


			if(hsGroups[groupId] != groupId) {
				$.extend(newOptions, slideshow_options);
				newOptions.slideshowGroup = groupId;
				hs.addSlideshow(newOptions);
				hsGroups[groupId] = groupId;
			}

			$this.addClass("hs-redy");

			var links = $("a", $this).each(function() {
				$(this).attr("onclick", "return hs.expand(this, {slideshowGroup: '"+groupId+"', transitions: ['expand', 'crossfade']})")
			});

			$this.parents(".textwidget").find("a.photo").on("click", function(event) {
				event.preventDefault();
				$(links[0]).trigger("click");
			});

		});
	}

	jQuery(window).attachHs();

	jQuery(".hs-me").on("click", function() {
		return hs.expand(this)
	});
});