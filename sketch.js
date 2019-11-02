// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Real time Object Detection using YOLO and p5.js
=== */

let video;
let yolo;
let status;
let objects = [];
let catus;

let caTips = ["We hide where the first motor cycle waits", "we love cat food", "We hide where the first motor cycle waits", 
"houses suck for us", "touch us", "We hide where the first motor cycle waits", "We hide where the first motor cycle waits",  "we love mice", "we hate dogs", "we love to gand up if you threaten us",
"touch us", "give us water", "We hide where the first motor cycle waits", "touch us", "give us water", "give us water", "We hide where the first motor cycle waits",  "we love pink", "puss puss", "Morikati lives"];

function setup() {

 //setup video properties

 var videoConstraints = {
audio: false,
video: {
  facingMode: "environment",
  frameRate:15
}

 }; 



  createCanvas(640, 550); /*made canvas taller, was 320 x 240 before */
  video = createCapture(videoConstraints);
  video.size(320, 240);


  // Create a YOLO method
  yolo = ml5.YOLO(video, startDetecting);

  // Hide the original video
  video.hide();
  status = select('#status');
  catus = select('#catus');
}

function draw() {
  image(video, 0, 0, width, height);
  for (let i = 0; i < objects.length; i++) {
    /*

    noStroke();
    fill(0, 255, 0);
    text(objects[i].label, objects[i].x * width, objects[i].y * height - 5);
    noFill();
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);

    */

    if (objects[i].label === "cat")
    {


      //starts
    noStroke();
    fill(0, 255, 0);
    text(objects[i].label, objects[i].x * width, objects[i].y * height - 5);
    noFill();
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);

    //ends
    
    var ranTip = Math.floor(Math.random() * 21);

    //var ranTip = 0;

    fill(255, 0, 0);

    //var ranTip = setTimeout(caTipz(), 5000);
    text(caTips[ranTip], objects[i].x * width, objects[i].y * height - 5 );
    catus.html('You found a cat!!!');
    //catus.html('Find another one for secret clues');
    //text((caTips[(random(0,10))]), 400, 300);
    console.log(caTips[3]);
    //console.log((caTips[(random(0,10))]));

    }
    
  }
}



function caTipz () {
  var ranTip = Math.floor(Math.random() * 10);;
  return ranTip;
} 

function startDetecting() {
  status.html('Model loaded!');
  detect();

}

/*does the prediction*/

function detect() {
  yolo.detect(function(err, results) {
    objects = results;
    detect();
    console.log(results);

    /* for (let l=0; l<objects.length; i++) 
    { if (object[l].label ="cat")
    { write the cat tips onto the canvas, write into an html element}

    }
    */
    
    
  });
}