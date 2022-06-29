var img="";
var model_status="";

function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    objectdetector=ml5.objectDetector('cocossd',modeloaded)
    document.getElementById("status").innerHTML="status: detecting objects";
}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("dog",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);

    fill("red");
    text("cat",320,120);
    noFill();
    stroke("red");
    rect(300,90,270,320);
}

function modeloaded(){
    console.log("model is loaded");
    model_status="true";
    objectdetector.detect(img,gotresults)
}

function gotresults(error,results){
    if(error){
        console.log(error)
    }

    else{
        console.log(results)
    }
}













