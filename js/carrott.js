let img;
let w,h;

let veg = [];
let index = 0;

function preload(){

	veg[0] = loadImage("https://i.imgur.com/bDcAZkZ.png");
	veg[1] = loadImage("https://i.imgur.com/GKE3MUM.png");
	veg[2] = loadImage("https://i.imgur.com/D9yyVk1.png");
	

	img = loadImage("https://i.imgur.com/NxSgvxi.png");

}

function setup() {
	background(147, 39, 143);

	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);

	img.resize(width/3, width/3);

	w = width/2;
	h = height/2;
	
}

function draw() {
	background(147, 39, 143, 10);
	// background(255, 10);

	
	// translate(mouseX, mouseY);
	w = sin(frameCount*.0005)*width;
	h = sin(frameCount*.0005)*height;

	if(mouseX > 0){
		w = mouseX;
		h = mouseY;
	}

	push();

	translate(w, h);

	rotate(radians(frameCount*.08));
	image(veg[index], 0, 0);
	pop();

	push();
	translate(width/2, height/2);
	image(img, 0, 0);
	pop();
	
}

function mousePressed() {
  index = index + 1;
  
  if(index == veg.length){
   	index = 0; 
  }
}