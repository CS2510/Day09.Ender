/** The final scene in our game */
class DeadScene extends Scene {
  constructor() {
      super("black")
      
      let scoreGameObject = new ScoreGameObject()
      this.gameObjects.push(scoreGameObject)

      let deathTextGameObject = new DeathTextGameObject()
      this.gameObjects.push(deathTextGameObject)

      let endSceneGameObject = new EndSceneGameObject()
      this.gameObjects.push(endSceneGameObject)
  }
}
