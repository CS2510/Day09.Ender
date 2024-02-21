class ControllerGameObject extends GameObject{
  constructor(){
    super()
    this.addComponent(new ControllerComponent());
  }
}