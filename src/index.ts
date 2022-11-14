import 'phaser'
import setStyles from './scripts/config/styles';
import makeResizeGame from './scripts/config/rezise-game';
import gameOptions from './scripts/config/gameOptions';
import BootGame from './scripts/scenes/boot-game';
import PlayGame from './scripts/scenes/play-game';



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
    scene: [BootGame, PlayGame]
  }

  const body = document.body
  const game = new Phaser.Game(gameConfig)
  window.focus()
  const resizeGame = makeResizeGame(game)
  resizeGame()
  window.addEventListener('resize', resizeGame)
  setStyles(body)
}

 