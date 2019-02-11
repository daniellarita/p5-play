// simple circle drawing canvas

// function setup() {
//   createCanvas(640, 480, WEBGL);
// }

// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }

// playing around with WEBGL for more complex images

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // noLoop(); // draw() will only be called once
}

const drawShapesOnce = (x,y,z, shapeX, shapeY, shapeZ) => {
  const shapes = [box, torus, plane, sphere, ellipsoid, cone, cylinder]
  for (let i=0;i<shapes.length;i++){
    shapes[i](shapeX);
    translate(x,y,z);
  }
  // translate(-250,-200,100)
  // box(shapeX,shapeY,shapeZ);
  // translate(x,y,z);
  // torus(shapeX, shapeY);
  // translate(x,y,z);
  // plane(shapeX,shapeY);
  // translate(x,y,z);
  // sphere(shapeX);
  // translate(x,y,z);
  // ellipsoid(shapeX, shapeY);
  // translate(x,y,z);
  // cone(shapeX,shapeY);
  // translate(x,y,z);
  // cylinder(shapeX,shapeY);
}

function draw(){
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  // ellipse(mouseX, mouseY, 80, 80);
  drawShapesOnce(100,100,-100,40,30,40);
}