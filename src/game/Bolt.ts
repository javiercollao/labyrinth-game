import { bolt, invalidTileIndicesBolt } from "../config/sprite";
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Bolt extends Character {
     
    public canMoveLeftAndDown: boolean;
    public canMoveRightAndDown: boolean;

    constructor(scene : LevelScene, x : number, y : number) {
        super(scene, x, y);
        scene.add.existing(this);
        this.setTile()
        this.canMoveLeftAndDown = false
        this.canMoveRightAndDown = false 
        this.anims.create({key:'bolt',frames: bolt, repeat:-1});
        this.play('bolt')
        this.setMoveDown(false)
    }

    public checkingTileToRightAndDownFromPosition(): void { 
        const tileA = this.scene.map.getTileAtWorldXY(this.x+16, this.y, true);
        const tileB = this.scene.map.getTileAtWorldXY(this.x+16, this.y+16, true);
        
        if (invalidTileIndicesBolt.includes(tileA.index) && invalidTileIndicesBolt.includes(tileB.index) || invalidTileIndicesBolt.includes(tileA.index) && !invalidTileIndicesBolt.includes(tileB.index) || !invalidTileIndicesBolt.includes(tileA.index) && invalidTileIndicesBolt.includes(tileB.index)) {
          this.canMoveRightAndDown =false ;
        } else {
          this.canMoveRightAndDown = true ;
        }
    }

    public checkingTileToLeftAndDownFromPosition(): void {
      const tileA = this.scene.map.getTileAtWorldXY(this.x-16, this.y, true);
      const tileB = this.scene.map.getTileAtWorldXY(this.x-16, this.y+16, true);

      if (invalidTileIndicesBolt.includes(tileA.index) && invalidTileIndicesBolt.includes(tileB.index) || invalidTileIndicesBolt.includes(tileA.index) && !invalidTileIndicesBolt.includes(tileB.index) || !invalidTileIndicesBolt.includes(tileA.index) && invalidTileIndicesBolt.includes(tileB.index)) {
        this.canMoveLeftAndDown = false
      } else{
        this.canMoveLeftAndDown = true;
      }
    }

    public setTile() :void{
      this.scene.map.putTileAtWorldXY(2, this.x, this.y)
    }

    public removeTile(): void {
      this.scene.map.putTileAtWorldXY(0, this.x, this.y)
    }

  public checkingCollitionWithPlayer(): void { 
      if (this.y === this.scene.player.y) {
        if (this.scene.player.x + 16 === this.x && this.getMoveRight()) {  
          this.scene.player.canPush = true 
          this.scene.player.moveTilePosition(this)
        }
        if (this.scene.player.x - 16 === this.x && this.getMoveLeft() ) { 
          this.scene.player.canPush = true 
          this.scene.player.moveTilePosition(this)
        }
      }
  }

  public behavior() { 
 
        if(this.getMoveDown()){ 
          this.removeTile()
          this.setY(this.y+16)  
        }else if(this.canMoveLeftAndDown){
          this.removeTile()
          this.setX(this.x-16)
          this.setY(this.y+16)  
        }else if(this.canMoveRightAndDown){
          this.removeTile()
          this.setX(this.x+16)
          this.setY(this.y+16)  
        }
        this.setTile()
        this.checkingTileToLeftAndDownFromPosition()
        this.checkingTileToRightAndDownFromPosition()
        this.checkingTileToDownFromPosition(invalidTileIndicesBolt) 
        this.checkingTileToRightFromPosition(invalidTileIndicesBolt) 
        this.checkingTileToLeftFromPosition(invalidTileIndicesBolt)
      }

      public main(){
        this.checkingCollitionWithPlayer()
        this.behavior()
      }
}