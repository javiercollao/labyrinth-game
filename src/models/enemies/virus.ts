import ICharacter from "../interfaces/character.interface";
import IEnemy from "../interfaces/enemy.interface";
import { tileType, virus } from "../../config/gameOptions";

export default class Virus extends Phaser.GameObjects.Sprite implements ICharacter, IEnemy {
    
    canMoveRight: boolean;
    canMoveLeft: boolean;
    canMoveUp: boolean;
    canMoveDown: boolean;
    stillLeft: boolean;
    stillDown: boolean; 

    constructor(scene : Phaser.Scene, posX : number, posY : number) {
        super(scene, posX, posY, 'sprites');
        scene.add.existing(this);
        this.canMoveRight = true;
        this.canMoveLeft = true;
        this.canMoveUp = true;
        this.canMoveDown = true;
        this.stillLeft = true;
        this.stillDown = true; 
        this.anims.create({key:'virus', frames:virus, repeat:-1});
    }

    getPositionX(): number {
        return this.x;
    }
    getPositionY(): number {
      return this.y;
    }
    getNextRightPosition(): number {
      return this.x + 16;
    }
    getNextLeftPosition(): number {
      return this.x - 16;
    }
    getNextUpPosition(): number {
      return this.y - 16;
    }
    getNextDownPosition(): number {
      return this.y + 16;
    }
    setCanMoveRight(value: boolean): void {
        this.canMoveRight = value;
    }
    setCanMoveLeft(value: boolean): void {
      this.canMoveLeft = value;
    }
    setCanMoveUp(value: boolean): void {
      this.canMoveUp = value;
    }
    setCanMoveDown(value: boolean): void {
      this.canMoveDown = value;
    }
    
    rightMovement(): void {
        this.x += 16;
    }
    leftMovement(): void {
      this.x -= 16;
    }
    upMovement(): void {
      this.y -= 16;
    }
    downMovement(): void {
      this.y += 16;
    }
    
    movement(map: Phaser.Tilemaps.Tilemap): void { 
        let tile = map.getTileAtWorldXY(this.getPositionX(), this.getPositionY(), true)
        if(tile.index === 4){
            // move left
            this.leftMovement()
        }else if(tile.index === 1){
            // move u
            this.upMovement() 
        }else if(tile.index === 2){
            // move r
            this.rightMovement() 
        }else if(tile.index === 3){
            // move d
            this.downMovement() 
        }
 
    }
    
    animation(): void {
        this.play('virus');
    }

    remove(): void{
        this.destroy()
    }


    // canMove(map: Phaser.Tilemaps.Tilemap){
    //     this.nextTileRightIndex(map)
    //     this.nextTileLeftIndex(map)
    //     this.nextTileDownIndex(map)
    //     this.nextTileUpIndex(map)
    // }
    
    //   nextTileRightIndex(map: Phaser.Tilemaps.Tilemap){
    //     const ; 
    //     (tile.index != 1)? this.setCanMoveRight(false) : this.setCanMoveRight(true)
    //   }
    
    //   nextTileLeftIndex(map: Phaser.Tilemaps.Tilemap){
    //     const tile = map.getTileAtWorldXY(this.getNextLeftPosition(), this.getPositionY(), true);
    //     (tile.index != 1)? this.setCanMoveLeft(false) : this.setCanMoveLeft(true)
    //   }
    
    //   nextTileUpIndex(map: Phaser.Tilemaps.Tilemap){
    //     const tile = map.getTileAtWorldXY(this.getPositionX(), this.getNextUpPosition(), true);
    //     (tile.index != 1)? this.setCanMoveUp(false) : this.setCanMoveUp(true)
    //   }
    
    //   nextTileDownIndex(map: Phaser.Tilemaps.Tilemap){
    //     const tile = map.getTileAtWorldXY(this.getPositionX(), this.getNextDownPosition(), true);
    //     (tile.index != 1)? this.setCanMoveDown(false) : this.setCanMoveDown(true)
    //   }

}
