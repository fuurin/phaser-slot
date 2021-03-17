import 'phaser'
import '../css/index.css'

import C from './consts'
import Main from './scenes/main'

const config: Phaser.Types.Core.GameConfig = {
  width: C.game.width,
  height: C.game.height,
  type: Phaser.AUTO,
  parent: 'game',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game'
  },
  scene: Main
}

window.addEventListener('load', () => {
  new Phaser.Game(config)
})
