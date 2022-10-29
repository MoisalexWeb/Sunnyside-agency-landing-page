const menuBtn = document.querySelector('.nav__hamburger'),
    body = document.querySelector('body'),
    menu = document.querySelector('.nav__menu'),
    capa = document.querySelector('.flag');

const removeMenuStyles = () => {
	menu.classList.remove('show-menu');
    capa.classList.remove('show-flag');
    body.classList.remove('disable-scroll');
    menuBtn.classList.remove('active');
}

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    if (menuBtn.classList.contains('active')) {
        menu.style.transition = 'transform 0.4s ease-out';
        menu.classList.add('show-menu');
        capa.classList.add('show-flag');
        capa.style.transition = 'opacity 0.4s ease-in';
        body.classList.add('disable-scroll');
    } else {
        removeMenuStyles()
    }
})

window.addEventListener('resize', (e) => {
	if(window.innerWidth >= 768) {
		removeMenuStyles()
		menu.removeAttribute('style');
		capa.removeAttribute('style');
        body.classList.remove('disable-scroll');
	}
});

document.addEventListener('click', (e) => {
	if (menuBtn.classList.contains('active')) {
		if(e.target.matches(".flag") || e.target.matches(".nav-link")) {
			removeMenuStyles();
		}
	}
});