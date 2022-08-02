import Phaser from 'phaser'
// Funciones
import makeResizeGame from './src/modules/config/rezise-game'
import gameOptions from './src/modules/config/gameOptions'
// Escenas
import BootGame from './src/modules/scenes/boot-game'
import PlayGame from './src/modules/scenes/play-game'


window.onload = function () {
  const gameConfig = {
    backgroundColor: 0xecf0f1,
    height: gameOptions.boardSize.rows * (gameOptions.tileSize +
      gameOptions.tileSpacing) + gameOptions.tileSpacing,
    scene: [BootGame, PlayGame],
    width: gameOptions.boardSize.cols * (gameOptions.tileSize +
      gameOptions.tileSpacing) + gameOptions.tileSpacing
  }

  const game = new Phaser.Game(gameConfig)
  window.focus()
  const resizeGame = makeResizeGame(game)
  resizeGame()
  window.addEventListener('resize', resizeGame)
}