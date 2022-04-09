var nin,ninimg
var jungle,jungleimg
var chao
var pyke,pykeimg
var PLAY=1
var OVER=2
var gamestate=PLAY 
var pontos=0
var pykeg;
var soundj
var soundp
var soundm
var gameeover,gameeoverimg
var go,goimg










function preload(){
jungleimg = loadImage('jg.jpg');
ninimg = loadAnimation('ninja1.png','ninja2.png','ninja3.png','ninja4.png','ninja5.png');
pykeimg = loadImage('kruger.png');
soundj = loadSound('Jump.mp3');
soundp = loadSound('POST.mp3');
soundm = loadSound('MORTE.mp3');
goimg = loadImage('reset.png');
gameeoverimg = loadImage('game over.png');
}

function setup() {
  createCanvas(600,400);
 pykeg = new Group()

  jungle = createSprite(300,200,600,400);
 jungle.addImage(jungleimg); 
 




 chao = createSprite(310,355,700,10);
 chao.visible=false;


 nin = createSprite(50,300,20,20);
 nin.addAnimation('running',ninimg);
 nin.scale=0.4;

  gameeover = createSprite(width/2,100,10,10)
  gameeover.addImage(gameeoverimg);
  gameeover.visible=false;
  gameeover.scale=0.3;

  go = createSprite(width/2,250,10,10);
  go.addImage(goimg);
  go.visible=false;
  go.scale=0.2;

}

function draw() {
 background('green');
 
 

 
 
 if(gamestate===PLAY){
    pontos=pontos+Math.round(frameRate()/60);
   // soundp.play();
  }

 
if(nin.isTouching(pykeg)){
  gamestate=OVER;
  //soundm.play();
}
  

 if(keyDown('space')&&nin.y>300){
   nin.velocityY= -18 ;
   //soundj.play();
   
 }else if(gamestate===OVER){
   nin.visible = false
    pykeg.setVelocityXEach(0);
    jungle.velocityX=-1;
    gameeover.visible=true
    go.visible=true
    jungle.velocityX=-1
    
  }
  if(mousePressedOver(go)){
    reset();
  }  
       

    

    nin.velocityY = nin.velocityY + 1 ;
    nin.collide(chao);
     jungle.velocityX=-3;
    if(jungle.x<0){
      jungle.x=jungle.width/2;
    }
     

     
    
     
        
  


 pike();

 
  drawSprites();
  fill('black');
  text('pontos:'+pontos,60,32);
 
 
 




}

function pike(){
if(frameCount%100===0){
  pyke = createSprite(660,300,10,10);
  pyke.velocityX=-4;
  
  pyke.addImage(pykeimg);

 

  pyke.lifetime=220;
  pyke.scale=0.2,8;
  pykeg.add(pyke)
}




}



function reset(){
gamestate=PLAY;
pykeg.destroyEach();
nin.changeAnimation('running');
pontos=0;
gameeover.visible=false;
go.visible=false;
nin.visible=true
}






