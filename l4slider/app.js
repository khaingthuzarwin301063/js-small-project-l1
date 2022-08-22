var slides = document.getElementsByClassName("carousel-item");

var dots = document.querySelectorAll(".dot")
console.log(dots);

var currslides = 1;

//prev btn

document.getElementById('prev').addEventListener('click',function(){
	carousel(currslides -= 1)
});


// next btn
document.getElementById('next').addEventListener('click',function(){
	carousel(currslides += 1)
});

for(var q= 0 ; q <dots.length ; q++){
	// console.log(q);

	dots[q].addEventListener('click',function(){
		// console.log(this.getAttribute("data-bs-slide-to"));

		currslides = this.getAttribute("data-bs-slide-to");

		carousel(currslides);
	})
}

carousel(currslides);

function carousel(slidenum){

	// hide all slides
	for(var x = 0 ; x < slides.length ;x++){
		slides[x].style.display = "none";
	}

	for(var y=0 ; y <dots.length ;y++){
		// dots[y].classList.remove("active");
		// dots[y].className="dot";
		dots[y].className = dots[y].className.replace("active","");

	}

	// for currslides 1 to 3 & 3 to 1
	if(slidenum > slides.length){
		currslides =1;
	}else if(slidenum < 1){
		currslides = slides.length;
	}

	// console.log(currslides);

	slides[currslides-1].style.display = "block";

	// dots[currslides-1].className = "dot active";
	// dots[currslides-1].className  += " active";
	dots[currslides-1].classList.add("active");
}

// 15DT

// slide 	0 		1 		2
// currslides 1-0       2-1       3-1
