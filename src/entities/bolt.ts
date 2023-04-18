import PlayGame from "~/scenes/play-game";
import { bolt, tileType } from "../config/gameOptions";
import Character from "./character";

export default class Bolt extends Character {
    
    public scene!: PlayGame;
    public canMoveLeftAndDown: boolean;
    public canMoveRightAndDown: boolean;

    constructor(scene : Phaser.Scene, x : number, y : number) {
        super(scene, x, y, 'bolt');
        scene.add.existing(this);
        this.canMoveLeftAndDown = false
        this.canMoveRightAndDown = false
        this.setTile()
        this.startAnimation() 
        this.canMove() 
    }

    startAnimation() : void { 
        this.anims.create({
            key:'bolt', 
            frames: bolt, 
            repeat:-1
        });
        this.play('bolt', true)
    }

    setCanMoveRightDown(value: boolean): void {
      this.canMoveRightAndDown = value;
    }

    setCanMoveLeftDown(value: boolean): void {
    this.canMoveLeftAndDown = value;
    }


    checkingTileToLeftFromPosition(): void {
      const tile = this.scene.map.getTileAtWorldXY(this.nextRightPosition, this.positionY, true);
      const invalidTileIndices = new Set([
        tileType.wall.a,
        tileType.wall.b,
        tileType.block.a,
        tileType.block.b,
        tileType.block.c,
        95,
        2,
        7,
      ]);
      if (invalidTileIndices.has(tile.index)) {
        this.setCanMoveLeft(false);
      } else {
        this.setCanMoveLeft(true);
      }

    }



    checkingTileToRightFromPosition(): void {
      const tile = this.scene.map.getTileAtWorldXY(this.nextRightPosition, this.positionY, true);
      const invalidTileIndices = new Set([
        tileType.wall.a,
        tileType.wall.b,
        tileType.block.a,
        tileType.block.b,
        tileType.block.c,
        95,
        2,
        7,
      ]);
      if (invalidTileIndices.has(tile.index)) {
        this.setCanMoveRight(false);
      } else {
        this.setCanMoveRight(true);
      }

    }

    checkingTileToRightAndDownFromPosition(): void { 
        const tileA = this.scene.map.getTileAtWorldXY(this.nextRightPosition, this.positionY, true);
        const tileB = this.scene.map.getTileAtWorldXY(this.nextRightPosition, this.nextDownPosition, true);
        const invalidTileIndices = new Set([
          tileType.wall.a,
          tileType.wall.b,
          tileType.block.a,
          tileType.block.b,
          tileType.block.c,
          95,
          2,
          7,
        ]);

        if (invalidTileIndices.has(tileA.index) && invalidTileIndices.has(tileB.index) || invalidTileIndices.has(tileA.index) && !invalidTileIndices.has(tileB.index) || !invalidTileIndices.has(tileA.index) && invalidTileIndices.has(tileB.index)) {
          this.setCanMoveRightDown(false);
        } else {
          this.setCanMoveRightDown(true);
        }
         
    }

    checkingTileToLeftAndDownFromPosition(): void {
      const tileA = this.scene.map.getTileAtWorldXY(this.nextLeftPosition, this.positionY, true);
      const tileB = this.scene.map.getTileAtWorldXY(this.nextLeftPosition, this.nextDownPosition, true);

      const invalidTileIndices = new Set([
        tileType.wall.a,
        tileType.wall.b,
        tileType.block.a,
        tileType.block.b,
        tileType.block.c,
        95,
        2,
        7,
      ]);

      if (invalidTileIndices.has(tileA.index) && invalidTileIndices.has(tileB.index) || invalidTileIndices.has(tileA.index) && !invalidTileIndices.has(tileB.index) || !invalidTileIndices.has(tileA.index) && invalidTileIndices.has(tileB.index)) {
        this.setCanMoveLeftDown(false);
      } else{
        this.setCanMoveLeftDown(true);
      }
    }

    checkingTileToDownFromPosition(): void {
      const tile = this.scene.map.getTileAtWorldXY(this.positionX, this.nextDownPosition, true);
      const invalidTileIndices = new Set([
        tileType.wall.a,
        tileType.wall.b,
        tileType.block.a,
        tileType.block.b,
        tileType.block.c,
        95,
        2,
        7,
      ]);

      if (invalidTileIndices.has(tile.index)) {
        this.setCanMoveDown(false);
      } else {
        this.setCanMoveDown(true);
      }

    }

    setTile() :void{
      this.scene.map.putTileAtWorldXY(2, this.positionX, this.positionY)
    }

    removeTile(): void {
      this.scene.map.putTileAtWorldXY(0, this.positionX, this.positionY)
    }
  

    movement(): void {  
      if(this.canMoveDown){ 
        this.removeTile()
        this.downMovement()
        this.setTile()
        this.canMove()
        this.checkingTileToLeftAndDownFromPosition()
        this.checkingTileToRightAndDownFromPosition()
      }else if(this.canMoveLeftAndDown){
        this.removeTile()
        this.leftMovement()
        this.downMovement()
        this.setTile()
        this.canMove()
        this.checkingTileToLeftAndDownFromPosition()
        this.checkingTileToRightAndDownFromPosition()
      }else if(this.canMoveRightAndDown){
        this.removeTile()
        this.rightMovement()
        this.downMovement()
        this.setTile()
        this.canMove()
        this.checkingTileToLeftAndDownFromPosition()
        this.checkingTileToRightAndDownFromPosition()
      }
      this.checkingTileToLeftAndDownFromPosition()
      this.checkingTileToRightAndDownFromPosition()
      this.setTile()
      this.canMove()
    }

}
