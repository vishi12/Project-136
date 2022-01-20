status = "";

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(400,300)
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
    item_name = document.getElementById("item_name").value;
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    video.speed(1);
    video.volume(0);
}

function draw(){
    image(video, 0, 0, 400, 300);
}