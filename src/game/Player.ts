import Character from "./Character";
import LevelScene from "./LevelScene";
import { dexterWalk , dexterStand, invalidTileIndicesDexter} from './../config/sprite';

export default class Player extends Character {
     
    constructor(scene: LevelScene, x: number, y: number) {
        super(scene, x, y);
        this.anims.create({key:'player', frames:dexterStand, repeat:-1})
        this.anims.create({key:'playerWalk', frames:dexterWalk, repeat:-1})
        this.checkingTileToRightFromPosition(invalidTileIndicesDexter)
        this.checkingTileToLeftFromPosition(invalidTileIndicesDexter)
        this.checkingTileToUpFromPosition(invalidTileIndicesDexter)
        this.checkingTileToDownFromPosition(invalidTileIndicesDexter)
      }

    public behavior() {
     const { left, right, up, down } = this.scene.inputs;
    
     if (left && this.getMoveLeft()) {
        this.setX(this.x-16)
        this.setFlipX(true)
        this.anims.play('playerWalk')
        this.removeTiles() 
     }else if(left && !this.getMoveLeft()){
        this.setFlipX(true)
        this.anims.play('playerWalk')
     } else if(right && this.getMoveRight()){  
        this.setFlipX(false)
        this.setX(this.x+16)
        this.anims.play('playerWalk')
        this.removeTiles()
     }else if(right && !this.getMoveRight()){
         this.setFlipX(false)
         this.anims.play('playerWalk')
     } else if (up && this.getMoveUp()) { 
        this.setFlipX(false)
        this.setY(this.y-16)
        this.removeTiles()  
     }else if(down && this.getMoveDown()){ 
        this.setFlipX(false)
        this.setY(this.y+16)
        this.removeTiles()  
     }else{
        this.setFlipX(false)
        this.anims.play('player')
        this.removeTiles()
     }
     this.checkingTileToRightFromPosition(invalidTileIndicesDexter)
     this.checkingTileToLeftFromPosition(invalidTileIndicesDexter)
     this.checkingTileToUpFromPosition(invalidTileIndicesDexter)
     this.checkingTileToDownFromPosition(invalidTileIndicesDexter) 
    }

    public removeTiles() {
        this.scene.map.putTileAtWorldXY(0, this.x, this.y)
    }

     
}