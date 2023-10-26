function preload() {

}

function setup() {
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();

    tint_color =" ";
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }

function draw() {

}

function take_snapshot() {
    save(" Filter.png");
}




function modelLoaded() {
console.log('PoseNet is initialized');
}

function draw() {
image(video,0,0,300,300);
}

function take_snapshot() {
save('MyFilterImage.png')
}

function gotPoses(results) {
if(results.length > 0)
{
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
}
