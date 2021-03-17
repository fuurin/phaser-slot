import C from '../consts'

export default class Background extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene) {
    super(scene, 0, 0, C.background.imageKey)
    this.setOrigin(0, 0).setScale(C.background.scale).setDepth(C.background.depth)
    scene.add.existing(this)
  }
}
