/**
 * @author     Javier Collao
 * @classdesc
 * Esta clase se encarga de gestionar al personaje Meanie
 * 
 * @class Meanie
*/ 

import PlayGame from "~/scenes/play-game";
import { meanie, tileType } from "../config/gameOptions";
import Character from "./character";

export default class Meanie extends Character {
    public scene!: PlayGame;
    
    constructor(scene : Phaser.Scene, x : number, y : number) {
        super(scene, x, y, 'enemy');
        scene.add.existing(this);
        this.anims.create({
            key: 'meanie', 
            frames: meanie,
            repeat: -1 });
        this.startAnimation() 
        this.canMove() 
    }
    
    startAnimation() : void{ 
        this.play('meanie', true)
    }

    nextTileRightIndex(): void{ 
        const tile = this.scene.map.getTileAtWorldXY(this.nextRightPosition, this.positionY, true); 
        (tile.index === tileType.wall.a || tile.index === tileType.wall.b || tile.index === tileType.block.a || tile.index === tileType.block.b || tile.index === tileType.block.c || tile.index === 95 )? this.setCanMoveRight(false) : this.setCanMoveRight(true)
    }

    nextTileLeftIndex(): void{
      const tile = this.scene.map.getTileAtWorldXY(this.nextLeftPosition, this.positionY, true);
      (tile.index === tileType.wall.a || tile.index === tileType.wall.b || tile.index === tileType.block.a || tile.index === tileType.block.b || tile.index === tileType.block.c || tile.index === 95 )? this.setCanMoveLeft(false) : this.setCanMoveLeft(true)
    }

    nextTileUpIndex(): void{
      const tile = this.scene.map.getTileAtWorldXY(this.positionX, this.nextUpPosition, true);
      (tile.index === tileType.wall.a || tile.index === tileType.wall.b || tile.index === tileType.block.a || tile.index === tileType.block.b || tile.index === tileType.block.c || tile.index === 95 )? this.setCanMoveUp(false) : this.setCanMoveUp(true)
    }

    nextTileDownIndex(): void{
      const tile = this.scene.map.getTileAtWorldXY(this.positionX, this.nextDownPosition, true);
      (tile.index === tileType.wall.a || tile.index === tileType.wall.b || tile.index === tileType.block.a || tile.index === tileType.block.b || tile.index === tileType.block.c || tile.index === 95 )? this.setCanMoveDown(false) : this.setCanMoveDown(true)
    }

   
    getRandomNumber(min:number, max:number) :number {
        let randomNumber = Math.random() * (max - min) + min;
        return Math.round(randomNumber);
    }
    
    randomMovementLR() :void {
        let n = this.getRandomNumber(1,2)
        if(n==1){
            this.leftMovement()
        }else{
            this.rightMovement()
        }
    }

    randomMovementUD() :void {
        let n = this.getRandomNumber(1,2)
        if(n==1){
            this.upMovement()
        }else{
            this.downMovement()
        }
    }

    randomMovement() :void {
        let n = this.getRandomNumber(1,4)
        if(n == 1){
            this.upMovement()
        }else if(n === 3){
            this.downMovement()
        }else if(n === 2){
            this.leftMovement()
        }else if(n === 4){
            this.rightMovement()
        }
    }

