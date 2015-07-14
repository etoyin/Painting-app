var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
//an object to used to store the info of the drawing
rect = {};
drag = false;
//my drawing line will be in 1px

context.lineWidth = 1;
//this variable will be used to detect whether the mouse button is pressed or not
 down = false;



//offsetLeft returns the number of pixels that are on the left
//left side of the element.
//pageX returns the X coordinates of the mouse pointer.
//subtraction here signifies mouse position relative to the 
//canvas element so as to determine the point we want start from
//on th canvas


var draw = function(e){

 
	xPos = e.pageX - this.offsetLeft;
	yPos = e.pageY - this.offsetTop;

	if(down == true){

		context.lineTo(xPos, yPos);
		context.stroke();
	};

};





//draw function will be called when the mouse is moved
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', function(){
	down = false;
}, false);
//when mouse is down, this will run
canvas.addEventListener('mousedown', function(){
 
      
	down = true;
	context.beginPath();
	context.moveTo(xPos, yPos);
	canvas.addEventListener('mousemove', draw);

}, false);



var changeColor = function(color){
	context.strokeStyle = color;
	context.fillStyle = color;
}

var reloadClear = function(){
	location.reload();
}

var clearCanvas = function(){
	context.clearRect(0,0,canvas.width,canvas.height)
}

var changeThickness = function(x){
	context.lineWidth = x
}


var fillCanvas = function(){
	context.fillRect(0,0,canvas.width,canvas.height);

};

var initRect = function() {
  canvas.addEventListener('mousedown', mousedown);
  canvas.addEventListener('mousemove', mousemove);
  canvas.addEventListener('mouseup', mouseup);

};
var mousedown = function(e) {
  rect.startX = e.pageX - this.offsetLeft;
  rect.startY = e.pageY- this.offsetTop;
  drag = true;
}


var mouseup = function(){
  drag = false;
};


var mousemove = function(e){
  if (drag == true){
    rect.w = (e.pageX  - this.offsetLeft) - rect.startX;
    rect.h = (e.pageY - this.offsetTop) - rect.startY ;
    //context.clearRect(0,0,canvas.width,canvas.height);
    drawRect();
  };
};


var drawRect = function() {
  context.fillRect(rect.startX, rect.startY, rect.w, rect.h);
};
	


	
		function drawEllipse(context, x, y, w, h, e){
			var x = Math.min(xPos, e.pageX);
					y = Math.min(yPos, e.pageY),
					w = Math.abs(xPos - e.pageX),
					h = Math.abs(yPos - e.pageY),



  			 	kappa = .5522848;
      		ox = (w / 2) * kappa, // control point offset horizontal
      		oy = (h / 2) * kappa, // control point offset vertical
      		xe = x + w,           // x-end
      		ye = y + h,           // y-end
      		xm = x + w / 2,       // x-middle
      		ym = y + h / 2;       // y-middle
 
  context.beginPath();
  context.moveTo(x, ym);
  context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  context.closePath();
  context.stroke();
};


