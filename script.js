/**
 * Created by nhatnk on 4/26/17.
 */

class Hero{
  constructor(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed=speed;
  }
  getHeroElement(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }
  moveRight(){
    this.left += this.speed;
  }
  moveLeft(){
    this.left -= this.speed;
  }
  moveUp(){
    this.top -= this.speed;
  }
  moveDown(){
    this.top +=this.speed;
  }

}

let hero = new Hero('car.png', 15, 30, 150, 15);

function Right(){
  if(hero.left < 1000 - hero.size) {
    hero.moveRight();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
}

function Down(){
  if(hero.top<500 - hero.size){
    hero.moveDown();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
}

function Left(){
  if (hero.left>0){
    hero.moveLeft();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
}

function Top(){
  if (hero.top>0){
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
}

document.addEventListener('keydown',function (key) {
  if (key.keyCode == 39) {
    Right();
  }
})

document.addEventListener('keydown',function (key) {
  if (key.keyCode == 37) {
    Left();
  }
})

document.addEventListener('keydown',function (key) {
  if (key.keyCode == 38) {
    Top();
  }
})

document.addEventListener('keydown',function (key) {
  if (key.keyCode == 40) {
    Down();
  }
})
