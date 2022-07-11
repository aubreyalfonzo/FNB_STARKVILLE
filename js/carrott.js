let img, img2;
let w,h;

function preload(){
	
	img = loadImage("https://i.imgur.com/Peql1fE.png");
	img2 = loadImage("https://i.imgur.com/NxSgvxi.png");
}

function setup() {
	background(147, 39, 143);

	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);

	img2.resize(width/3, width/3);

	w = width/2;
	h = width/2;
	
}

function draw() {
	background(147, 39, 143, 5);

	
	// translate(mouseX, mouseY);
	w = sin(frameCount*.0005)*width;
	h = sin(frameCount*.0005)*height;

	push();
	translate(w, h);

	// if(mouseX > -1){
	// 	w = mouseX;
	// 	h = mouseY;
	// }

	rotate(radians(frameCount*.5));
	image(img, 0, 0);
	pop();

	push();
	translate(width/2, height/2);
	image(img2, 0, 0);
	pop();
	
}