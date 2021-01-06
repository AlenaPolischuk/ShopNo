const burger = document.querySelector('.burger'),
	  nav = document.querySelector('.nav-links'), 
	  links = document.querySelectorAll('.nav-links li');
function slider() {
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		burger.classList.toggle('toggle');
		links.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinksFade .5s ease forwards ${index/7 + 0.3}s`;
			}
		})
	})
}
slider();	

var slideIndex = 1;

showSlides(slideIndex);

function plusSlide() {
	showSlides(slideIndex +=1);
}

function minusSlide() {
	showSlides(slideIndex -=1);
}
function showSlides(n) {
	var slides = document.getElementsByClassName("item");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

