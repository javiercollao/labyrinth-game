import Phaser from 'phaser'
import gameOptions from './../config/gameOptions'
import player from './../assets/sprites/player/player.png'
import levelTiles from './../assets/sprites/dex2.png'
import level1 from './../assets/grid/level1.json'


class BootGame extends Phaser.Scene {
  constructor () {
    super('BootGame')
  }

  preload () {
    // this.load.spritesheet('player', player, { frameWidth: 16, frameHeight: 16 })
    this.load.spritesheet({
      key: 'player',
      url: player,
      frameConfig: {
          frameWidth: 16,
          frameHeight: 16,
          startFrame: 0,
          endFrame: 0
      }
  })
    this.load.image('levelTiles', levelTiles)
    this.load.tilemapTiledJSON('level1', level1)

  }

  create () {
    console.log('game is booting...')
    this.scene.start('PlayGame')
  }
}

export default BootGame