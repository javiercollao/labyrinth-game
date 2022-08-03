import Phaser from 'phaser'
import gameOptions from './../config/gameOptions'
import car from './../assets/sprites/car.png'
import tiles from './../assets/sprites/drawtiles-spaced.png'
import mapa from './../assets/grid/map.json'


class BootGame extends Phaser.Scene {
  constructor () {
    super('BootGame')
  }

  preload () {
    this.load.image('car', car); 
    this.load.image('tiles', tiles);
    this.load.tilemapTiledJSON('map', mapa)

  }

  create () {
    console.log('game is booting...')
    this.scene.start('PlayGame')
  }
}

export default BootGame