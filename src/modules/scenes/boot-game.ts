import 'phaser';
import frames from './../../assets/sprites/sprites.json'
import sprites from './../../assets/sprites/sprites2.png'
import main from './../../assets/sprites/capa1.png'
import levels from './../../assets/grid/levels.json'; 
 
export class BootGame extends Phaser.Scene {
  constructor () {
    super({
      key : 'BootGame'
    })
  }

  preload() : void {
    this.load.tilemapTiledJSON('levels', levels)
    // Sprites
    this.load.atlas("sprites", sprites, frames)
    // Laberynth Map
    this.load.image('mainGame', main)
    this.load.image('levelTiles', sprites)
  }
    
  create(): void { 
    this.scene.start('PlayGame')
  }
}

export default BootGame