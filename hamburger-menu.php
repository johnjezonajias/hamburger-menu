<!-- hamburger toggle button -->
<div class="hmenu-wrapper">
	<button id="hamburger-btn" class="hamburger hamburger--emphatic" type="button">
	  <span class="hamburger-box">
		  <span class="hamburger-inner"></span>
	  </span>
	</button>
</div>

<!-- wordpress menu for mobile -->
<nav id="mobile-navigation" class="mobile-navigation" role="navigation">
	<?php wp_nav_menu( array( 'theme_location' => 'mobile', 'menu_id' => 'mobile-menu' ) ); ?>
</nav>
