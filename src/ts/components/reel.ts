import C from '../consts'
import Icon from './icon'
import AppearingIcons from '../classes/appearing_icons'
import ReelState from '../enums/reel_state'

export default class Reel extends Phaser.GameObjects.Group {
  public state: ReelState = ReelState.stop
  private bottomIconPosition = 0
  private gap = 0
  private onStopCallback: (Reel) => void

  constructor(scene: Phaser.Scene, public reelPosition: number) {
    super(scene)
    const iconPositionOffset = Math.floor(Math.random() * C.reel.length)
    for (let i = 0; i < C.reel.length; i++) {
      this.add(new Icon(scene, reelPosition, i, (iconPositionOffset + i) % C.reel.length))
    }
  }

  public onStop(callback: (Reel) => void): void {
    this.onStopCallback = callback
  }

  public appearingIcons(): AppearingIcons {
    const centerPosition = (this.bottomIconPosition + Math.floor(C.reel.length / 2)) % C.reel.length
    const children = this.getChildren()
    return new AppearingIcons(
      children[(centerPosition + 1) % C.reel.length] as Icon,
      children[centerPosition] as Icon,
      children[(centerPosition === 0 ? C.reel.length : centerPosition) - 1] as Icon
    )
  }

  public update(): void {
    switch (this.state) {
      case ReelState.moving:
        this.move()
        break
      case ReelState.slipping:
        this.slip()
        break
      default:
        return
    }
    this.turnover()
    if (this.state === ReelState.slipping && this.gap === 0) this.stop()
  }

  private move() {
    this.gap += C.reel.speed.move
    this.children.iterate((icon: Icon) => icon.move(C.reel.speed.move))
  }

  private slip() {
    this.gap += C.reel.speed.slip
    if (this.gap < Icon.height) {
      this.children.iterate((icon: Icon) => icon.move(C.reel.speed.slip))
    } else {
      const lastSpeed = C.reel.speed.slip - (this.gap - Icon.height)
      this.children.iterate((icon: Icon) => icon.move(lastSpeed))
      this.gap = Icon.height
    }
  }

  private turnover() {
    if (this.gap < Icon.height) return
    this.gap -= Icon.height
    const bottomIcon = this.getChildren()[this.bottomIconPosition] as Icon
    bottomIcon.y -= Icon.height * C.reel.length
    this.bottomIconPosition = (this.bottomIconPosition + 1) % C.reel.length
  }

  private stop() {
    this.state = ReelState.stop
    if (typeof this.onStopCallback !== 'undefined') this.onStopCallback(this)
  }
}
