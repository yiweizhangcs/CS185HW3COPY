const lightBox = document.createElement('div')
lightBox.id ='lightBox'
document.body.appendChild(lightBox)
console.log(lightBox)

const images = document.querySelectorAll('img')
images.forEach(image => {
	image.addEventListener('click', e => {
		lightBox.classList.add('active')
		const img = document.createElement('img')
		img.src = image.src
		while (lightBox.firstChild){
			lightBox.removeChild(lightBox.firstChild)
		}
		lightBox.appendChild(img)
	})
})
lightBox.addEventListener('click', e=>{
	if (e.target !== e.currentTarget) return
	lightBox.classList.remove('active')
})
// I watched this video on youtube:https://youtu.be/uKVVSwXdLr0
// I code one step by one step. I understand these codes. I understand discussion example.
