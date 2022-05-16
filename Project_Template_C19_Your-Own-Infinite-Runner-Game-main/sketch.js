var greencar , greencarImg,CarsGroup;
var redcar , redcarImg;
var road,roadImg;
var invisibleGround;
var score;

var gameState= "play";



function preload(){
greencarImg = loadImage("green car.png");
redcarImg = loadImage("red_car.png");
roadImg = loadImage("road1.jpg");
carcrash = loadSound("CarCrash.mp3"); 
}

function setup() {
 createCanvas(600, 600);
 road =createSprite(300,300);
 road.addImage("road",roadImg);
 road.velocityY= 2;
 CarsGroup=new Group();
 redcar = createSprite(200,200,10,10);
 redcar.addImage("redcar",redcarImg)
 redcar.scale=0.2;
 invisibleGround =createSprite(300,605,600,5);
 invisibleGround.depth=redcar.depth;

}

function draw() {
    background(0);
    if(gameState=="play")
    
    
    redcar.collide(invisibleGround);
        
    if(keyDown("up_arrow")){
           redcar.y = redcar.y-30;
       }
       if(keyDown("right_arrow")){
           redcar.x = redcar.x+5;
       }
       if(keyDown("left_arrow")){
           redcar.x = redcar.x-5;
       }
       redcar.velocityY=redcar.velocityY+1;
   
       if(road.y > 400){
           road.y = 300
         }
       
       spawnCars();
       if(CarsGroup.isTouching(redcar)||redcar.y>600){
           gameState="end";

    }
    drawSprites();
    if(gameState=="end"){
        stroke("black");
        fill("red");
        textSize(30);
        text("Game Over",225,300);
        greencar.setVelocityXEach(0);
        greencar.setLifetimeEach(-1);
        redcar.setVelocityXEach(0);
        redcar.setLifetimeEach(-1);
        carcrash.playSound();
    }
}
function spawnCars(){
    if(frameCount%240==0){
    var greencar=createSprite(50);
    greencar.x=Math.round(random(550,200));
    greencar.addImage(greencarImg);
    greencar.velocityY=+5;
    greencar.scale=0.1;
    greencar.lifetime=800;
    CarsGroup.add(greencar);
    greencar.debug=false;

 }
}
