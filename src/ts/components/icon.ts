import C from '../consts'
import Partitions from './partitions'

export default class Icon extends Phaser.GameObjects.Image {
  public static width = C.icon.imageW * C.icon.scale
  public static height = C.icon.imageH * C.icon.scale

  constructor(
    scene: Phaser.Scene,
    public reelPosition: number,
    public iconPosition: number, // 一番下が0
    public imageKeyPosition: number // 正の値が来る前提
  ) {
    super(
      scene,
      C.body.window.left + reelPosition * (Icon.width + Partitions.width),
      C.body.window.centerY + Icon.height * (Math.floor(C.reel.length / 2) - iconPosition),
      C.icon.imageKeys[reelPosition][imageKeyPosition]
    )
    this.setOrigin(0, 0.5).setScale(C.icon.scale).setDepth(C.icon.depth)
    scene.add.existing(this)
  }

  public move(speed: number): void {
    this.y += speed
  }
}
