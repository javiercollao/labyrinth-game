import Phaser from 'phaser'
import gameOptions from './../config/gameOptions'
import car from './../assets/sprites/car.png'
import tiles from './../assets/sprites/drawtiles-spaced.png'


class BootGame extends Phaser.Scene {
  constructor () {
    super('BootGame')
  }

  preload () {
    this.load.image('car', car); 

  }

  create () {
    console.log('game is booting...')
    this.scene.start('PlayGame')
  }
}

export default BootGame