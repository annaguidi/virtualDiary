var photo;
var instance = 0;
var anna;

function preload() {
  photo = loadImage("assets/marino.gif");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  var icon = new Anna(40, 500);
  anna = icon;
}

function draw() {
  photo.resize(80, 80);
  crop = photo.get(0, 0, photo.width, photo.height);

  // could be replaced by 'case'
  if (instance == 0) {
    console.log("intro");
    anna.render(0);
  } else if (instance == 1) {
    //this is the line
    anna.render(1, 200, 200, .02, .04);
  } else if (instance == 2) {
    console.log("scenario 2")
  } else if (instance == 3) {
    console.log("scenario 3")
  } else if (instance == 4){
    console.log("scenario 4")
  } else if (instance == 5) {
    console.log("scenario 5")
  } else if (instance == 6) {
    console.log("scenario 6")
  } else if (instance == 7) {
    console.log("scenario 7")
  } else {
    console.log("scenario 8")
  }
}

function keyPressed() {
  instance ++;
  console.log(instance);
}


function Anna(xpos, ypos) {
  this.x = xpos;
  this.y = ypos;
  this.d = 5;
  this.clr = color(0);
}

// function Image(image, px, py) {
//   this.x = px;
//   this.y = py;
// }

Anna.prototype.render = function(position, newx, newy, easex, easey) {
  //console.log("the instance is:" + instance);
  fill(this.clr);
  ellipse(this.x, this.y, this.d, this.d);
  var dx = newx - this.x;
  var dy = newy - this.y;

  if (position == 1) {
    console.log("HI ANNA" + dx + "!" + dy);
    if (abs(dx) > 45.0 || abs(dy) > 45.0) {
      console.log("please work");
      this.x += dx * easex;
      this.y += dy * easey;
    } else {
      // make this more programmatic
      push();
      //the image border
      stroke('#E66491');
      strokeWeight(7);
      noFill();
      ellipse(200, 200, 80, 80);
      pop();
      //this is the image
      push();
      imageMode(CENTER);
      image(crop, 200, 200);
      pop();
    }
  }
}
