// console.log("hi");

var getprogressbar = document.querySelector('.progress-bar');

var getbtn =  document.querySelector('.btn');

var seturl = "https://linkedin.com";

getbtn.addEventListener('click', function(){
	// console.log("hi");

	getbtn.setAttribute("disabled",true);

	var setwidth = 0;

	var setinv = setInterval(progressinc,100);

	function progressinc(){

		if(setwidth >= 100){
			clearInterval(setinv);
			setwidth = 0;

			// window.location.href = seturl;
		}else{
			setwidth++;

			getprogressbar.style.width = `${setwidth}%`;
			
			getprogressbar.setAttribute('data-inc',`${setwidth}%`);
		}
	}

});