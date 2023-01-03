/**
 * @author     Javier Collao
 * @classdesc
 * Esta clase se encarga de gestionar los mapas de cada nivel del juego.
 * 
 * @class Level
*/ 

export default class Level {  
    layer!: Phaser.Tilemaps.TilemapLayer;
    depth: number; 

    constructor(map : Phaser.Tilemaps.Tilemap, tileset : Phaser.Tilemaps.Tileset, depth: number) { 
        this.layer = map.createLayer(depth, tileset, 0, 0); 
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

    novisible(){
        this.layer.setVisible(false)
    }

    examp(){
        console.log(this.layer.toJSON())
    }
     

}
