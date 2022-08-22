var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-signup');
var getbtnclose = document.getElementById('btn-close');
var getbtnfullscreen = document.getElementById('btn-fullscreen');
var getbtnclosescreen = document.getElementById('btn-closescreen');

getbtnsignup.addEventListener('click',function(){
	getmodal.style.display = "block";
});

getbtnclose.addEventListener('click',function(){
	getmodal.style.display = "none";
});

window.onclick = function(e){
	// console.log(e.target);

	if(e.target === getmodal){
		getmodal.style.display = "none";
	}
}

var getde = document.documentElement;

// console.log(getde);

getbtnfullscreen.addEventListener('click',function(){

	if(getde.requestFullscreen){
		getde.requestFullscreen();
	}else if(getde.msrequestFullscreen){
		getde.msRequestFullscreen();
	}else if(getde.webkitrequestFullscreen){
		getde.webkitRequestFullscreen();
	}

	getbtnclosescreen.style.display = "inline-block";
});

getbtnclosescreen.addEventListener('click',function(){
	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();

		getbtnclosescreen.style.display = "none";
	}
});

 localStorage.setItem("getbtnfullscreen","1");

function newfunction(){

	if(getbtnfullscreen = 1){
		getbtnclosescreen.style.display = "inline-block";
	}else{
		getbtnclosescreen.style.display = "none";
	}
};

newfunction();


