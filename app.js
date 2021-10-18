
let thum = document.getElementById('thum');
let images = [
	"images/image-product-1.jpg",
	"images/image-product-2.jpg",
	"images/image-product-3.jpg",
	"images/image-product-4.jpg"
]

document.getElementById('bottom1').addEventListener('click' , () => {
		thum.src = images[0];
})

document.getElementById('bottom2').addEventListener('click' , () => {
		thum.src = images[1];
})

document.getElementById('bottom3').addEventListener('click' , () => {
		thum.src = images[2];
})

document.getElementById('bottom4').addEventListener('click' , () => {
		thum.src = images[3];
})

// counter

let count = 0;
let currCount = document.getElementById('count');

document.getElementById('minus').addEventListener('click',()=>{
		if(count === 0){

		}else{
			count--
			currCount.innerHTML = count
		}
})
document.getElementById('plus').addEventListener('click',()=>{
		count++
		currCount.innerHTML = count
})

// cart

document.getElementById('add').addEventListener('click',()=>{
	let currCartValue = document.getElementById('cart-value');
	currCartValue.innerHTML = count;
})