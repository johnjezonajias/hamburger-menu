(function($) {
	//hide navigation wrap
	$(".mobile-navigation").hide();
	
	//var
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
			$hamburger.toggleClass("is-active");
			//condition
			if( $('.hamburger').hasClass('is-active') ) {
				$(".mobile-navigation").slideDown(600);
				//disable page content when hamburger toggled(background)
				$("<div class='mbmenu-bg-toggled'></div>").fadeIn(600).insertBefore("#some-id-anchor");
			} else {
				$(".mobile-navigation").slideUp();
				//remove content background
				$( ".mbmenu-bg-toggled" ).remove();
			}
	});

	//if mobile menu has submenu
	$(".menu-item-has-children > a").on('click', function(e) {
		e.preventDefault();
		if( $(this).parent('.menu-item-has-children').hasClass('collapsed-mobile-submenu') ) {
			$(this).parent('.menu-item-has-children').find(".sub-menu").slideUp();
			$(this).parent('.menu-item-has-children').find(".sub-menu").toggleClass("show-mobile-submenu");
			$(this).parent('.menu-item-has-children').toggleClass("collapsed-mobile-submenu");
			return false;
		}

		$(this).parent('.menu-item-has-children').toggleClass("collapsed-mobile-submenu");
		$(this).parent('.menu-item-has-children').find(".sub-menu").slideDown();
		$(this).parent('.menu-item-has-children').find(".sub-menu").toggleClass("show-mobile-submenu");
		$(this).parent('.menu-item-has-children').siblings('li').find(".sub-menu").slideUp();
		$(this).parent('.menu-item-has-children').siblings('li').find(".sub-menu").removeClass("show-mobile-submenu");
		$(this).parent('.menu-item-has-children').siblings('li').removeClass("collapsed-mobile-submenu");
	});
}(jQuery));
