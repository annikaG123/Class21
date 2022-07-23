const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;
var engine, world



function preload() {

}

function setup() {
	createCanvas(1990, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(50, 380, 20, ball_options)
	World.add(world, ball)
	groundobj = new Ground(width / 2, 670, width, 20);
	leftside = new Ground(1100, 600, 20, 120);
	rightside = new Ground(1350, 600, 20, 120);

	Engine.run(engine);

	UPWARD()
	RIGHTWAY()
}


function draw() {
	rectMode(CENTER);
	background("black");
	groundobj.display();
	leftside.display();
	rightside.display();
	Engine.update(engine)
	ellipse(ball.position.x, ball.position.y, 30, 30,)

}

function UPWARD() {
	if (keyDown=== UP_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.85, y: 0 });
	}
}
function RIGHTWAY() {
	if (keyDown === RIGHT_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.85 })
	}

}



