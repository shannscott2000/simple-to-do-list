var button = document.getElementById("enter");
var lis = document.getElementsByTagName("li");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}


// This adds the event listener to toggle the done class on the li's that already exist when the page is loaded
for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function() {
		this.classList.toggle("done");
	});
}

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value + " "));
		ul.appendChild(li);
	// This add the event listener to the newly created li's
		li.addEventListener("click", function(event) {
			this.classList.toggle("done");
		}, false);


		input.value = "";

	var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("delete"));
		li.appendChild(btn);
		console.log(lis);
// This event listener navigates up the parent tree two levels, 
// then deletes the child ("li") which is the parent of the delete button
	btn.addEventListener("click", function(event) {
			this.parentNode.parentNode.removeChild(this.parentNode);
		});
		
// Added a temporary click listener to this button to stop the click from bubbling up to the parent
		// btn.addEventListener("click", function(event) {
		// 	event.stopPropagation();
		// });
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
	
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


