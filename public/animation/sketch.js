let lineX = [];
let strokeW = [];
let lineL = [];
let lineXSize = 0;
let lineSpeed = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSL);	
	background(353, 67, 0);
	
	for(let i = 0; i < round(windowWidth / 9); i=i+1) {
		lineX[i] = random() * windowWidth;
		lineXSize = lineXSize + 1;
		strokeW[i] = round(18 * random());
		lineL[i] = round(50 * random() + 20);
		lineSpeed[i] = random(0.1, 1) * (round(random(1)) === 0 ? -1 : 1)
	}
}

function draw() {
	clear();	
	fill(353, 63, 43 + 10)	
	
	for (let i = 0; i < lineXSize; i++) {
		stroke(353, 63, lineL[i]);	
		
		for (let y =0; y < windowHeight; y = y + 20) {			
			strokeWeight(noise(y / (windowHeight / 3) + frameCount / 200) * 20)
			point(lineX[i] + sin(TWO_PI * y), y);
		}
		
		if (strokeW[i] < 8) {
			strokeW[i] = strokeW[i] + 1;
		}
		
		lineX[i] = lineX[i] + lineSpeed[i]
	}	
}
