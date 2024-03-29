import { byte, byteTile, invalidTileIndicesItem } from "../config/sprite";
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Byte extends Character {

    constructor(scene : LevelScene, x : number, y : number) {
        super(scene, x, y); 
        this.anims.create({key:'byte', frames:byte, repeat:-1})
        this.anims.play('byte') 
        this.setTile()
    }

    public setTile() :void{
        this.scene.map.putTileAtWorldXY(byteTile, this.x, this.y)
     }

     public removeTile(): void {
        this.scene.map.putTileAtWorldXY(0, this.x, this.y)
     }

     public removeSprite(): void { 
        this.scene.data.set('score', this.scene.data.get('score') + 50)
        this.scene.data.set('bit', this.scene.data.get('bit') - 1)
        this.destroy(true)
    }
}