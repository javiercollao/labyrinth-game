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
            this.leftMovement()
        }else if(tile.index === 1){ 
            this.upMovement() 
        }else if(tile.index === 2){ 
            this.rightMovement() 
        }else if(tile.index === 3){ 
            this.downMovement() 
        }
    }
    
    animation(): void {
        this.play('virus');
    }

    remove(): void{
        this.destroy()
    }
 
}
