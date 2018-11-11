

function Boxer(pos) {

  neck = new Segment(30,20);
  shoulders = new Segment(30, 20);
  upperLeft = new Segment(100, 20, '#FF0000');
  upperRight = new Segment(100, 20, '#00FF00');
  leftFore = new Segment(100, 20, '#0000FF');
  rightFore = new Segment(100, 20, '#000000');
  hips = new Segment(20, 20, '#00000F');
  leftThigh = new Segment(100, 20);
  rightThigh = new Segment(100, 20);
  leftCalf = new Segment(100, 20);
  rightCalf = new Segment(100, 20);
  upperBack = new Segment(80, 20);
  lowerBack = new Segment(60, 20);
  leftFoot = new Segment(25, 20);
  rightFoot = new Segment(25, 20);
  head = new Ball(30);
  leftGlove = new Ball(20);
  rightGlove = new Ball();



    init(0.05);
}

Boxer.prototype.draw = function(context, pos) {
  if(pos === 'left'){
    upperBack.x = 200;
    upperBack.y = canvas.height / 4;

    lowerBack.x = upperBack.getPin().x;
    lowerBack.y = upperBack.getPin().y;
  } else {
    upperBack.x = 500;
    upperBack.y = canvas.height / 4;

    lowerBack.x = upperBack.getPin().x;
    lowerBack.y = upperBack.getPin().y;
  }
  neck.draw(context);
  head.draw(context);
  upperBack.draw(context);
  lowerBack.draw(context);
  upperLeft.draw(context);
  leftFore.draw(context);
  shoulders.draw(context, true);
  upperRight.draw(context);
  rightFore.draw(context);
  leftThigh.draw(context);
  leftCalf.draw(context);
  hips.draw(context);
  rightThigh.draw(context);
  rightCalf.draw(context);
  leftFoot.draw(context);
  rightFoot.draw(context);
}
