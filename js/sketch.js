var photo;
var desk1;
var desk2;
var desk3;
var desk4;
var desk5;
var desk6;
//patrick
var patrick1;
var patrick2;
var patrick3;
var patrick4;
var patrick5;
var patrick6;
//food
var food1;
var food2;
var food3;
var food4;
var food5;
var food6;
var food7;
//felix
var felix1;
var felix2;
var felix3;
var felix4;
var felix5;
var felix6;
var felix7;
//campus
var campus1;
var campus2;
var campus3;
var campus4;
var deskIcon;
var felixIcon;
var lunchIcon;
var patrickIcon;
var boardIcon;
// TWO MOST IMPORTANT VARIABLES!
var instance = 0;
var photonumber = 1;
//
var picArray = [];
var numDots = 600;
var dotArray = [];
// description on first page
var myFont;
var title = "Virtual Diary Project"
var description = "The Virtual Diary Project was originally meant to be a small package of daily, fundamental experiences I could share with my friends to show them my lifestyle in the US. Its purpose is to take on a perspective that cannot be conveyed through conventional social media: the banal, the day-to-day, the routine, the authentic. I have picked six daily motifs that provide routine and a certain stability to my day's schedule. To add some meaningful context, I have juxtaposed several images of that motif on the same page. Enjoy!"
var felixTitle = "Felix - Cornerstore"
var foodTitle = "Lunch/Dinner"
var patrickTitle = "Patrick"
var deskTitle = "Desk"
var schoolTitle = "School"
var campusTitle = "Campus"
// icon variables
var felix;
var lunch;
var desk;
var pic1;
var patrick;
var board;
//restricts motion of icons
var move = 90;
//image variables
var campus100;
var campus200;
var campus300;
var campus400;
var campus500;
var campus600;
var campus700;
var campus800;
//felix
var felix100;
var felix200;
var felix300;
var felix400;
var felix500;
var felix600;
var felix700;
//food
var food100;
var food200;
var food300;
var food400;
var food500;
var food600;
var food700;
//desk
var desk100;
var desk200;
var desk300;
var desk400;
var desk500;
var desk600;
//patrick
var patrick100;
var patrick200;
var patrick300;
var patrick400;
var patrick500;
var patrick600;

