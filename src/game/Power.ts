import { invalidTileIndicesItem, power, powerTile } from "../config/sprite"
import Character from "./Character"
import LevelScene from "./LevelScene"

export default class Power extends Character { 
  
    constructor(scene: LevelScene, x: number, y: number) {
        super(scene, x, y)
        scene.add.existing(this)
        this.anims.create({key:'power', frames:power, repeat:-1})
        this.anims.play('power')
        this.setTile()
    }
 
    public setTile() :void{
        this.scene.map.putTileAtWorldXY(powerTile, this.x, this.y)
     }
    
     public removeTile(): void {
        this.scene.map.putTileAtWorldXY(0, this.x, this.y)
     }

     public removeSprite(): void { 
        this.scene.data.set('score', this.scene.data.get('score') + 15)
        this.destroy(true)
    }
}