import C from '../consts'

export default class FrameButtonStop extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene) {
    super(scene, C.game.width / 2, C.frameButtonStop.y, C.frameButtonStop.imageKey)
    this.setOrigin(0.5, 0).setScale(C.frameButtonStop.scaleW, C.frameButtonStop.scaleH).setDepth(C.frameButtonStop.depth)
    scene.add.existing(this)
  }
}
