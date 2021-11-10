let title,titleImg;

function preload(){
    titleImg = loadImage("Images/titleImg.png");


}
function setup(){
    var storyCanvas = createCanvas(displayWidth/1/1.1,displayHeight/1/1.15);
     title = createSprite(displayWidth-822,displayHeight-802,50,50)
     title.addImage(titleImg);
}

function draw(){
    background("black");



drawSprites();

}



