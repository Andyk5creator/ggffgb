document.addEventListener("DOMContentLoaded", function () {
	document.getElementById('burger').addEventListener("click", function () {
		document.querySelector("header").classList.toggle("open")
	})
})

var swiper = new Swiper('.swiper', {
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	keybord: true,
	loop: true,
});