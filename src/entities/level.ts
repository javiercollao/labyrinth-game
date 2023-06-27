import { tilesObject } from "./../config/gameOptions";
import PlayGame from "~/scenes/play-game";

export default class Level {  
    layer!: Phaser.Tilemaps.TilemapLayer;
    depth: number; 
    scene: PlayGame;

    constructor(scene: PlayGame, map : Phaser.Tilemaps.Tilemap, tileset : Phaser.Tilemaps.Tileset, depth: number) { 
        this.scene = scene; 
        this.layer = map.createLayer(depth, tileset, 0, 0) 
        this.depth = depth
    }

    start(depth : number) : void {
        this.layer.setDepth(depth) 
    }

    getLayer() : Phaser.Tilemaps.TilemapLayer { 
        return this.layer;
    }

    reset(){
        this.layer.clearAlpha()
    }

    removeLayer(){
        this.layer.destroy(true)
    }
 
    examp(){
        console.log(this.layer.toJSON())
    }

    levelManager(): void{
        
        this.layer.setVisible(false)
        this.scene.upgradeLevel()
        this.scene.microshipsPoints = 0; 
        this.scene.createGameLaberynth() 
        
        this.scene.door.setPosition(this.scene.positionHorizontal(tilesObject[this.scene.level].door.x), this.scene.positionVertical(tilesObject[this.scene.level].door.y))
        this.scene.player.setPosition(this.scene.positionHorizontal(tilesObject[this.scene.level].player.x), this.scene.positionVertical(tilesObject[this.scene.level].player.y))
        
        this.scene.player.canMove()

        this.scene.createMicroship()
    }

 
}
