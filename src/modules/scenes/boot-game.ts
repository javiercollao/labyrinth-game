import 'phaser';
import frames from './../../assets/sprites/sprites.json'
import sprites from './../../assets/sprites/sprites2.png'
import levels from './../../assets/grid/levels.json'; 
 
export class BootGame extends Phaser.Scene {
  constructor () {
    super({
      key : 'BootGame'
    })
  }

  preload() : void {
    // Sprites
    this.load.atlas("sprites", sprites, frames)
    // Laberynth Map
    this.load.image('levelTiles', sprites)
    this.load.tilemapTiledJSON('levels', levels)
  }
    
  create(): void { 
    this.scene.start('PlayGame')
  }
}

export default BootGame