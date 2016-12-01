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
var myFont;
var title = "Virtual Diary Project"
var description = "The Virtual Diary Project was originally meant to be a small package of daily, fundamental experiences I could share with my friends to show them my lifestyle in the US. Its purpose is to take on a perspective that cannot be conveyed through conventional social media: the banal, the day-to-day, the routine, the authentic. I have picked six daily motifs that provide routine and a certain stability to my day's schedule. To add some meaningful context, I have juxtaposed several images of that motif on the same page. Enjoy!"

function preload() {
  //icons to click on
  photo = loadImage("assets/marino.gif");
  felixIcon = loadImage("assets/Felix.png");
  lunchIcon = loadImage("assets/lunchIcon.png");
  deskIcon = loadImage("assets/deskIcon.png");
  patrickIcon = loadImage("assets/patrickIcon.png");
  boardIcon = loadImage("assets/boardIcon.png");
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
  var resize = windowWidth/15;
  var resizeA = 400;
  var resizeB = 300;
  //resizing Icons
  photo.resize(resize, resize);
  felixIcon.resize(resize, resize);
  lunchIcon.resize(resize, resize);
  deskIcon.resize(resize, resize);
  patrickIcon.resize(resize, resize);
  boardIcon.resize(resize, resize);

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
}

function draw() {
  if (instance == 0) {
    whiteRect();
    //thse are the icons
    photo1 = felixIcon.get(0, 0, photo.width, photo.height);
    var felix = new Pic(photo1, width/5.5, 5*height/6);
    felix.render();

    photo2 = lunchIcon.get(0, 0, photo.width, photo.height);
    var lunch = new Pic(photo2, width/3, height/2.5);
    lunch.render();

    photo3 = deskIcon.get(0, 0, photo.width, photo.height);
    var desk = new Pic(photo3, 2*width/3, 4*height/5);
    desk.render();

    crop = photo.get(0, 0, photo.width, photo.height);
    var pic1 = new Pic(crop, width/4, height/5);
    pic1.render();

    photo4 = patrickIcon.get(0, 0, photo.width, photo.height);
    var patrick = new Pic(photo4, width/2, height/2);
    patrick.render();

    photo5 = boardIcon.get(0, 0, photo.width, photo.height);
    var board = new Pic(photo5, 4.5*width/6, height/5.5);
    board.render();

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

    // nu1 = campus1.get(0, 0, campus1.width, campus1.height);
    // var campus100 = new Img(nu1, 0, 0);
    // campus100.render();
    //
    // nu2 = campus2.get(0, 0, campus2.width, campus2.height);
    // var campus200 = new Img(nu2, resizeA + 10, 0);
    // campus200.render();
    //
    // nu3 = campus3.get(0, 0, campus3.width, campus3.height);
    // var campus300 = new Img(nu3, 2*(resizeA + 10), 0);
    // campus300.render();
    //
    // nu4 = campus4.get(0, 0, campus4.width, campus4.height);
    // var campus400 = new Img(nu4, 3*(resizeA + 10), 0);
    // campus400.render();
    //
    // nu5 = campus5.get(0, 0, campus5.width, campus5.height);
    // var campus500 = new Img(nu5, 0, resizeB + 10);
    // campus500.render();
    //
    // nu6 = campus6.get(0, 0, campus6.width, campus6.height);
    // var campus600 = new Img(nu6, resizeA + 10, resizeB + 10);
    // campus600.render();
    //
    // nu7 = campus7.get(0, 0, campus7.width, campus7.height);
    // var campus700 = new Img(nu7, 2*(resizeA + 10), resizeB + 10);
    // campus700.render();
    //
    // nu8 = campus8.get(0, 0, campus8.width, campus8.height);
    // var campus800 = new Img(nu8, 3*(resizeA + 10), resizeB + 10);
    // campus800.render();

    ReturnButton();
  } else if (instance == 2) {
    whiteRect();

    fe1 = felix1.get(0, 0, felix1.width, felix1.height);
    var felix100 = new Img(fe1, 0, 0);
    felix100.render();

    fe2 = felix2.get(0, 0, felix2.width, felix2.height);
    var felix200 = new Img(fe2, resizeA + 10, 0);
    felix200.render();

    ReturnButton();
  } else if (instance == 3) {
    whiteRect();

    f1 = food1.get(0, 0, food1.width, food1.height);
    var food100 = new Img(f1, 0, 0);
    food100.render();

    f2 = food2.get(0, 0, food2.width, food2.height);
    var food200 = new Img(f2, resizeA + 10, 0);
    food200.render();

    ReturnButton();
  } else if (instance == 4){
    whiteRect();
    //several pictures, not just one
    d1 = desk1.get(0, 0, desk1.width, desk1.height);
    var desk100 = new Img(d1, 0, 0);
    desk100.render();

    d2 = desk2.get(0, 0, desk2.width, desk2.height);
    var desk200 = new Img(d2, resizeA + 10, 0);
    desk200.render();

    d3 = desk3.get(0, 0, desk3.width, desk3.height);
    var desk300 = new Img(d3, 2*(resizeA + 10), 0);
    desk300.render();

    d4 = desk4.get(0, 0, desk4.width, desk4.height);
    var desk400 = new Img(d4, 3*(resizeA + 10), 0);
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
    } else if (abs(dist(mouseX, mouseY, width/2, height/2)) <= (50)) {
      instance = 0;
      console.log(instance);
    }
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

//will be replaced with a nice icon or text
function ReturnButton() {
  push();
  rectMode(CENTER);
  fill(100,0,100);
  rect(width/2, height/2, 50, 50);
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

function introText() {
  push();
  // noStroke();
  // fill('#ED225D,0.99');
  // rect(width/5, height/2, 3*width/4, height/3);
  fill('#ED225D');
  textFont(myFont);
  textSize(26);
  textAlign(CENTER);
  text(description, width/5, height/2, 3*width/4, height/3);
  pop();
}
