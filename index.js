import Phaser from 'phaser'

import BootGame from './src/modules/boot-game'
import makeResizeGame from './src/modules/rezise-game'
import PlayGame from './src/modules/play-game'

window.onload = function () {
  const gameConfig = {
    backgroundColor: 0xff0000,
    height: 640,
    scene: [BootGame, PlayGame],
    width: 480
  }

  const game = new Phaser.Game(gameConfig)
  window.focus()
  const resizeGame = makeResizeGame(game)
  resizeGame()
  window.addEventListener('resize', resizeGame)
}