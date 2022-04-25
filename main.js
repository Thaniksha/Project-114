mustachex=0;
mustachey=0;

function preload(){
    mustache=loadImage('https://i.postimg.cc/BQRpD61s/pngfind-com-realistic-mustache-png-145189.png')
}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center()
    chitti=createCapture(VIDEO);
    chitti.size(400,300);
    chitti.hide();

  poseNet=ml5.poseNet(chitti,modelLoaded);
    poseNet.on('pose',getPoses);
}


function draw(){
    image(chitti,0,0,400,300)
    image(mustache,mustachex,mustachey,40,25)
    }

function getPoses(results){
    if(results.length>0){
        console.log(results)
        mustachex=results[0].pose.nose.x-18;
        mustachey=results[0].pose.nose.y+5;
    }
}   

function modelLoaded(){
    console.log("Posenet is initialized successfully")
}
