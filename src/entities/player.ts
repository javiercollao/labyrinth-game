import { tileType } from '~/config/gameOptions';
import PlayGame from '~/scenes/play-game';
import Character from "./character";

export default class Player extends Character {
  public scene!: PlayGame;

  constructor(scene: PlayGame, x: number, y: number) {
    super(scene, x, y);
  }

  standAnimation(): void {
    this.skin.setTexture('sprites','p_tile000.png')
  }

  rightAnimation(): void {
    this.skin.setTexture('sprites','p_tile002.png').setFlipX(false);
  }

  leftAnimation(): void {
    this.skin.setTexture('sprites','p_tile002.png').setFlipX(true);
  }

  removeTiles(){
      const tile = this.scene.map.getTileAtWorldXY(this.getPositionX(), this.getPositionY(), true);
      if(tile.index === tileType.block.a || tile.index === tileType.block.b || tile.index === tileType.block.c || tile.index === 95 ){
        this.scene.map.removeTileAtWorldXY(this.getPositionX(), this.getPositionY(), false)
      }
  }

  movement()  : void{
    const { left, right, up, down } = this.scene.inputs;

    if (left) { 
        this.leftMovement()
        this.leftAnimation()
    } else if(right){ 
        this.rightMovement()
        this.rightAnimation()
    } else if (up) { 
        this.upMovement()
        this.standAnimation()
    }else if(down){ 
        this.downMovement()
        this.standAnimation()
    }else{
        this.standAnimation()
    }
  }

}