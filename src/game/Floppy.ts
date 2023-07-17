import { floppy, floppyTile } from '../config/sprite'
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Floppy extends Character {

    constructor(scene : LevelScene, x : number, y : number) {
        super(scene, x, y); 
        this.anims.create({key:'floppy', frames:floppy, repeat:-1})
        this.anims.play('floppy') 
        this.setMoveDown(false)
        this.setTile()
    }
 
    public setTile() :void{
        this.scene.map.putTileAtWorldXY(floppyTile, this.x, this.y)
     }

     public removeTile(): void {
        this.scene.map.putTileAtWorldXY(0, this.x, this.y)
     }

     public removeSprite(): void { 
        this.scene.data.set('score', this.scene.data.get('score') + 25)
        this.destroy(true)
    }
}