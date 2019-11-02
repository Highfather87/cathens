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

let caTips = ["Moricaty likes money", "Moricaty is a figure of light", "Moricaty is on fire",
"Moricaty is on fire", "Moricaty likes money",  "Moricaty loves lemons","Moricaty loves lemons", "We hide where the first motor cycle waits", 
"Moricaty was once a graffiti sprayer", "Moricaty likes money", "Moricaty likes money", "Moricaty was once a graffiti sprayer",  "Moricaty is on fire",
"Moricaty likes money", "Moricaty likes to ride his no.1 non-real motor bike","Moricaty is on fire", "Moricaty likes money", "Moricaty is on fire",
"Moricaty is on fire", "Moricaty is on fire", "We hide where the first motor cycle waits", "Moricaty is on fire"];

function setup() {

 //setup video properties

 var videoConstraints = {
audio: false,
video: {
  facingMode: "environment",
  //frameRate:15
}


 }; 

navigator.mediaDevices.getUserMedia(videoConstraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.

  createCanvas(640, 550); /*made canvas taller, was 320 x 240 before */
  video = createCapture(videoConstraints);
  video.elt.setAttribute('playsinline', '');
  video.size(320, 240);

  //media






//mediaEnds


  // Create a YOLO method
  yolo = ml5.YOLO(video, startDetecting);

  // Hide the original video
  video.hide();
  status = select('#status');
  catus = select('#catus');
  clue = select('#clue');
}


function draw() {
  image(video, 0, 0, width, height);
  for (let i = 0; i < objects.length; i++) {
    

    noStroke();
    fill(0, 255, 0);
    text(objects[i].label, objects[i].x * width, objects[i].y * height - 5);
    noFill();
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);

    

    if (objects[i].label === "cat")
    {


      //starts
 

    //ends
    
    var ranTip = Math.floor(Math.random() * 21);

    //var ranTip = 0;

    fill(255, 0, 0);

    //var ranTip = setTimeout(caTipz(), 5000);
    text(caTips[ranTip], objects[i].x * width, objects[i].y * height - 5 );
    catus.html('You found a cat!!! find another');
    //catus.html('Find another one for secret clues');
    //text((caTips[(random(0,10))]), 400, 300);
    console.log(caTips[3]);
    //console.log((caTips[(random(0,10))]));
		if(clue.html == '') {
		
			clue.html(caTips[ranTip]);
		} else {
			setTimeout(clue.html(caTips[ranTip]),15000);
		}
    }
    
  }
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