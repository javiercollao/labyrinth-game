import { tilesConfig, tilesObject } from "../config/gameOptions"; 

export default class Level{  
    layer!: Phaser.Tilemaps.TilemapLayer;
    depth: number; 

    constructor(map : Phaser.Tilemaps.Tilemap, tileset : Phaser.Tilemaps.Tileset, depth: number) { 
        this.layer = map.createLayer(6, tileset, 0, 0); 
        this.depth = depth
    }
 
    start() : void {
        this.layer.setDepth(this.depth) 
    }

    getLayer() : Phaser.Tilemaps.TilemapLayer { 
        return this.layer;
    }

    removeLayer(){
        this.layer.destroy(true)
    }




}
