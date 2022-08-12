import Phaser from 'phaser'
import gameOptions from './../config/gameOptions'
import frames from './../assets/sprites/sprites.json'
import sprites from './../assets/sprites/sprites2.png'
import levels from './../assets/grid/levels.json'


class BootGame extends Phaser.Scene {
  constructor () {
    super('BootGame')
  }

  preload () {
    // Sprites
    this.load.atlas("sprites", sprites, frames)
    
    // Laberynth Map
    this.load.image('levelTiles', sprites)
    this.load.tilemapTiledJSON('levels', levels)
  }

  create () {
    console.log('game is booting...')
    this.scene.start('PlayGame')
  }
}

export default BootGame