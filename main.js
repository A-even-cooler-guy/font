function setup(){
    video=createCapture(VIDEO);
    video.size(800,800);
    canvas=createCanvas(600,400);
    canvas.position(900,600);
   posenet=ml5.poseNet(video, modelLoaded);
   posenet.on("pose",getPoses);
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
}
}