.play_button
{
    width: 130px;
    font-size: 25px;
}

Canvas
{
    border:5px soild white;
    border-radius:20px;
}
song = "";
leftWristx = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload()
{
    song = loadSound(music.mp3);

}


function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    Image(video, 0, 600, 500);
}

function play()
{  
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded() {
    console.log('PosNet is Initialized');

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("leftWristX = " + leftWristX +"leftWristY= " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.Y;
        console.log("rightWristX = " + rightWristX +"leftWristY= " + rightWristY);
    }
}