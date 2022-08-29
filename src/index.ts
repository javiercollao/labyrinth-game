import 'phaser'
import makeResizeGame from './modules/config/rezise-game'
import gameOptions from './modules/config/gameOptions'
import BootGame from './modules/scenes/boot-game'
import PlayGame from './modules/scenes/play-game'


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

 