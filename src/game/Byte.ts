import { byte } from "../config/sprite";
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Byte extends Character {

    constructor(scene : LevelScene, x : number, y : number) {
        super(scene, x, y); 
        this.anims.create({key:'byte', frames:byte, repeat:-1})
        this.anims.play('byte')
    }

}