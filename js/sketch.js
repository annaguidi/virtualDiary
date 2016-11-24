var photo;
var desk1;
var desk2;
var desk3;
var deskIcon;
var felixIcon;
var lunchIcon;
var instance = 0;
var resize = 100;
var resizeA = 400;
var resizeB = 300;
var picArray = [];

function preload() {
  //icons to click on
  photo = loadImage("assets/marino.gif");
  felixIcon = loadImage("assets/Felix.png");
  lunchIcon = loadImage("assets/lunchIcon.png");
  deskIcon = loadImage("assets/deskIcon.png");

  //the desk
  desk1 = loadImage("assets/20161119_001531.jpg");
  desk2 = loadImage("assets/20161119_114337.jpg");
  desk3 = loadImage("assets/20161122_125345.jpg");

  // for (var i = 0; i < easerCount; i++) {
  //   var e = new Easer(width / 2, height / 2, diameter, easing);
  //   easer.push(e);
  // }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  photo.resize(resize, resize);
  felixIcon.resize(resize, resize);
  lunchIcon.resize(resize, resize);
  deskIcon.resize(resize, resize);
  desk1.resize(resizeA, resizeB);
  desk2.resize(resizeA, resizeB);
  desk3.resize(resizeA, resizeB);
}

function draw() {
  if (instance == 0) {
    whiteRect();

    photo1 = felixIcon.get(0, 0, photo.width, photo.height);
    var felix = new Pic(photo1, 300, 300);
    felix.render();

    photo2 = lunchIcon.get(0, 0, photo.width, photo.height);
    var lunch = new Pic(photo2, 400, 400);
    lunch.render();

    photo3 = deskIcon.get(0, 0, photo.width, photo.height);
    var desk = new Pic(photo3, 500, 500);
    desk.render();

    crop = photo.get(0, 0, photo.width, photo.height);
    var pic1 = new Pic(crop, 200, 200);
    pic1.render();
  } else if (instance == 1) {
    whiteRect();
  } else if (instance == 2) {
    whiteRect();
    console.log("scenario 2");
  } else if (instance == 3) {
    whiteRect();
    console.log("scenario 3");
  } else if (instance == 4){
    whiteRect();

    //several pictures, not just one
    d1 = desk1.get(0, 0, desk1.width, desk1.height);
    var desk100 = new Img(d1, 0, 0);
    desk100.render();
    // console.log("scenario 4");
  } else if (instance == 5) {
    whiteRect();
    console.log("scenario 5");
  } else if (instance == 6) {
    whiteRect();
    console.log("scenario 6");
  } else if (instance == 7) {
    whiteRect();
    console.log("scenario 7");
  } else {
    whiteRect();
    console.log("scenario 8");
  }
}

function mousePressed() {
  if (abs(dist(mouseX, mouseY, 300, 300)) <= (resize/2)) {
    instance = 2;
    console.log(instance);
  } else if (abs(dist(mouseX, mouseY, 400, 400)) <= (resize/2)) {
    instance = 3;
    console.log(instance);
  } else if (abs(dist(mouseX, mouseY, 500, 500)) <= (resize/2)) {
    instance = 4;
    console.log(instance);
  } else if (abs(dist(mouseX, mouseY, 200, 200)) <= (resize/2)) {
    instance = 1;
    console.log(instance);
  }
}

function Img(image, xpos, ypos) {
  this.image = image;
  this.x = xpos;
  this.y = ypos;
}

function Pic(image, xpos, ypos) {
  this.image = image;
  this.x = xpos;
  this.y = ypos;
}

function whiteRect() {
  push();
  fill(255);
  createCanvas(windowWidth, windowHeight);
  pop();
}

function ReturnButton() {
  push();
  pop();
}

Pic.prototype.render = function() {
  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y);
  pop();
}

Img.prototype.render = function() {
  image(this.image, this.x, this.y);
}
