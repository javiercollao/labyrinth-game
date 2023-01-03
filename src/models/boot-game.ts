import 'phaser';
import frames from '../assets/sprites/sprites.json'
import sprites from './../assets/sprites/sprites2.png'
import main from './../assets/sprites/capa1.png'
import levels from '../assets/grid/levels.json'; 
import ILoaderPhaser from './interfaces/phaserInterfaces/phaser.preloader.interface';
 
export default class BootGame extends Phaser.Scene implements ILoaderPhaser{

  constructor() {
    super({
      key : 'BootGame'
    })
  }

  preload() : void {
    this.load.tilemapTiledJSON('levels', levels) 
    this.load.atlas("sprites", sprites, frames) 
    this.load.image('mainGame', main)
    this.load.image('levelTiles', sprites)
  }
    
  create() : void { 
    this.scene.start('Menu')
  }
}
