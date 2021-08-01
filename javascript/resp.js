let burger = document.querySelector(".burger");
let logoImg = document.querySelector(".imgModOrg");
let logoImgMod = document.querySelector(".imgMod");
let lnModLi = document.querySelectorAll(".lnModLi");
let rnMod = document.querySelector(".rnMod");

burger.addEventListener("click", ()=>{
	logoImg.classList.toggle("imgMod");
	burger.classList.toggle("burgerMod");
	lnModLi.forEach((l)=>{
		l.classList.toggle("lnModLi");
	});
	rnMod.classList.toggle("rnMod");
	
})

if (logoImg.style.margin == '6px 0px 3px 12px' && lnModLi.style.visibility !== 'hidden') {
	logoImg.style.margin = '6px 0px 3px 0px';

}