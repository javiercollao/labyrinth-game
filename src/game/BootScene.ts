import { Scene } from 'phaser';
import frames from '../assets/sprites/sprites.json'
import sprites from './../assets/sprites/sprites2.png'
import main from './../assets/sprites/capa1.png'
import levels from '../assets/grid/levels.json'; 
import btnReset from '../assets/sprites/reset-btn.png'
import backLife from '../assets/sprites/back-life.png'
import playerLife from '../assets/sprites/vida1.png'
import menuIntroBackground from './../assets/sprites/menu-intro.png'
import menuEndBackground  from './../assets/sprites/menu-end.png'
import menuIntroButton  from './../assets/sprites/btn-menu.png'
import menuEndButton from './../assets/sprites/btn-menu-end.png'

export default class BootScene extends Scene{

    constructor() {
        super({
          key : 'BootScene'
        })
    }

    public preload() {
      this.load.tilemapTiledJSON('levels', levels) 
      this.load.atlas("sprites", sprites, frames) 
      this.load.image('mainGame', main)
      this.load.image('levelTiles', sprites)
      this.load.image('menu-intro', menuIntroBackground )
      this.load.image('btn-reset', btnReset)
      this.load.image('back-life', backLife )
      this.load.image('player-life', playerLife)
      this.load.image('menu-end', menuEndBackground )
      this.load.image('btn-menu-intro', menuIntroButton )
      this.load.image('btn-menu-end', menuEndButton )
    }

    public create () { 
      this.game.scene.start('InitGame')
    } 
    
}
