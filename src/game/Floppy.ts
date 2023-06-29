import { floppy } from '../config/sprite'
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Floppy extends Character {

    constructor(scene : LevelScene, x : number, y : number) {
        super(scene, x, y); 
        this.anims.create({key:'floppy', frames:floppy, repeat:-1})
        this.anims.play('floppy')
    }

    public behavior(){
        console.log("log")
    }
}