function preload() {
  //icons to click on
  photo = loadImage("assets/test7.png");
  felixIcon = loadImage("assets/test8.png");
  lunchIcon = loadImage("assets/test9.png");
  deskIcon = loadImage("assets/test4.png");
  patrickIcon = loadImage("assets/test5.png");
  boardIcon = loadImage("assets/test6.png");
  //the desk
  desk1 = loadImage("assets/20161119_001531.jpg");
  desk2 = loadImage("assets/20161119_114337.jpg");
  desk3 = loadImage("assets/20161122_125345.jpg");
  desk4 = loadImage("assets/20161127_231726.jpg");
  desk5 = loadImage("assets/20161128_094255.jpg");
  desk6 = loadImage("assets/20161128_175727.jpg");

  food1 = loadImage("assets/food/20161121_115735.jpg");
  food2 = loadImage("assets/food/20161121_205016.jpg");
  food3 = loadImage("assets/food/20161130_124520.jpg");
  food4 = loadImage("assets/food/20161201_121108.jpg");
  food5 = loadImage("assets/food/20161202_114900.jpg");
  food6 = loadImage("assets/food/20161202_203806.jpg");
  food7 = loadImage("assets/food/20161206_114639.jpg");

  felix1 = loadImage("assets/felix/20161119_122413.jpg");
  felix2 = loadImage("assets/felix/20161122_153336.jpg");
  felix3 = loadImage("assets/felix/20161129_094416resampled3.jpg");
  felix4 = loadImage("assets/felix/20161201_101755.jpg");
  felix5 = loadImage("assets/felix/20161202_090943.jpg");
  felix6 = loadImage("assets/felix/20161202_173144.jpg");
  felix7 = loadImage("assets/felix/20161202_202045.jpg");

  patrick1 = loadImage("assets/patrick/20161128_201141.jpg");
  patrick2 = loadImage("assets/patrick/20161129_231605.jpg");
  patrick3 = loadImage("assets/patrick/20161203_202736.jpg");
  patrick4 = loadImage("assets/patrick/20161205_090149.jpg");
  patrick5 = loadImage("assets/patrick/20161206_194311.jpg");

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
  //this is the RADIUS of the icons and images!!!!!
  var resize = windowWidth/12;
  var resizeA = windowWidth/3;
  var resizeB = .45*windowHeight;

  var newPictureWidth = 0.75 * windowWidth;
  var scaleFactor = newPictureWidth / felix3.width;
  //resizing Icons
  photo.resize(resize, resize);
  felixIcon.resize(resize, resize);
  lunchIcon.resize(resize, resize);
  deskIcon.resize(resize, resize);
  patrickIcon.resize(resize, resize);
  boardIcon.resize(resize, resize);

  //resizing album images
  desk1.resize(scaleFactor * desk1.width, scaleFactor * desk1.height);
  desk2.resize(scaleFactor * desk2.width, scaleFactor * desk2.height);
  desk3.resize(scaleFactor * desk3.width, scaleFactor * desk3.height);
  desk4.resize(scaleFactor * desk4.width, scaleFactor * desk4.height);
  desk5.resize(scaleFactor * desk5.width, scaleFactor * desk5.height);
  desk6.resize(scaleFactor * desk6.width, scaleFactor * desk6.height);

  food1.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  food2.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  food3.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  food4.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  food5.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  food6.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  food7.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);

  felix1.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  felix2.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  felix3.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  felix4.resize(scaleFactor * felix4.width, scaleFactor * felix4.height);
  felix5.resize(scaleFactor * felix5.width, scaleFactor * felix5.height);
  felix6.resize(scaleFactor * felix6.width, scaleFactor * felix6.height);
  felix7.resize(scaleFactor * felix7.width, scaleFactor * felix7.height);

  patrick1.resize(scaleFactor * patrick1.width, scaleFactor * patrick1.height);
  patrick2.resize(scaleFactor * patrick2.width, scaleFactor * patrick2.height);
  patrick3.resize(scaleFactor * patrick3.width, scaleFactor * patrick3.height);
  patrick4.resize(scaleFactor * patrick4.width, scaleFactor * patrick4.height);
  patrick5.resize(scaleFactor * patrick5.width, scaleFactor * patrick5.height);

  // campus1.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  // campus2.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  // campus3.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  // campus4.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  // campus5.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  // campus6.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  // campus7.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);
  // campus8.resize(scaleFactor * felix3.width, scaleFactor * felix3.height);

  //creating icons
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

  //CREATING IMAGES

  // nu1 = campus1.get(0, 0, campus1.width, campus1.height);
  // campus100 = new Img(nu1, .1*width, .1*height);

  // nu2 = campus2.get(0, 0, campus2.width, campus2.height);
  // campus200 = new Img(nu2, .1*width, .1*height);

  // nu3 = campus3.get(0, 0, campus3.width, campus3.height);
  // campus300 = new Img(nu3, .1*width, .1*height);

  // nu4 = campus4.get(0, 0, campus4.width, campus4.height);
  // campus400 = new Img(nu4, .1*width, .1*height);

  // nu5 = campus5.get(0, 0, campus5.width, campus5.height);
  // campus500 = new Img(nu5, .1*width, .1*height);

  // nu6 = campus6.get(0, 0, campus6.width, campus6.height);
  // campus600 = new Img(nu6, .1*width, .1*height);

  // nu7 = campus7.get(0, 0, campus7.width, campus7.height);
  // campus700 = new Img(nu7, .1*width, .1*height);

  // nu8 = campus8.get(0, 0, campus8.width, campus8.height);
  // campus800 = new Img(nu8, .1*width, .1*height);

  fe1 = felix1.get(0, 0, felix1.width, felix1.height);
  felix100 = new Img(fe1, .1*width, .1*height);

  fe2 = felix2.get(0, 0, felix2.width, felix2.height);
  felix200 = new Img(fe2, .1*width, .1*height);

  fe3 = felix3.get(0, 0, felix3.width, felix3.height);
  felix300 = new Img(fe3, .1*width, .1*height);

  fe4 = felix4.get(0, 0, felix4.width, felix4.height);
  felix400 = new Img(fe4, .1*width, .1*height);

  fe5 = felix5.get(0, 0, felix5.width, felix5.height);
  felix500 = new Img(fe5, .1*width, .1*height);

  fe6 = felix6.get(0, 0, felix6.width, felix6.height);
  felix600 = new Img(fe6, .1*width, .1*height);

  fe7 = felix7.get(0, 0, felix7.width, felix7.height);
  felix700 = new Img(fe7, .1*width, .1*height);

  //food

  f1 = food1.get(0, 0, food1.width, food1.height);
  food100 = new Img(f1, .1*width, .1*height);

  f2 = food2.get(0, 0, food2.width, food2.height);
  food200 = new Img(f2, .1*width, .1*height);

  f3 = food3.get(0, 0, food3.width, food3.height);
  food300 = new Img(f3, .1*width, .1*height);

  f4 = food4.get(0, 0, food4.width, food4.height);
  food400 = new Img(f4, .1*width, .1*height);

  f5 = food5.get(0, 0, food5.width, food5.height);
  food500 = new Img(f5, .1*width, .1*height);

  f6 = food6.get(0, 0, food6.width, food6.height);
  food600 = new Img(f6, .1*width, .1*height);

  f7 = food7.get(0, 0, food7.width, food7.height);
  food700 = new Img(f7, .1*width, .1*height);


  //desk series
  d1 = desk1.get(0, 0, desk1.width, desk1.height);
  desk100 = new Img(d1, .1*width, .1*height);

  d2 = desk2.get(0, 0, desk2.width, desk2.height);
  desk200 = new Img(d2, .1*width, .1*height);

  d3 = desk3.get(0, 0, desk3.width, desk3.height);
  desk300 = new Img(d3, .1*width, .1*height);

  d4 = desk4.get(0, 0, desk4.width, desk4.height);
  desk400 = new Img(d4, .1*width, .1*height);

  d5 = desk5.get(0, 0, desk5.width, desk5.height);
  desk500 = new Img(d5, .1*width, .1*height);

  d6 = desk6.get(0, 0, desk6.width, desk6.height);
  desk600 = new Img(d6, .1*width, .1*height);

  //patrick series
  p1 = patrick1.get(0, 0, patrick1.width, patrick1.height);
  patrick100 = new Img(p1, .1*width, .1*height);

  p2 = patrick2.get(0, 0, patrick2.width, patrick2.height);
  patrick200 = new Img(p2, .1*width, .1*height);

  p3 = patrick3.get(0, 0, patrick3.width, patrick3.height);
  patrick300 = new Img(p3, .1*width, .1*height);

  p4 = patrick4.get(0, 0, patrick4.width, patrick4.height);
  patrick400 = new Img(p4, .1*width, .1*height);

  p5 = patrick5.get(0, 0, patrick5.width, patrick5.height);
  patrick500 = new Img(p5, .1*width, .1*height);

  //creating background for texture
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
    Line(felix, lunch, desk, pic1, patrick, board);
    //thse are the icons, can be made more programmatic
    felix.render(width/2.5 + move, width/2.5 - move, 5*height/6 + move, 5*height/6 - move);

    lunch.render(width/3 + move, width/3 - move, height/2.5 + move, height/2.5 - move);

    desk.render(.8*width + move, .8*width - move, .65*height + move, .65*height - move);

    pic1.render(width/2 + move, width/2 - move, height/5 + move, height/5 - move);

    patrick.render(.6*width + move, .6*width - move, height/2 + move, height/2 - move);

    board.render(4.5*width/6 + move, 4.5*width/6 - move, height/5.5 + move, height/5.5 - move);

    introText();
  } else if (instance == 1) {
    whiteRect();

    if (photonumber == 1) {
      // campus100.render();
    } else if (photonumber == 2) {
      // campus200.render();
    } else if (photonumber == 3) {
      // campus300.render();
    } else if (photonumber == 4 ){
      // campus400.render();
    } else if (photonumber == 5) {
      // campus500.render();
    } else if (photonumber == 6) {
      // campus600.render();
    } else if (photonumber == 7) {
      // campus700.render();
    } else if (photonumber == 8) {
      // campus800.render();
    }


    ReturnButton();
    Title(schoolTitle);
  } else if (instance == 2) {
    whiteRect();

    if (photonumber == 1) {
      felix100.render();
    } else if (photonumber == 2) {
      felix200.render();
    } else if (photonumber == 3) {
      felix300.render();
    } else if (photonumber == 4 ){
      felix400.render();
    } else if (photonumber == 5) {
      felix500.render();
    } else if (photonumber == 6) {
      felix600.render();
    } else if (photonumber == 7) {
      felix700.render();
    }

    ReturnButton();
    Title(felixTitle);
  } else if (instance == 3) {
    whiteRect();

    if (photonumber == 1) {
      food100.render();
    } else if (photonumber == 2) {
      food200.render();
    } else if (photonumber == 3) {
      food300.render();
    } else if (photonumber == 4 ){
      food400.render();
    } else if (photonumber == 5) {
      food500.render();
    } else if (photonumber == 6) {
      food600.render();
    } else if (photonumber == 7) {
      food700.render();
    }

    ReturnButton();
    Title(foodTitle);
  } else if (instance == 4){
    whiteRect();
    //several pictures, not just one

    desk100.render();

    desk200.render();

    desk300.render();

    desk400.render();

    desk500.render();

    desk600.render();
    // console.log("scenario 4");
    ReturnButton();
    Title(deskTitle);
  } else if (instance == 5) {
    whiteRect();

    if (photonumber == 1) {
      patrick100.render();
    } else if (photonumber == 2) {
      patrick200.render();
    } else if (photonumber == 3) {
      patrick300.render();
    } else if (photonumber == 4 ){
      patrick400.render();
    } else if (photonumber == 5) {
      patrick500.render();
    }

    ReturnButton();
    Title(patrickTitle);

    console.log("scenario 5");
  } else if (instance == 6) {
    whiteRect();

    ReturnButton();
    Title(campusTitle);

    console.log("scenario 6");
  }
}

