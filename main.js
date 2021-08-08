nose_x = 0;
nose_y = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/hjpbWNHy/Mustache.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPosses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPosses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x - 30;
        nose_y = results[0].pose.nose.y - 25;
        console.log("Position of Lips is : x= " + nose_x + " y= " + nose_y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(mustache, nose_x, nose_y, 100, 100);
}

function take_snapshot() {
    save("My Funny Face.png");
}
