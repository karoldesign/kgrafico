
//MENÚ RESPONSIVE

var sidebar_r 		= document.querySelector('.sidebar_r'),
	menu_r			= document.querySelector('.mainNavButton'),
	close_button_ 	= document.querySelector('.close_button_'),
	is_opened 		= false;

var open_r = function () {
	sidebar_r.classList.remove('closed');
	menu_r.classList.add('active');
	is_opened = true;
};

var close_r = function () {
	sidebar_r.classList.add('closed');
	menu_r.classList.remove('active');
	is_opened = false;
};

menu_r.addEventListener('click', function (ev) {
	if (is_opened) {
		close_r();
	} else {
		open_r();
	}
});

close_button_.addEventListener('click', function (ev) {
	if (is_opened) {
		close_r();
	} else {
		open_r();
	}
});
