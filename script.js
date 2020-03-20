let elements = document.querySelectorAll('#main-list li');
let i;

let 
current,
first,
last;



let showFirstEl = document.getElementById("show-first").onclick = function () {
	for (let i = 0; i < elements.length; i++) {
		if (elements[i].classList.contains('green')) {
			elements[i].classList.remove('green');
		}
	}
	first = document.getElementById('main-list').firstElementChild;
	first.classList.add('green');
	i = 0;
	current = i;
	
}

let showLastEl = document.getElementById("show-last").onclick = function () {
	for (let i = 0; i < elements.length; i++) {
		if (elements[i].classList.contains('green')) {
			elements[i].classList.remove('green');
		}
	}
	last = document.getElementById('main-list').lastElementChild;
	last.classList.add('green');
	current = last;
}

let showNextEl = document.getElementById("show-next").onclick = function () {
	i = current;
	i++;
	elements = document.querySelectorAll('#main-list li');
	for (let i = 0; i < elements.length; i++) {
		if (elements[i].classList.contains('green')) {
			elements[i].classList.remove('green');
		}
	}

	elements[0].classList.add('green');
	if (elements[0] != elements[i]){
		elements[0].classList.remove('green');
	}
	
	if ( elements[i] == undefined && elements[i] == null){
		i = 0;
	}
	
	elements[i].classList.add('green');
	current = i;
	
	//elements[i].nextElementSibling;
	
}

let showPreviousEl = document.getElementById("show-previous").onclick = function(){
	i = current;
	i--;
	if (elements[i] === undefined){
		i = elements.length - 1;
	}
	current = i;


	elements = document.querySelectorAll('#main-list li');
	for (let i = 0; i < elements.length; i++) {
		if (elements[i].classList.contains('green')) {
			elements[i].classList.remove('green');
		}
	}
	elements[i].classList.add('green');
	

}
let addElement = document.getElementById("add").onclick = function () {
	let li = document.createElement("li");
	//li.style.background = "pink";
	i = current;
	let textForLi = document.createTextNode("New li");
	li.appendChild(textForLi);
	current = i;
	document.getElementById("main-list").appendChild(li);
	
	elements = document.querySelectorAll('#main-list li');

	for (let i = 0; i < elements.length; i++) {
		if (elements[i].classList.contains('green')) {
			elements[i].classList.remove('green');
		}
	}
	
	elements[elements.length - 1].classList.add('green');
}

let remove = document.getElementById("remove").onclick = function () {
	let list = document.getElementById("main-list");
	let last1 = document.querySelector("#main-list li:last-child");
	last1.remove();
}
let addToBegin = document.getElementById("add-begin").onclick = function () {
	let li = document.createElement("li");
	//li.style.background = "violet";
	let firstEl = document.querySelector("#main-list li:first-child");
	let textForLi = document.createTextNode("New first li");
	li.appendChild(textForLi);
	document.getElementById("main-list").insertBefore(li, firstEl);

	elements = document.querySelectorAll('#main-list li');

	for (let i = 0; i < elements.length; i++) {
		if (elements[i].classList.contains('green')) {
			elements[i].classList.remove('green');
		}
	}
	
	elements[0].classList.add('green');
	
}