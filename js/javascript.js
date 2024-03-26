$(function () {
	// Pacifica theme javascript
	var mobileFixedContainer = $('.mobile-fixed-container'),
		logoHeading = $('#logo-heading'),
		superMenu = $('.super-menu'),
		verticalMenu = $('.vertical-menu'),
		mainNavSubMenuContainer = $('.main-nav-submenu-container'),
		welcomeBackBar = $('#welcomeBackBar'),
		mainNavButton = $('#main-nav-btn'),
		hamburgerMenuSection = $('#hamburger-menu-section'),
		hamburgerMenuSectionIdVal = 'hamburger-menu-section',
		searchPanel = $('.search-panel'),
		searchButton = $('.search-btn'),
		topNavBar = $('#top-nav-bar'),
		userBtn = $('.user-btn'),
		loginBtn = $('.login-btn');


	// DOM ordering for improved A11y
	function controlDomOrder() {
		if ($(window).width() >= 1025) {
			logoHeading.after(topNavBar);
			if (userBtn.length === 0) {
				$(function () {
					welcomeBackBar.after(logoHeading);
					if (searchPanel.length !== 0) {
						welcomeBackBar.after(searchPanel);
						searchPanel.before(searchButton);
					} else {
						mainNavSubMenuContainer.after(logoHeading);
					}
				});
			}
			if (userBtn.length !== 0) {
				$(function () {
					welcomeBackBar.after(topNavBar);

					if (searchPanel.length !== 0) {
						searchButton.before(logoHeading);
					} else {
						welcomeBackBar.before(logoHeading);
						welcomeBackBar.after(mainNavSubMenuContainer);
					}
				});
			}

		} else {
			if (userBtn.length !== 0 && searchPanel.length !== 0) {
				welcomeBackBar.after(logoHeading);

			}
			if (userBtn.length === 0 || searchPanel.length === 0) {
				welcomeBackBar.after(logoHeading);
				logoHeading.before(searchButton);
			}
			mainNavButton.before(topNavBar);
		}
	}

	function controlDomOrderOnResize() {
		$(window).on("resize",
			function () {
				controlDomOrder();
			});
	}

	function controlDomOrderOnLoad() {
		controlDomOrder();
	}

	controlDomOrderOnLoad();
	controlDomOrderOnResize();

	function removeStyleAttrForLoginSearchUserButtons() {
		loginBtn.removeAttr('style');
		searchButton.removeAttr('style');
		userBtn.removeAttr('style');
	}

	function removeStyleAttrForMainNavButtonAndMobileFixedContainer() {
		mainNavButton.removeAttr('style');
		mobileFixedContainer.removeAttr('style');
	}

	function animateButtonsForNavBarOpen() {
		mainNavButton.stop().animate({ top: '76px' }, 200);
		mobileFixedContainer.stop().animate({ top: '12px' }, 200);
		loginBtn.stop().animate({ top: '76px' }, 200);
		searchButton.stop().animate({ top: '80px' }, 200);
		userBtn.stop().animate({ top: '75px' }, 200);
	}

	function animateButtonsForNavBarClose() {
		mainNavButton.stop().animate({ top: '5px' }, 200);
		mobileFixedContainer.stop().animate({ top: '0' }, 200);
		loginBtn.stop().animate({ top: '3px' }, 200);
		searchButton.stop().animate({ top: '6px' }, 200);
		userBtn.stop().animate({ top: '2px' }, 200);
	}

	function hamburgerMenuAnimate() {
		if (superMenu.length > 0 || verticalMenu.length > 0) return;
		$(window).on("resize",
			function () {
				if ($(window).width() >= 1025) {
					removeStyleAttrForLoginSearchUserButtons();

					if (hamburgerMenuSection.hasClass('in')) {
						hamburgerMenuSection.collapse('hide');
					}
				}
			});
		mainNavButton.on('click',
			function () {
				$('.collapse').on('show.bs.collapse',
					function (e) {
						if (e.currentTarget.id === hamburgerMenuSectionIdVal) {
							if ($(window).width() >= 1025) {
								removeStyleAttrForMainNavButtonAndMobileFixedContainer();
								removeStyleAttrForLoginSearchUserButtons();
								return;
							}
							animateButtonsForNavBarOpen();
						}
					});
				$('.collapse').on('hide.bs.collapse',
					function (e) {
						if (e.currentTarget.id === hamburgerMenuSectionIdVal) {
							if ($(window).width() >= 1025) {
								removeStyleAttrForMainNavButtonAndMobileFixedContainer();
								removeStyleAttrForLoginSearchUserButtons();
								return;
							}
							animateButtonsForNavBarClose();
						}
					});
			});
	}
	hamburgerMenuAnimate();
});
document.addEventListener('DOMContentLoaded', function () {
	const button = document.getElementById('dynamicButton');

	button.addEventListener('click', function (event) {
		// Prevent the default navigation.
		event.preventDefault();
		// Capture the URL from the href attribute of the anchor tag.
		const navigateUrl = button.getAttribute('href');

		// Change the button (anchor) text.
		button.textContent = 'Loading...';

		// Optionally, you can add a brief delay to ensure the text change is visible.
		setTimeout(function () {
			// Navigate to the URL.
			window.location.href = navigateUrl;
		}, 500); // Adjust delay as needed (500 milliseconds recommended for visibility)
	});
});