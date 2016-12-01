var photo;
var desk1;
var desk2;
var desk3;
var desk4;
var food1;
var food2;
var felix1;
var felix2;
var campus1;
var campus2;
var campus3;
var campus4;
var deskIcon;
var felixIcon;
var lunchIcon;
var patrickIcon;
var boardIcon;
var instance = 0;
var picArray = [];
var dotArray = [];
var numDots = 55;
var myFont;
var title = "Virtual Diary Project"
var description = "The Virtual Diary Project was originally meant to be a small package of daily, fundamental experiences I could share with my friends to show them my lifestyle in the US. Its purpose is to take on a perspective that cannot be conveyed through conventional social media: the banal, the day-to-day, the routine, the authentic. I have picked six daily motifs that provide routine and a certain stability to my day's schedule. To add some meaningful context, I have juxtaposed several images of that motif on the same page. Enjoy!"
var felix;
var lunch;
var desk;
var pic1;
var patrick;
var board;
var move = 60;
var campus100;
var campus200;
var campus300;
var campus400;
var campus500;
var campus600;
var campus700;
var campus800;
var felix100;
var felix200;
var food100;
var food200;
var desk100;
var desk200;
var desk300;
var desk400;

function preload() {
  //icons to click on
  photo = loadImage("assets/test7.png");
  felixIcon = loadImage("assets/test2.png");
  lunchIcon = loadImage("assets/test3.png");
  deskIcon = loadImage("assets/test4.png");
  patrickIcon = loadImage("assets/test5.png");
  boardIcon = loadImage("assets/test6.png");
  //the desk
  desk1 = loadImage("assets/20161119_001531.jpg");
  desk2 = loadImage("assets/20161119_114337.jpg");
  desk3 = loadImage("assets/20161122_125345.jpg");
  desk4 = loadImage("assets/20161118_001612.jpg");

  food1 = loadImage("assets/20161121_115735.jpg");
  food2 = loadImage("assets/20161121_205016.jpg");

  felix1 = loadImage("assets/20161119_122413.jpg");
  felix2 = loadImage("assets/20161122_153336.jpg");

  // campus1 = loadImage("assets/20161116_124905.jpg");
  // campus2 = loadImage("assets/20161115_105544.jpg");
  // campus3 = loadImage("assets/20161115_105607.jpg");
  // campus4 = loadImage("assets/20161114_130343.jpg");
  // campus5 = loadImage("assets/20161113_153944.jpg");
  // campus6 = loadImage("assets/20161113_153856.jpg");
  // campus7 = loadImage("assets/20161108_152951.jpg");
  // campus8 = loadImage("assets/20161107_163306.jpg");
  myFont = loadFont("assets/MODERNE_SANS.ttf");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  //resize variables
  var resize = windowWidth/12;
  var resizeA = 400;
  var resizeB = 300;
  //resizing Icons
  photo.resize(resize, resize);
  felixIcon.resize(resize, resize);
  lunchIcon.resize(resize, resize);
  deskIcon.resize(resize, resize);
  patrickIcon.resize(resize, resize);
  boardIcon.resize(resize, resize);

  //resizing album images
  desk1.resize(resizeA, resizeB);
  desk2.resize(resizeA, resizeB);
  desk3.resize(resizeA, resizeB);
  desk4.resize(resizeA, resizeB);
  food1.resize(resizeA, resizeB);
  food2.resize(resizeA, resizeB);
  felix1.resize(resizeA, resizeB);
  felix2.resize(resizeA, resizeB);
  // campus1.resize(resizeA, resizeB);
  // campus2.resize(resizeA, resizeB);
  // campus3.resize(resizeA, resizeB);
  // campus4.resize(resizeA, resizeB);
  // campus5.resize(resizeA, resizeB);
  // campus6.resize(resizeA, resizeB);
  // campus7.resize(resizeA, resizeB);
  // campus8.resize(resizeA, resizeB);
  photo1 = felixIcon.get(0, 0, photo.width, photo.height);
  felix = new Pic(photo1, width/2.5, 5*height/6);

  photo2 = lunchIcon.get(0, 0, photo.width, photo.height);
  lunch = new Pic(photo2, width/3, height/2.5);

  photo3 = deskIcon.get(0, 0, photo.width, photo.height);
  desk = new Pic(photo3, .8*width, .65*height);

  crop = photo.get(0, 0, photo.width, photo.height);
  pic1 = new Pic(crop, width/2, height/5);

  photo4 = patrickIcon.get(0, 0, photo.width, photo.height);
  patrick = new Pic(photo4, .6*width, height/2);

  photo5 = boardIcon.get(0, 0, photo.width, photo.height);
  board = new Pic(photo5, 4.5*width/6, height/5.5);

  // nu1 = campus1.get(0, 0, campus1.width, campus1.height);
  // campus100 = new Img(nu1, 0, 0);

  // nu2 = campus2.get(0, 0, campus2.width, campus2.height);
  // campus200 = new Img(nu2, resizeA + 10, 0);

  // nu3 = campus3.get(0, 0, campus3.width, campus3.height);
  // campus300 = new Img(nu3, 2*(resizeA + 10), 0);

  // nu4 = campus4.get(0, 0, campus4.width, campus4.height);
  // campus400 = new Img(nu4, 3*(resizeA + 10), 0);

  // nu5 = campus5.get(0, 0, campus5.width, campus5.height);
  // campus500 = new Img(nu5, 0, resizeB + 10);

  // nu6 = campus6.get(0, 0, campus6.width, campus6.height);
  // campus600 = new Img(nu6, resizeA + 10, resizeB + 10);

  // nu7 = campus7.get(0, 0, campus7.width, campus7.height);
  // campus700 = new Img(nu7, 2*(resizeA + 10), resizeB + 10);

  // nu8 = campus8.get(0, 0, campus8.width, campus8.height);
  // campus800 = new Img(nu8, 3*(resizeA + 10), resizeB + 10);

  fe1 = felix1.get(0, 0, felix1.width, felix1.height);
  felix100 = new Img(fe1, 0, 0);

  fe2 = felix2.get(0, 0, felix2.width, felix2.height);
  felix200 = new Img(fe2, resizeA + 10, 0);

  f1 = food1.get(0, 0, food1.width, food1.height);
  food100 = new Img(f1, 0, 0);

  f2 = food2.get(0, 0, food2.width, food2.height);
  food200 = new Img(f2, resizeA + 10, 0);

  d1 = desk1.get(0, 0, desk1.width, desk1.height);
  desk100 = new Img(d1, 0, 0);

  d2 = desk2.get(0, 0, desk2.width, desk2.height);
  desk200 = new Img(d2, resizeA + 10, 0);

  d3 = desk3.get(0, 0, desk3.width, desk3.height);
  desk300 = new Img(d3, 2*(resizeA + 10), 0);

  d4 = desk4.get(0, 0, desk4.width, desk4.height);
  desk400 = new Img(d4, 3*(resizeA + 10), 0);

  for (var i = 0; i < numDots; i++) {
    var d = new Dot();
    dotArray.push(d);
  }
}

