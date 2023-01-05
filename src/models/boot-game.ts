import 'phaser';
import frames from './../assets/sprites/sprites.json'
import sprites from './../assets/sprites/sprites2.png'
import main from './../assets/sprites/capa1.png'
import levels from './../assets/grid/levels.json'; 
import ILoaderPhaser from './interfaces/phaserInterfaces/phaser.preloader.interface';
import menuIntroBackground from './../assets/sprites/menu-intro.png'
import menuEndBackground  from './../assets/sprites/menu-end.png'
import menuIntroButton  from './../assets/sprites/btn-menu.png'
import menuEndButton from './../assets/sprites/btn-menu-end.png'
 
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
    this.load.image('menu-intro', menuIntroBackground )
    this.load.image('menu-end', menuEndBackground )
    this.load.image('btn-menu-intro', menuIntroButton )
    this.load.image('btn-menu-end', menuEndButton )
  }
    
  create() : void { 
    this.scene.start('Menu', {intro: true})
    //this.scene.start('PlayGame')
  }
}
