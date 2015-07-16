var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//my drawing line will be in 1px

context.lineWidth = 1;

//this variable will be used to detect whether the mouse button is pressed or not
 down = false;



//offsetLeft returns the number of pixels that are on the left
//left side of the element.
// e.pageX holds the position of the mouse relative to the document 
//this.offsetLeft holds the distance of the canvas’s upper left corner from the closest 

/*subtraction here signifies mouse position relative to the 
* canvas element so as to determine the point we want start from
* on th canvas*/


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
  //location.reload();
  console.log('gfffff');
	context.lineWidth = x;
}


var fillCanvas = function(){
	context.fillRect(0,0,canvas.width,canvas.height);

};
var btn = document.getElementById('rectangle')


btn.addEventListener('click', function(){
  //an object to used to store the info of the drawing
  rect = {};
  drag = false;

  canvas.addEventListener('mousedown', mousedown);
  canvas.addEventListener('mousemove', mousemove);
  canvas.addEventListener('mouseup', mouseup);
});



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
	

var clickOpen =function(){
  document.getElementById('file').click();
};

document.getElementById('file').addEventListener('change', function(e){
  var temp = URL.createObjectURL(e.target.files[0]);
  var image = new Image();
  image.src = temp;

  image.addEventListener('load', function(){
    context.drawImage(image, 0, 0)
  });

});