    // TO DO: BFS Algortim
    movement() :void {
        let playerX = this.scene.player.positionX
        let playerY = this.scene.player.positionY

        let deltaPx = (playerX - this.positionX)/16
        let deltaPy = (playerY - this.positionY)/16
        this.canMove()


        if(deltaPx < deltaPy && deltaPx < 0 && this.canMoveLeft && this.canMoveRight && this.canMoveUp && this.canMoveDown){
            this.randomMovement()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPx < deltaPy && deltaPx < 0 && deltaPx > -10 && this.canMoveLeft && !this.canMoveRight && !this.canMoveUp && !this.canMoveDown){
            this.leftMovement()
        }else if(deltaPx < deltaPy && deltaPx < 0 && deltaPx > -10 && this.canMoveLeft && this.canMoveRight && !this.canMoveUp && !this.canMoveDown){
            this.randomMovementLR()
        }else if(deltaPx < deltaPy && deltaPx > 0 && deltaPx < 10 && this.canMoveLeft && this.canMoveRight && this.canMoveUp && this.canMoveDown){
            this.randomMovement()
        }else if(deltaPx < deltaPy && deltaPx > 0 && deltaPx > 10 && !this.canMoveLeft && this.canMoveRight && !this.canMoveUp && !this.canMoveDown){
            this.rightMovement()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPx < deltaPy && deltaPx > 0 && deltaPx > 10 && this.canMoveLeft && this.canMoveRight && !this.canMoveUp && !this.canMoveDown){
            this.randomMovementLR()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPy === 0 && this.canMoveLeft && deltaPx < 0){
            this.leftMovement()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPy === 0 && this.canMoveRight && deltaPx > 0){
            this.rightMovement()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPx > deltaPy && deltaPy < 0 && this.canMoveUp){
            this.upMovement()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPx > deltaPy && deltaPy < 0 && !this.canMoveUp && this.canMoveLeft){
            this.leftMovement()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPx > deltaPy && deltaPy < 0 && !this.canMoveUp && !this.canMoveLeft && this.canMoveRight){
            this.rightMovement()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPx > deltaPy && deltaPy < 0 && !this.canMoveUp && !this.canMoveRight && this.canMoveLeft){
            this.leftMovement()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPx > deltaPy && deltaPy > 0 && this.canMoveDown){
            this.downMovement()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPx === 0 && this.canMoveUp && deltaPy < 0 ){
            this.upMovement()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPx === 0 && this.canMoveDown && deltaPy > 0){
            this.downMovement()
            console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        }else if(deltaPy === -1 && this.canMoveRight){
            this.rightMovement()
        }else if(deltaPx === -1 && this.canMoveDown){
            this.downMovement()
        }
         
        // if(deltaPx < deltaPy && deltaPx < 0 && this.canMoveLeft){
        //     this.leftMovement()
        //     console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        // }else if(deltaPx < deltaPy && deltaPx > 0 && !this.canMoveRight && this.canMoveUp){
        //     this.upMovement()
        // }else if(deltaPx < deltaPy && deltaPx > 0 && this.canMoveRight){
        //     this.rightMovement()
        //     console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        // }else if(deltaPy === 0 && this.canMoveLeft && deltaPx < 0){
        //     this.leftMovement()
        //     console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        // }else if(deltaPy === 0 && this.canMoveRight && deltaPx > 0){
        //     this.rightMovement()
        //     console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        // }else if(deltaPx > deltaPy && deltaPy < 0 && this.canMoveUp){
        //     this.upMovement()
        //     console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        // }else if(deltaPx > deltaPy && deltaPy < 0 && !this.canMoveUp && this.canMoveLeft){
        //     this.leftMovement()
        //     console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        // }else if(deltaPx > deltaPy && deltaPy < 0 && !this.canMoveUp && !this.canMoveLeft && this.canMoveRight){
        //     this.rightMovement()
        //     console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        // }else if(deltaPx > deltaPy && deltaPy < 0 && !this.canMoveUp && !this.canMoveRight && this.canMoveLeft){
        //     this.leftMovement()
        //     console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        // }else if(deltaPx > deltaPy && deltaPy > 0 && this.canMoveDown){
        //     this.downMovement()
        //     console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        // }else if(deltaPx === 0 && this.canMoveUp && deltaPy < 0 ){
        //     this.upMovement()
        //     console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        // }else if(deltaPx === 0 && this.canMoveDown && deltaPy > 0){
        //     this.downMovement()
        //     console.log(`posicion MEANI X :${this.positionX}, posicion MEANI Y :${this.positionY}`)
        // }else if(deltaPy === -1 && this.canMoveRight){
        //     this.rightMovement()
        // }else if(deltaPx === -1 && this.canMoveDown){
        //     this.downMovement()
        // }
            
    }

}
