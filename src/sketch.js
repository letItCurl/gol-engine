
// we need to gen this !
var world = [[1,0,1],[1,0,1],[1,0,1]]

const placeCell = function(x,y){
    fill(0);
    rect(x*30, y*30, 30, 30);
}

function setup() {
	createCanvas(900, 900);
}

function draw() {
	background(255);
	for (var x = 1; x < width; x += width / 30) {
		for (var y = 1; y < height; y += height / 30) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
            line(0, y, width, y);
            
		}
    }
    stroke(0);
	strokeWeight(4);
    line(width, 0, width, height);
    line(0, height, width, height);
    strokeWeight(0);
    
    for(let x = 0; x<world.length; x++){
        for(let y = 0; y<world.length; y++){
            if(world[y][x]===1){
                placeCell(x,y)
            }
        }
    }

}

