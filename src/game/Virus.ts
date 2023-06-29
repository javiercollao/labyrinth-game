import { virus } from "../config/sprite";
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Virus extends Character {

    constructor(scene : LevelScene, x : number, y : number) {
        super(scene, x, y); 
        this.anims.create({key:'virus', frames:virus, repeat:-1})
        this.anims.play('virus')
    }

}