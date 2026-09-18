var x = 0;
function plus(){
	x = x + 1;
	document.getElementById("mario").innerHTML = x;
	if(x == 10){
		document.getElementById("message").innerHTML = "Ok, now can you get 25?"
	}
		if(x == 25){
		document.getElementById("message").innerHTML = "Mad kudos, but can you reach 50?"
	}
	if(x == 50){
		document.getElementById("message").innerHTML = "Impossible... no one has ever gone this far! But surely you can't reach 100... right?"
	}
	if(x == 100){
		document.getElementById("message").innerHTML = "Ok, I have one last challenge for you... get to 150..."
	}
	if(x == 150){
		document.getElementById("message").innerHTML = "Ok, that's it, you win. I'd give you a trophy if I had one, but if you type in Winner into the bonus box, you'll get something special!"
	}
	if(x == 200){
		document.getElementById("message").innerHTML = "Turns out, I do have a trophy! Thanks for sticking around! Type in Trophy into the bonus box to view it anytime!"
	}
	if(x == 200){
		document.getElementById("marionew").src = "win.png"
	}
	if(x == 225){
		document.getElementById("message").innerHTML = "Whoa, is that Luigi? What's he doing out here? Put Luigi into the bonus box to bring him back if he gets lost again."
	}
	if(x == 225){
		document.getElementById("marionew").src = "luigi64.png"
	}
	if(x == 255){
		document.getElementById("message").innerHTML = "Wow! If you've made it this far, then surely your fingers have gotten an intense workout! You deserve a break. Type Ring into the bonus box whenever you want one!"
	}
	if(x == 255){
		document.getElementById("marionew").src = "ring.png"
	}
}

var x = 0;
function minus(){
	x = x - 1;
	document.getElementById("mario").innerHTML = x;
	if(x == -10){
		document.getElementById("message").innerHTML = "Uh, I said get to POSITIVE 10, but good job regardless..."
	}
		if(x == -25){
		document.getElementById("message").innerHTML = "Uh, you sure you wanna go this far?"
	}
	if(x == -50){
		document.getElementById("message").innerHTML = "Dude, turn back."
	}
	if(x == -100){
		document.getElementById("message").innerHTML = "There is nothing over here, turn around, you're wasting time."
	}
	if(x == -150){
		document.getElementById("message").innerHTML = "Welp, clearly theres no stopping you, have fun going backwards... If you dare..."
	}
	if(x == -200){
		document.getElementById("marionew").src = "sonic.png"
	}
	if(x == -200){
		document.getElementById("message").innerHTML = "I warned you, but you deserve a reward. Type in Sonic into the bonus box! And you can type in Scary there too to bring back this abomonation."
	}
	if(x == -225){
		document.getElementById("marionew").src = "sheep.gif"
	}
	if(x == -225){
		document.getElementById("message").innerHTML = "Oh dear... you've gone in too far! Looks like you found this sheep guy. It seems that typing Sheep into the bonus box can call him at your will."
	}
	if(x == -255){
		document.getElementById("marionew").src = "steve.png"
	}
	if(x == -255){
		document.getElementById("message").innerHTML = "Whoa, what's our friend Steve doing down here? Whatever, now you can type Steve into the bonus box to see him whenever."
	}

}

var x = 0;
function reset(){
	x = x = 0;
	document.getElementById("mario").innerHTML = x;
	if(x == 0){
		document.getElementById("message").innerHTML = "Welcome back!"
	}
	if(x == 0){
		document.getElementById("marionew").src = "mario64.png"
	}
}

function submit(){
	var y = document.getElementById("input1").value;
	document.getElementById("bonus").innerHTML = y
	if(y == "Winner"){
		document.getElementById("bonus").innerHTML = "You are a super player!"
	}
	if(y == "Sonic"){
		document.getElementById("bonus").innerHTML = "Gotta Go Fast!"
	}
	if(y == "Scary"){
		document.getElementById("marionew").src = "sonic.png"
	}
		if(y == "Scary"){
		document.getElementById("bonus").innerHTML = "Uh... Meow?"
	}
		if(y == "Trophy"){
		document.getElementById("marionew").src = "win.png"
	}
		if(y == "Trophy"){
		document.getElementById("bonus").innerHTML = "Congratulations!"
	}
	if(y == "Sheep"){
		document.getElementById("marionew").src = "sheep.gif"
	}
		if(y == "Sheep"){
		document.getElementById("bonus").innerHTML = "Baa, these be some fire beats."
	}
	if(y == "Luigi"){
		document.getElementById("marionew").src = "luigi64.png"
	}
		if(y == "Luigi"){
		document.getElementById("bonus").innerHTML = "Itsa me! Super Luigi on the Nintendo 64!"
	}
	if(y == "Ring"){
		document.getElementById("marionew").src = "ring.png"
	}
		if(y == "Ring"){
		document.getElementById("bonus").innerHTML = "Fantastic!"
	}
	if(y == "Steve"){
		document.getElementById("marionew").src = "steve.png"
	}
		if(y == "Steve"){
		document.getElementById("bonus").innerHTML = "MINECRAFT"
	}
}