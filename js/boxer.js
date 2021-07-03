function getCycle(cycle) {
    return angle = (Math.sin(cycle) * 90 + 90) * Math.PI / 180;
}

function init(cycleValue) {
    var angle = getCycle(cycleValue);
    upperBack.rotation = angle * 1.05;
    lowerBack.rotation = upperBack.rotation + (getCycle(cycleValue) * 3.8);
    lowerBack.x = upperBack.getPin().x;
    console.log('lowerBack', lowerBack.x);
    lowerBack.y = upperBack.getPin().y;
    shoulders.rotation = getCycle(cycleValue) * -.1;
    neck.rotation = getCycle(cycleValue) * -.75;
    shoulders.x = upperBack.x - (shoulders.width / 2);
    shoulders.y = neck.y = upperBack.y;
    neck.x = shoulders.x + (shoulders.width / 2);
    // neck.y = shoulders.y;
    head.x = neck.x + head.radius / 1.4;
    head.y = neck.y / 1.7;
    upperLeft.rotation = getCycle(cycleValue) * .75;
    upperLeft.x = shoulders.getPin().x;
    upperLeft.y = shoulders.getPin().y;
    leftFore.x = upperLeft.getPin().x;
    leftFore.y = upperLeft.getPin().y;
    upperRight.rotation = getCycle(cycleValue) * 1.05;
    upperRight.x = shoulders.getPin().x - shoulders.width;
    upperRight.y = shoulders.getPin().y;
    rightFore.x = upperRight.getPin().x;
    rightFore.y = upperRight.getPin().y;
    hips.rotation = getCycle(cycleValue) * -.1;
    hips.x = lowerBack.getPin().x - (hips.width / 2);
    hips.y = lowerBack.getPin().y + (hips.height / 2);
    rightThigh.rotation = getCycle(cycleValue) * .95;
    rightCalf.rotation = getCycle(cycleValue) * 1.35;
    rightThigh.x = hips.getPin().x - hips.width;
    rightThigh.y = hips.getPin().y;
    rightCalf.x = rightThigh.getPin().x;
    rightCalf.y = rightThigh.getPin().y;
    rightFoot.x = rightCalf.getPin().x;
    rightFoot.y = rightCalf.getPin().y;
    leftThigh.rotation = getCycle(cycleValue) * .55;
    leftCalf.rotation = getCycle(cycleValue) * 1.10;
    leftThigh.x = hips.getPin().x;
    leftThigh.y = hips.getPin().y;
    leftCalf.x = leftThigh.getPin().x;
    leftCalf.y = leftThigh.getPin().y;
    leftFoot.x = leftCalf.getPin().x;
    leftFoot.y = leftCalf.getPin().y;
  //  console.log(rightFore.rotation);
}

function Boxer(cycle) {
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

Boxer.prototype.draw = function(context) {
  // if(pos === 'left'){
    upperBack.x = 100;
    upperBack.y = canvas.height / 4 - 20;

    lowerBack.x = upperBack.getPin().x;
    lowerBack.y = upperBack.getPin().y;

  // } else {
  //   upperBack.x = 500;
  //   upperBack.y = canvas.height / 4;

  //   lowerBack.x = upperBack.getPin().x;
  //   lowerBack.y = upperBack.getPin().y;

  // }

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
