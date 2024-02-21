class Collisions{
  static isCollision(one, two, r1, r2){
    let distance = Math.sqrt((one.x-two.x)**2+(one.y-two.y)**2)
    if(distance < r1+r2) 
      return true;
    return false;
  }
}