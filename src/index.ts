import 'phaser'
import setStyles from './config/styles';
import makeResizeGame from './config/rezise-game';
import gameOptions from './config/gameOptions';
import BootGame from './scenes/boot-game';
import PlayGame from './scenes/play-game';
import Menu from './scenes/menu'

window.onload = function () {
  const gameConfig = { 
    parent: 'root',
    pixelArt: true,
    backgroundColor: '#00679b',
    fps:{
      target: 15,
      forceSetTimeOut: true,
      smoothStep: false,
      deltaHistory: 2,
      min: 1
    },
    physics: {
      default: "matter",
      matter: {
        debug: false,
    },
  },
    width: gameOptions.boardSize.cols * gameOptions.tileSize,
    height: (gameOptions.boardSize.rows * gameOptions.tileSize)-6,
    scene: [BootGame, Menu, PlayGame]
  }

  const body = document.body
  const game = new Phaser.Game(gameConfig)
  window.focus()
  const resizeGame = makeResizeGame(game)
  resizeGame()
  window.addEventListener('resize', resizeGame)
  setStyles(body)
}

 