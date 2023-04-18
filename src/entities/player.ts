import { tileType } from './../config/gameOptions';
import PlayGame from '~/scenes/play-game';
import Character from './character';
import Bolt from './bolt';

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

    const invalidTileIndices = new Set([
      tileType.wall.a,
      tileType.wall.b,
      tileType.block.a,
      tileType.block.b,
      tileType.block.c,
      95
    ]);

    if (invalidTileIndices.has(tile.index)) {
      this.scene.map.putTileAtWorldXY(0, this.positionX, this.positionY)
    } 
  }

  checkingTileToRightFromPosition(): void { 
    const tile = this.scene.map.getTileAtWorldXY(this.nextRightPosition, this.positionY, true);
    const invalidTileIndices = new Set([
      tileType.wall.a,
      tileType.wall.b,
      2
    ]); 

    if (invalidTileIndices.has(tile.index)) {
      this.setCanMoveRight(false) 
    }else{
      this.setCanMoveRight(true)
    }
  }

  moveTilePosition(bolt : Bolt){
     const { left, right } = this.scene.inputs;
    if (right && bolt.canMoveRight) {
      bolt.removeTile()
      bolt.rightMovement()
      this.rightMovement()
      bolt.setTile() 
      bolt.canMove()
    }else if (left && bolt.canMoveLeft){
      bolt.removeTile()
      bolt.leftMovement()
      this.leftMovement()
      bolt.setTile() 
      bolt.canMove()
    } 
    bolt.canMove()
  }


  checkingTileToLeftFromPosition(): void {
    const tile = this.scene.map.getTileAtWorldXY(this.nextLeftPosition, this.positionY, true);
    const invalidTileIndices = new Set([
      tileType.wall.a,
      tileType.wall.b,
      2
    ]); 

    if (invalidTileIndices.has(tile.index)) {
      this.setCanMoveLeft(false) 
    }else{
      this.setCanMoveLeft(true)
    }
   }

  checkingTileToUpFromPosition(): void {
    const tile = this.scene.map.getTileAtWorldXY(this.positionX, this.nextUpPosition, true);

    const invalidTileIndices = new Set([
      tileType.wall.a,
      tileType.wall.b,
      2
    ]); 

    if (invalidTileIndices.has(tile.index)) {
      this.setCanMoveUp(false)
    }else{
      this.setCanMoveUp(true)
    }

   }

  checkingTileToDownFromPosition(): void {
    const tile = this.scene.map.getTileAtWorldXY(this.positionX, this.nextDownPosition, true);
    const invalidTileIndices = new Set([
      tileType.wall.a,
      tileType.wall.b,
      2
    ]); 

    if (invalidTileIndices.has(tile.index)) {
      this.setCanMoveDown(false) 
    }else{
      this.setCanMoveDown(true)
    }
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