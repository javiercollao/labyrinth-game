import Phaser from 'phaser'
// Funciones
import makeResizeGame from './src/modules/config/rezise-game'
import gameOptions from './src/modules/config/gameOptions'
// Escenas
import BootGame from './src/modules/scenes/boot-game'
import PlayGame from './src/modules/scenes/play-game'


window.onload = function () {
  const gameConfig = { 
    parent: 'root',
    pixelArt: true,
    backgroundColor: '#00679b', 
    width: gameOptions.boardSize.cols * gameOptions.tileSize,
    height: gameOptions.boardSize.rows * gameOptions.tileSize,
    scene: [BootGame, PlayGame]
  }

  const game = new Phaser.Game(gameConfig)
  window.focus()
  const resizeGame = makeResizeGame(game)
  resizeGame()
  window.addEventListener('resize', resizeGame)
}