import { invalidTileIndicesItem, microchip, microchipTile } from "../config/sprite";
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Microchip extends Character { 
  
    constructor(scene: LevelScene, x: number, y: number) {
        super(scene, x, y)
        scene.add.existing(this)
        this.anims.create({key:'microchip', frames:microchip, repeat:-1})
        this.anims.play('microchip')
        this.setTile()
    }
    
    public setTile() :void{
        this.scene.map.putTileAtWorldXY(microchipTile, this.x, this.y)
     }

     public removeTile(): void {
        this.scene.map.putTileAtWorldXY(0, this.x, this.y)
     }
}