import C from '../consts'

export default class Body extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene) {
    super(scene, C.game.width / 2, 0, C.body.imageKey)
    this.setOrigin(0.5, 0.0).setScale(C.body.scale).setDepth(C.body.depth)
    scene.add.existing(this)
  }
}
