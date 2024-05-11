//your JS code here. If required.
let subBtn = document.querySelector("#btn");
let age = document.querySelector("#age");
let name = document.querySelector("#name");
subBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	let fullname = name.value;
	let currAge = parseInt(age.value);
	if(currAge>18 && fullname!== undefined){
		let makePromise = new Promise((resolve, reject)=>{
			setTimeout(()=>{
				resolve(alert(`Welcome, ${fullname}. You can vote`))
			}, 4000)
		})
	}else{
		let makePromise = new Promise((resolve, reject)=>{
			setTimeout(()=>{
				reject(alert(`Oh sorry, ${fullname}. You aren't old enough.`))
			}, 4000)
		})
	}
	
})