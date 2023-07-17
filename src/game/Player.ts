import Character from "./Character";
import LevelScene from "./LevelScene";
import { dexterWalk , dexterStand, invalidTileIndicesDexter, invalidTileIndicesBolt} from './../config/sprite';
import Bolt from "./Bolt";

export default class Player extends Character {
   public canPush: boolean;
     
    constructor(scene: LevelScene, x: number, y: number) {
        super(scene, x, y);
        this.canPush = false
        this.anims.create({key:'player', frames:dexterStand, repeat:-1})
        this.anims.create({key:'playerWalk', frames:dexterWalk, repeat:-1})
        this.checkingTileToRightFromPosition(invalidTileIndicesDexter)
        this.checkingTileToLeftFromPosition(invalidTileIndicesDexter)
        this.checkingTileToUpFromPosition(invalidTileIndicesDexter)
        this.checkingTileToDownFromPosition(invalidTileIndicesDexter)
        this.setTile()
      }

    public behavior() {
     const { left, right, up, down } = this.scene.inputs;
        
     if (left && this.getMoveLeft()) {
        this.removeTile() 
        this.setX(this.x-16)
        this.setFlipX(true)
        this.anims.play('playerWalk')
        this.setTile()
     }else if(left && !this.getMoveLeft()){
        this.setFlipX(true)
        this.anims.play('playerWalk')
     } else if(right && this.getMoveRight()){  
        this.removeTile()
        this.setFlipX(false)
        this.setX(this.x+16)
        this.anims.play('playerWalk')
        this.setTile()  
     }else if(right && !this.getMoveRight()){
         this.setFlipX(false)
         this.anims.play('playerWalk')
     } else if (up && this.getMoveUp()) { 
        this.removeTile()  
        this.setFlipX(false)
        this.setY(this.y-16)
        this.setTile() 
     }else if(down && this.getMoveDown()){ 
        this.removeTile()  
        this.setFlipX(false)
        this.setY(this.y+16)
        this.setTile() 
     }else{
        this.setFlipX(false)
        this.anims.play('player') 
     } 
     this.checkingTileToRightFromPosition(invalidTileIndicesDexter)
     this.checkingTileToLeftFromPosition(invalidTileIndicesDexter)
     this.checkingTileToUpFromPosition(invalidTileIndicesDexter)
     this.checkingTileToDownFromPosition(invalidTileIndicesDexter) 
    }

   
   
   public setTile() :void{
      this.scene.map.putTileAtWorldXY(7, this.x, this.y)
   }
  
   public removeTile(): void {
      this.scene.map.putTileAtWorldXY(0, this.x, this.y)
   }

   public moveTilePosition(bolt : Bolt){
      const { right, left } = this.scene.inputs;
      if (right  && !this.getMoveRight() && bolt.getMoveRight()) {
         bolt.removeTile()
         bolt.setX(bolt.x+16) 
         bolt.setTile()
         this.setX(this.x+16)
         this.removeTile()
         this.setTile()
         console.log("right")
         console.log(bolt.getMoveRight())
      }
      if(left && bolt.getMoveLeft() && !this.getMoveLeft()){

         this.removeTile()
        bolt.removeTile() 
        bolt.setX(bolt.x-16) 
        bolt.setTile() 
        this.setX(this.x-16)
         this.setTile()
        console.log("left")
      } 
      bolt.checkingTileToLeftFromPosition(invalidTileIndicesBolt)
      bolt.checkingTileToRightFromPosition(invalidTileIndicesBolt)
      bolt.checkingTileToDownFromPosition(invalidTileIndicesBolt)
      bolt.checkingTileToLeftAndDownFromPosition()
      bolt.checkingTileToRightAndDownFromPosition() 
   }
  
     
}