function mousePressed() {
  if (instance == 0) {
    //none of this works or is relevant right now
    if (abs(dist(mouseX, mouseY, felix.x, felix.y)) <= (windowWidth/12/2)) {
      instance = 2;
      console.log(instance);
    } else if (abs(dist(mouseX, mouseY, lunch.x, lunch.y)) <= (windowWidth/12)) {
      instance = 3;
      console.log(instance);
    } else if (abs(dist(mouseX, mouseY, desk.x, desk.y)) <= (windowWidth/12/2)) {
      instance = 4;
      console.log(instance);
    } else if (abs(dist(mouseX, mouseY, pic1.x, pic1.y)) <= (windowWidth/12/2)) {
      instance = 1;
      console.log(instance);
    } else if (abs(dist(mouseX, mouseY, patrick.x, patrick.y)) <= (windowWidth/12/2)) {
      instance = 5;
      console.log(instance);
    } else if (abs(dist(mouseX, mouseY, board.x, board.y)) <= (windowWidth/12/2)) {
      instance = 6;
      console.log(instance);
    }
    //this is the temporary return button
  } else if (abs(dist(mouseX, mouseY, .9*width, .07*height)) <= (50)) {
    instance = 0;
    photonumber = 1;
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
  this.xSpeed = random(-1, 1);
  this.ySpeed = random(-1, 1);
}

function Dot() {
  this.x = random(0, width);
  this.y = random(0, height);
  var opacity = random(.2,.9);
  this.c = color('rgba(78,113,137, 0.55)');
  this.r = random(1,7);
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
  rect(.9*width, .07*height, 50, 50);
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
  // push();
  // imageMode(CENTER);
  image(this.image, this.x, this.y);
  // pop();
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
  fill('#ED225D');
  textFont(myFont);
  textSize(26);
  text(description, 15, 50, width/4);
  pop();
}

function Line(felix, lunch, desk, pic1, patrick, board) {
  push();
  noFill();
  beginShape();
  vertex(felix.x, felix.y);
  vertex(lunch.x, lunch.y);
  vertex(desk.x, desk.y);
  vertex(pic1.x, pic1.y);
  vertex(patrick.x, patrick.y);
  vertex(board.x, board.y);
  endShape();
  pop();

}

function Title(titolo) {
  push();
  textAlign(CENTER);
  textFont(myFont);
  textSize(26);
  text(titolo, width/2, .07*height);
  pop();
}

function keyPressed(){
  if (keyCode === UP_ARROW && photonumber < 7) {
   photonumber++;
 } else if (keyCode === DOWN_ARROW && photonumber > 1) {
   photonumber--;
  }
  return false; // prevent any default behaviour
}
