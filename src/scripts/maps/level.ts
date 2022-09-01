import { tilesConfig, tilesObject } from "../config/gameOptions"; 

export default class Level{
    map: Phaser.Tilemaps.Tilemap;
    tilesetGame: Phaser.Tilemaps.Tileset;
    tilesetContainer: Phaser.Tilemaps.Tileset;
    level: number; 
    layerContainer!: Phaser.Tilemaps.TilemapLayer;
    layerGame!: Phaser.Tilemaps.TilemapLayer;

    constructor(scene : Phaser.Scene, level: number) { 
        this.map = scene.make.tilemap(tilesConfig);
        this.tilesetGame = this.map.addTilesetImage('sprites2','levelTiles');
        this.tilesetContainer = this.map.addTilesetImage('principal','mainGame');
        this.level = level;
        this.layerGame = this.map.createLayer(this.level, this.tilesetGame, 0, 0);
        this.layerContainer = this.map.createLayer('static', this.tilesetContainer, 0, 0);
    }

    init() : void {
        this.layerContainer.setDepth(1) 
        this.layerGame.setDepth(0)
    }

    getLayerGame() : Phaser.Tilemaps.TilemapLayer { 
        return this.layerGame;
    }

    setLevel(level : number) : number {
        return this.level = level;
    }




}
