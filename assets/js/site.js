"use strict";

$(document).ready(function () {
	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});

/* Protect email addresses from basic spam crawlers */
$(document).ready(function () {
	document.querySelectorAll(".email").forEach(function(e) {
		let separator = e.querySelector(".email-separator")
		let address = e.querySelector(".email-address").innerText
		let domain = e.querySelector(".email-domain").innerText
		let anchor = document.createElement('a')

		// Replace '[at]' with '@',
		// Set the new anchor tag's href URL to "mailto:email@address"
		// Place it in the DOM
		// And squash any remaining whitespace
		separator.innerHTML = separator.innerHTML.replace("[at]", "@")
		anchor.href = 'mailto:' + address + '@' + domain
		e.parentNode.insertBefore(anchor, e)
		anchor.appendChild(e)
		e.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/\>[\t ]+\</g, "><")
	})
});