function draw() {
  if (instance == 0) {
    whiteRect();

    for (var i = 0; i < numDots; i++) {
      dotArray[i].render();
    }
    //thse are the icons, can be made more programmatic
    felix.render(width/2.5 + move, width/2.5 - move, 5*height/6 + move, 5*height/6 - move);

    lunch.render(width/3 + move, width/3 - move, height/2.5 + move, height/2.5 - move);

    desk.render(.8*width + move, .8*width - move, .65*height + move, .65*height - move);

    pic1.render(width/2 + move, width/2 - move, height/5 + move, height/5 - move);

    patrick.render(.6*width + move, .6*width - move, height/2 + move, height/2 - move);

    board.render(4.5*width/6 + move, 4.5*width/6 - move, height/5.5 + move, height/5.5 - move);

    introText();
    // var iconAarray = [photo1, photo2, photo3, photo4, photo5, crop];
    // amountOfPics = iconAarray.length;
    //
    // for (var i = 0; i < amountOfPics; i++) {
    //   i.toFixed;
    //   var icons = new Pic(iconArray[i], 300 + i*100, 310 + i*100);
    //   icons.render();
    // }
  } else if (instance == 1) {
    whiteRect();

    // campus100.render();
    //
    // campus200.render();
    //
    // campus300.render();
    //
    // campus400.render();
    //
    // campus500.render();
    //
    // campus600.render();
    //
    // campus700.render();
    //
    // campus800.render();

    ReturnButton();
  } else if (instance == 2) {
    whiteRect();

    felix100.render();

    felix200.render();

    ReturnButton();
  } else if (instance == 3) {
    whiteRect();

    food100.render();

    food200.render();

    ReturnButton();
  } else if (instance == 4){
    whiteRect();
    //several pictures, not just one

    desk100.render();

    desk200.render();

    desk300.render();

    desk400.render();
    // console.log("scenario 4");
    ReturnButton();
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
  if (instance == 0) {
    //none of this works or is relevant right now
    if (abs(dist(mouseX, mouseY, 300, 300)) <= (windowWidth/15/2)) {
      instance = 2;
      console.log(instance);
    } else if (abs(dist(mouseX, mouseY, 400, 400)) <= (windowWidth/15/2)) {
      instance = 3;
      console.log(instance);
    } else if (abs(dist(mouseX, mouseY, 500, 500)) <= (windowWidth/15/2)) {
      instance = 4;
      console.log(instance);
    } else if (abs(dist(mouseX, mouseY, 200, 200)) <= (windowWidth/15/2)) {
      instance = 1;
      console.log(instance);
    }
  } else if (abs(dist(mouseX, mouseY, width/2, height/2)) <= (50)) {
    instance = 0;
    console.log(instance);
  }
}

function Img(image, xpos, ypos) {
  this.image = image;
  this.x = xpos;
  this.y = ypos;
}

//this is for the icons
function Pic(image, xpos, ypos) {
  this.image = image;
  this.x = xpos;
  this.y = ypos;
  this.xSpeed = random(-.5, .5);
  this.ySpeed = random(-.5, .5);
}

function Dot() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.c = color('rgba(50, 50, 50, 0.55)');
  this.r = 5;
}

function whiteRect() {
  push();
  fill(255);
  createCanvas(windowWidth, windowHeight);
  pop();
}

//will be replaced with a nice icon or text
function ReturnButton() {
  push();
  rectMode(CENTER);
  fill(100,0,100);
  rect(width/2, height/2, 50, 50);
  pop();
}

//to show icons
Pic.prototype.render = function(dx1, dx2, dy1, dy2) {
  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y);
  pop();

  this.x += this.xSpeed;
  this.y += this.ySpeed;

  if (this.x > dx1 || this.x < dx2) {
    this.xSpeed *= -1;
  }

  if (this.y > dy1 || this.y < dy2) {
    this.ySpeed *= -1;
  }
}

Img.prototype.render = function() {
  image(this.image, this.x, this.y);
}

Dot.prototype.render = function() {
  push();
  noStroke();
  fill(this.c);
  ellipse(this.x, this.y, this.r, this.r);
  pop();
}

function introText() {
  push();
  // noStroke();
  // fill('#959EA8');
  // rect(windowWidth-windowWidth, windowHeight-windowHeight, width/4, height)
  fill('#ED225D');
  textFont(myFont);
  textSize(26);
  text(description, 15, 50, width/4);
  pop();
}
