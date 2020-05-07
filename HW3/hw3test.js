function addBtn(){
	const container = document.querySelector("#container")
	console.log(container)
	const btn = document.querySelector("#rem")
	console.log(btn)

	btn.addEventListener("click", event =>{
		if(container.childNodes.length>0){
			container.removeChild(container.lastChild)
		}
		else{
			return
		}
	})
	container.addEventListener("keypress", event=>{
		console.log(event.key)
	})
}