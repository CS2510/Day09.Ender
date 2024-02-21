class DeathTestComponent extends Component{
  update() {
    //Check to see if we have a collision
    //First, find the other object
    let circleGameObject = currentScene.gameObjects.find(go => go.constructor.name == "CircleGameObject")

    if (Collisions.isCollision(circleGameObject.transform, this.parent.transform, 50, 50))
      currentScene = new DeadScene()
  }
 
}