let htmlDoc = document.querySelector(".html").style.width;
let goButtons = document.querySelectorAll(".subGoButton");
let selectClass = document.querySelectorAll(".selectClass");
let body = document.querySelector(".body");
let main = document.querySelector(".main");
let closePng = document.querySelector(".closePng");
let popUpClasses = document.querySelectorAll(".popUpClasses");
let class11 = document.querySelector(".popUpClass11");
let class12 = document.querySelector(".popUpClass12");
let html = document.getElementById("html");
let uniTransition = "0.3s";
let zeroTransition = "0s";
let subName = document.getElementById("subName");
let navClass11 = document.getElementById("navClass11");
let navClass12 = document.getElementById("navClass12");
let navClass11int = 0;
let navClass12int = 0;
let bodyClass11 = document.getElementById("bodyClass11");
let bodyClass12 = document.getElementById("bodyClass12");


function subNameChange(GBindex, subNameString){ // subject name changer, but now since that feature is disabled it works like a backend
	goButtons[GBindex].addEventListener("click", ()=>{
		subName.innerHTML = subNameString;
	})
}

function subForNav(navClass, gbin, gbinSub){
	navClass.addEventListener("click", ()=>{
		goButtons[gbin].addEventListener("click", ()=>{
			document.location.href = gbinSub
		
		})
	})
}

document.addEventListener("DOMContentLoaded", ()=>{
	if (sDuo.matches) {     
	    helpTextPhone();
	}
	else{
		tHelp.style.right = '-1.5%';
		setTimeout(()=>{
		    tHelp.style.opacity = '0%';
		    setTimeout(()=>{
		        tHelp.style.right = '-200%';
		        setTimeout(()=>{
		            tHelp.style.opacity = '100%';
		        }, 1000);
		    }, 1000);
		}, 20000)		
	}

});



goButtons.forEach((e)=>{
	e.addEventListener("click", ()=>{
		document.location.href = "#introText";
	})
})



subNameChange(0, "Physics");
subNameChange(1, "Chemistry");
subNameChange(2, "Maths");
subNameChange(3, "Biology");

bodyClass11.addEventListener("click", ()=>{
	if(subName.innerHTML == "Physics"){
		window.location.href = "./subjectPages/class11phy.html";
	}
	else if(subName.innerHTML == "Chemistry"){
		window.location.href = "./subjectPages/class11chem.html";
	}
	else if(subName.innerHTML =="Maths"){
		window.location.href = "./subjectPages/class11maths.html";
	}
	else if(subName.innerHTML == "Biology"){
		window.location.href = "./subjectPages/class11bio.html";
	}
	else{
		true;
	}

})

bodyClass12.addEventListener("click", ()=>{
	if(subName.innerHTML == "Physics"){
		window.location.href = "./subjectPages/class12phy.html";
	}
	else if(subName.innerHTML == "Chemistry"){
		window.location.href = "./subjectPages/class12chem.html";
	}
	else if(subName.innerHTML =="Maths"){
		window.location.href = "./subjectPages/class12maths.html";
	}
	else if(subName.innerHTML == "Biology"){
		window.location.href = "./subjectPages/class12bio.html";
	}
	else{
		true;
	}

})

// selecting class and subject from body
subForNav(bodyClass11, 0, "./subjectPages/class11phy.html");
subForNav(bodyClass11, 1, "./subjectPages/class11chem.html");
subForNav(bodyClass11, 2, "./subjectPages/class11maths.html");
subForNav(bodyClass11, 3, "./subjectPages/class11bio.html");

subForNav(bodyClass12, 0, "./subjectPages/class12phy.html");
subForNav(bodyClass12, 1, "./subjectPages/class12chem.html");
subForNav(bodyClass12, 2, "./subjectPages/class12maths.html");
subForNav(bodyClass12, 3, "./subjectPages/class12bio.html");



