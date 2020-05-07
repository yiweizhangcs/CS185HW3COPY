const toTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", ()=>{
	if(window.pageYOffset>80){
		toTop.classList.add("active");
	}else{
		toTop.classList.remove("active");
	}
})

// I watched viedo:https://www.youtube.com/watch?v=SJVCvnKM_lI
// I learnt then code.