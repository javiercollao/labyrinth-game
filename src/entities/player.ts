import { tileType } from './../config/gameOptions';
import PlayGame from '~/scenes/play-game';
import Character from './character';

export default class Player extends Character {
  public scene!: PlayGame;

  constructor(scene: PlayGame, x: number, y: number) {
    super(scene, x, y, 'player');
    this.setTile()  
  }

  standAnimation(): void {
    this.setTexture('sprites','p_tile000.png')
  }

  rightAnimation(): void {
    this.setTexture('sprites','p_tile002.png').setFlipX(false);
  }

  leftAnimation(): void {
    this.setTexture('sprites','p_tile002.png').setFlipX(true);
  }

  removeTiles(): void {
    const tile = this.scene.map.getTileAtWorldXY(this.positionX, this.positionY, true);
    if(tile.index === tileType.block.a || tile.index === tileType.block.b || tile.index === tileType.block.c || tile.index === 95 ){
      this.scene.map.removeTileAtWorldXY(this.positionX, this.positionY, false)
    }
  }

  checkingTileToRightFromPosition(): void { 
    const tile = this.scene.map.getTileAtWorldXY(this.nextRightPosition, this.positionY, true); 
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.setCanMoveRight(false) : this.setCanMoveRight(true)
  }

  checkingTileToLeftFromPosition(): void {
    const tile = this.scene.map.getTileAtWorldXY(this.nextLeftPosition, this.positionY, true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.setCanMoveLeft(false) : this.setCanMoveLeft(true)
  }

  checkingTileToUpFromPosition(): void {
    const tile = this.scene.map.getTileAtWorldXY(this.positionX, this.nextUpPosition, true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.setCanMoveUp(false) : this.setCanMoveUp(true)
  }

  checkingTileToDownFromPosition(): void {
    const tile = this.scene.map.getTileAtWorldXY(this.positionX, this.nextDownPosition, true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.setCanMoveDown(false) : this.setCanMoveDown(true)
  }

  setTile() :void{
    this.scene.map.putTileAtWorldXY(7, this.positionX, this.positionY)
  }

  removeTile(): void {
    this.scene.map.putTileAtWorldXY(0, this.positionX, this.positionY)
  }

  movement(): void {
    const { left, right, up, down } = this.scene.inputs;

    if (left && this.canMoveLeft) { 
        this.removeTile()
        this.leftMovement()
        this.leftAnimation() 
        this.removeTiles()
        this.setTile()
        this.canMove()
    } else if(right && this.canMoveRight){ 
        this.removeTile()
        this.rightMovement()
        this.rightAnimation()
        this.removeTiles()
        this.setTile()
        this.canMove()
    } else if (up && this.canMoveUp) {
        this.removeTile() 
        this.upMovement()
        this.standAnimation()
        this.removeTiles()
        this.setTile()
        this.canMove()
    }else if(down && this.canMoveDown){
        this.removeTile()
        this.downMovement()
        this.standAnimation()
        this.removeTiles()
        this.setTile()
        this.canMove()
    }else{
        this.standAnimation()
        this.removeTiles()
        this.canMove()
    }
  }

}