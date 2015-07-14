var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
//my drawing line will be in 5px

context.lineWidth = 1;
//this variable will be used to detect whether the mouse button is pressed or not
var down = false;



//e means events 
//offsetLeft returns the number of pixels that are on the left
//left side of the element.
//clientX returns the X coordinates of the mouse pointer.
//subtraction here signifies mouse position relative to the 
//canvas element so as to determine the point we want start from
//on th canvas
var draw = function(e){

	xPos = e.clientX - canvas.offsetLeft;
	yPos = e.clientY - canvas.offsetTop;

	if(down == true){

		context.lineTo(xPos, yPos);
		context.stroke();
	}

}





//draw function will be called when the mouse is moved
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', function(){
	down = false
});
//when mouse is down, this will run
canvas.addEventListener('mousedown', function(){

	down = true;
	context.beginPath();
	context.moveTo(xPos, yPos);
	canvas.addEventListener('mousemove', draw);

});



var changeColor = function(color){
	context.strokeStyle = color;
}

var clearCanvas = function(){
	context.clearRect(0,0,canvas.width,canvas.height)
}

var changeThickness = function(x){
context.lineWidth = x;

}