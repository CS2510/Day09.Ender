 /** The main scene in our game */
 class MainScene extends Scene {
  constructor() {
      super("lightgray")

      let controllerGameObject = new ControllerGameObject();
      this.gameObjects.push(controllerGameObject)

      let circleGameObject = new CircleGameObject()
      this.gameObjects.push(circleGameObject)
      
      let scoreUpdaterGameObject = new ScoreUpdaterGameObject()
      this.gameObjects.push(scoreUpdaterGameObject)

      let scoreGameObject = new ScoreGameObject()
      this.gameObjects.push(scoreGameObject)

      let killerGameObject = new KillerGameObject()
      this.gameObjects.push(killerGameObject);
  }
}