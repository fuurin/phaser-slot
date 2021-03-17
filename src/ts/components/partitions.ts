import C from '../consts'
import Icon from './icon'

export default class Partitions extends Phaser.GameObjects.Group {
  public static width = C.partition.imageW * C.partition.scale
  public static height = C.partition.imageH * C.partition.scale

  constructor(scene: Phaser.Scene) {
    super(scene)
    for (let p = 0; p < C.reel.num - 1; p++) {
      this.add(
        this.scene.add
          .image(C.body.window.left + Icon.width * (p + 1) + Partitions.width * p, C.body.window.top, C.partition.imageKey)
          .setOrigin(0, 0)
          .setScale(C.partition.scale)
      )
    }
  }
}
