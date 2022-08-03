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
    backgroundColor: '#1a1a2d', 
    width: 640,
    height: 416,
    scene: [BootGame, PlayGame],
    scale: { 
        mode: Phaser.Scale.NONE,
        height:640,
        width: 960
    }
  }

  const game = new Phaser.Game(gameConfig)
  // window.focus()
  // const resizeGame = makeResizeGame(game)
  // resizeGame()
  // window.addEventListener('resize', resizeGame)
}