leftWristX=0;
rightWristX=0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(580,100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw() {
    background('#808080');
    textSize(difference);
    fill("black");
    text("Vincent",50,300);
}

function modelLoaded() {
    console.log('PoseNet Is Initailized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX = rightWristX);
        document.getElementById("font_size").innerHTML = "Font size of the text will be =" + difference + "px";
    }
}