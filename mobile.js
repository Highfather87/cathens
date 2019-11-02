let classifier;
let video;
let currentWord;
let currentIndex = 0;
let isPlaying = false;
let catus;

//put the target words here...
const words = ['keyboard','wig','toilet seat','paper towel','restraunt','television','cab','barbershop','drum','truck','banana'];

//debug
//const words = ['mask','restraunt'];

let oneWordRes = "loading..";
let confidence_score = "";


//——————— Below is p5.js————————————————————————————


function setup() {

  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(20);

  //Setting up the video....
  var constraints = {
    audio: false,
    video: {
      //Change this part to swap the camera
      facingMode: "user",
      //facingMode: "environment",
      frameRate: 15
    }
  };
  video = createCapture(constraints);
  video.elt.setAttribute('playsinline', '');
  video.hide();
  //When model is ready, call modelReady();
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);

}




function modelReady() {
  // Change the status of the model once its ready
  oneWordRes = "Press Start";
  select('#status').html('Model Loaded, press Start Game');
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.classify(gotResult);
}
// When we get a result
function gotResult(err, results) {
  // The results are in an array ordered by confidence.
  // Get the first result string
   // objects = results;
const result = results[0].label;


    if (result === "cat")
    {

  
  image(video, 0, 0, windowWidth, windowHeight);
  textSize(120);
  fill(10, 10, 255);
  textFont('monospace');
  textAlign(CENTER);
 // text(oneWordRes, windowWidth/2, windowHeight/2);
  //text(confidence_score + "%", windowWidth/2, windowHeight/2 + 150);


    

      //starts
    noStroke();
    fill(0, 255, 0);
    text(results[i].label, results[i].x * width, results[i].y * height - 5);
    noFill();
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(results[i].x * width, results[i].y * height, results[i].w * width, results[i].h * height);

    //ends
    
    var ranTip = Math.floor(Math.random() * 21);

    //var ranTip = 0;

    fill(255, 0, 0);

    //var ranTip = setTimeout(caTipz(), 5000);
    //text(caTips[0], objects[i].x * width, objects[i].y * height - 5 );
    catus.html('You found a cat!!!');
    //catus.html('Find another one for secret clues');
    //text((caTips[(random(0,10))]), 400, 300);
    console.log(caTips[3]);
    //console.log((caTips[(random(0,10))]));

    
  
}



    //detect();
    console.log(results);

    }

  


