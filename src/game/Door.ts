 
import { door, doorTile } from "../config/sprite";
import Character from "./Character"; 
import LevelScene from "./LevelScene";

 export default class Door extends Character { 
    constructor(scene: LevelScene, x: number, y: number) {
        super(scene, x, y); 
        this.anims.create({key:'door', frames:door, repeat: -1});
        this.play('door')
        this.setTile()
    }

    public setTile() :void{
        this.scene.map.putTileAtWorldXY(doorTile, this.x, this.y)
     }

     public removeTile(): void {
        this.scene.map.putTileAtWorldXY(0, this.x, this.y)
     }
}