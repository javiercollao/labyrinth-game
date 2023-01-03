import 'phaser'
import setStyles from './config/styles';
import makeResizeGame from './config/rezise-game';
import gameOptions from './config/gameOptions';
import BootGame from './models/boot-game';
import PlayGame from './models/play-game';
import Menu from './menu/menu'



window.onload = function () {
  const gameConfig = { 
    parent: 'root',
    pixelArt: true,
    backgroundColor: '#00679b',
    fps:{
      min: 100, 
      smoothStep:true
    },
    physics: {
      default: 'matter',
      matter: {
      }
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

 