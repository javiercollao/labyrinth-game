import 'phaser'
import setStyles from './config/styles';
import makeResizeGame from './config/rezise-game';
import gameOptions from './config/gameOptions'; 
import Game from './game/Game';


window.onload = function () {
  const gameConfig = { 
    parent: 'root',
    pixelArt: true,
    backgroundColor: '#00679b',
    width: gameOptions.boardSize.cols * gameOptions.tileSize,
    height: (gameOptions.boardSize.rows * gameOptions.tileSize)-6,
    fps:{
      target: 12,
      forceSetTimeOut: true,
      smoothStep: false,
      deltaHistory: 2,
      min: 2
    },
    physics: {
      default: "arcade",
      arcade: {
          debug: true
      }
    }
  }

  const body = document.body
  const game = new Game(gameConfig);
  game.main()
  window.focus()
  
  const resizeGame = makeResizeGame(game)
  resizeGame()
  window.addEventListener('resize', resizeGame)
  setStyles(body)
}

 