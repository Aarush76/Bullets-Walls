var bullet, wall, speed, weight,thickness,damage;

function setup() {
  createCanvas(1000,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(900,200,thickness,height/2);
  wall.shapecolor = color(80,80,80);
  
  bullet.depth = wall.depth;
  bullet.depth = wall.depth + 1;
}

function draw() {
  background("black");  

  bullet.collide(wall);

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage < 10){
    wall.shapeColor ="green";
  }
  
  if(damage > 10){
    wall.shapeColor = "red";
  }

}

console.log(damage);

drawSprites();
}

function hasCollided (bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
    return false;
}




















