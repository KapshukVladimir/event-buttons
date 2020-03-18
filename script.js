let elements = document.querySelectorAll('#main-list li');
let i = 0;
let k = i;
let current;
let last;

let showFirstEl = document.getElementById("show-first").onclick = function(){
	for (let item = 0; item < elements.length; item++){
		if (elements[item].classList.contains('green')){
			elements[item].classList.remove('green');
		}
	}

	i = 1;
	elements[0].classList.add('green');
	current = elements[i];
	last.classList.remove('green');
	
}

let showLastEl = document.getElementById("show-last").onclick = function(){
	
	for (let item = 0; item < elements.length; item++){
		if (elements[item].classList.contains('green')){
			elements[item].classList.remove('green');
			
		}
	}
	last = document.querySelector("#main-list li:last-child");
	i = last;
	
	last.classList.add('green');
	elements[0].classList.remove('green');
	//current = last;
	
}

let showNextEl = document.getElementById("show-next").onclick = function(){
	
	last = document.querySelector("#main-list li:last-child");
	if (elements[i] == undefined || last == undefined){

		i = 0;
		last.classList.remove('green');
	}
	elements[i].classList.add('green');
	
	k = i - 1;
	i++;
	
	elements[k].classList.remove('green');
	
}

// let showPreviousEl = document.getElementById("show-previous").onclick = function(current){
// 	console.log(elements[i]);
// 	last = elements[elements.length -1];
// 	i--;
// 	if (elements[i] == undefined){
// 		elements[i] = last;
// 	}
// }
let addElement = document.getElementById("add").onclick = function(){
	let li = document.createElement("li");
	li.style.background = "pink";
	let textForLi = document.createTextNode("New li");
	li.appendChild(textForLi);
	document.getElementById("main-list").appendChild(li);	
}

let remove = document.getElementById("remove").onclick = function(){
	let list = document.getElementById("main-list");
	let last1 = document.querySelector("#main-list li:last-child");
	last1.remove();
}
let addToBegin = document.getElementById("add-begin").onclick = function(){
	let li = document.createElement("li");
	li.style.background = "violet";
	let firstEl = document.querySelector("#main-list li:first-child");
	let textForLi = document.createTextNode("New first li");
	li.appendChild(textForLi);
	document.getElementById("main-list").insertBefore(li, firstEl);
}