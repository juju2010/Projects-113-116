NoseX=0;
NoseY=0;
function preload(){
    img=loadImage("https://postimg.cc/mPY66Mmg")
}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}

function modelLoaded(){
    console.log("model is loaded");
}

function draw(){
    image(video, 0, 0, 350, 350);
    image(img, NoseX, NoseY, 30, 30)
}

function takeSnapShot(){
    save("porestrips.png");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    NoseX=results[0].pose.nose.x-15;
    NoseY=results[0].pose.nose.y-15;
    console.log("nose x= "+results[0].pose.nose.x);
    console.log("nose y= "+results[0].pose.nose.y);
}
}

