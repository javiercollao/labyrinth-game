import { tileType } from './../config/gameOptions';
import PlayGame from '~/scenes/play-game';
import Character from './character';


export default class Player extends Character {
  public scene!: PlayGame;

  constructor(scene: PlayGame, x: number, y: number) {
    super(scene, x, y, 'player', 0); 
    this.sprite.setIgnoreGravity(true)
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

  removeTiles(): void{
    const tile = this.scene.map.getTileAtWorldXY(this.positionX, this.positionY, true);
    if(tile.index === tileType.block.a || tile.index === tileType.block.b || tile.index === tileType.block.c || tile.index === 95 ){
      this.scene.map.removeTileAtWorldXY(this.positionX, this.positionY, false)
    }
  }

  nextTileRightIndex(): void{ 
    const tile = this.scene.map.getTileAtWorldXY(this.nextRightPosition, this.positionY, true); 
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.setCanMoveRight(false) : this.setCanMoveRight(true)
  }

  nextTileLeftIndex(): void{
    const tile = this.scene.map.getTileAtWorldXY(this.nextLeftPosition, this.positionY, true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.setCanMoveLeft(false) : this.setCanMoveLeft(true)
  }

  nextTileUpIndex(): void{
    const tile = this.scene.map.getTileAtWorldXY(this.positionX, this.nextUpPosition, true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.setCanMoveUp(false) : this.setCanMoveUp(true)
  }

  nextTileDownIndex(): void{
    const tile = this.scene.map.getTileAtWorldXY(this.positionX, this.nextDownPosition, true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.setCanMoveDown(false) : this.setCanMoveDown(true)
  }

  

  movement()  : void{
    const { left, right, up, down } = this.scene.inputs;

    if (left && this.canMoveLeft) { 
        this.leftMovement()
        console.log(`posicion DEX X :${this.positionX}, posicion DEX Y :${this.positionY}`)
        this.leftAnimation() 
        this.removeTiles()
        this.canMove()
    } else if(right && this.canMoveRight){ 
        this.rightMovement()
        console.log(`posicion DEX X :${this.positionX}, posicion DEX Y :${this.positionY}`)
        this.rightAnimation()
        this.removeTiles()
        this.canMove()
    } else if (up && this.canMoveUp) { 
        this.upMovement()
        console.log(`posicion DEX X :${this.positionX}, posicion DEX Y :${this.positionY}`)
        this.standAnimation()
        this.removeTiles()
        this.canMove()
    }else if(down && this.canMoveDown){ 
        this.downMovement()
        console.log(`posicion DEX X :${this.positionX}, posicion DEX Y :${this.positionY}`)
        this.standAnimation()
        this.removeTiles()
        this.canMove()
    }else{
        this.standAnimation()
        this.removeTiles()
        this.canMove()
    }
  }

}