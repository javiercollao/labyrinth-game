import 'phaser' 
import { directions, tilesConfig } from '../config/gameOptions'
import Player from '../objects/Player'; 

const { LEFT, RIGHT, UP, DOWN } = directions

export default class PlayGame extends Phaser.Scene {
  
  player!: Player; 
  layer!: Phaser.Tilemaps.TilemapLayer; 
  level!: number;
 
  constructor() {
    super({
      key :'PlayGame'
    })
    this.level = 1;
  }
   
  create () {
    this.initLayer();
    
    this.player = new Player(this, this.positionHorizontal(1), this.positionVertical(1));
    this.player.stand();

    // console.log("layer: "+this.layer.getIndexList())
    //             console.log("personaje:"+this.player.getIndexList())
  
    this.canMove()
    this.checkTilePlayer()
    this.input.keyboard.on('keydown', this.handleKey, this)
    //this.input.on('pointerup', this.handleSwipe, this)
  }

  positionHorizontal (tile) : number {
    return tilesConfig.tileWidth*tile+(tilesConfig.tileWidth/2)
  }

  positionVertical (tile): number {
    return tilesConfig.tileHeight*tile+(tilesConfig.tileHeight/2)
  }

  

  initLayer() : void {
    const map = this.make.tilemap(tilesConfig) 
    const tileset = map.addTilesetImage('sprites2','levelTiles')   
  
    switch(this.level){
        case 1: this.layer = map.createLayer('level1', tileset, 0, 0);
        break;
        case 2: this.setNewLayer('level2', 1, 1, map, tileset);
        break;
        case 3: this.setNewLayer('level3', 0, 12, map, tileset);
        break;
        case 4: this.setNewLayer('level4', 0, 0, map, tileset);
        break;
        case 5: this.setNewLayer('level5', 0, 13, map, tileset);
        break;
      
    }
    
  }


  setLevel() : number {
    return this.level++;
  }

  setNewLayer(name: string, posX: number, posY: number, map: Phaser.Tilemaps.Tilemap, tileset: Phaser.Tilemaps.Tileset) : void{
    this.layer.destroy(true)
    this.layer = map.createLayer(name, tileset, 0, 0)
    this.layer.setDepth(0)
    this.player.setDepth(1)
    this.player.setPosition(this.positionHorizontal(posX), this.positionVertical(posY))
    this.canMove()
    this.checkTilePlayer()
  }
   
  
  handleKey(e): void{
      switch (e.code) {
        case 'KeyA':
        case 'ArrowLeft':
          this.makeMove(LEFT)
          this.player.walk("LEFT")
          break
        case 'KeyD':
        case 'ArrowRight':
          this.makeMove(RIGHT)
          this.player.walk("RIGHT")
          break
        case 'KeyW':
        case 'ArrowUp':
          this.makeMove(UP)
          break
        case 'KeyS':
        case 'ArrowDown':
          this.makeMove(DOWN)
          break
      } 
  }

  // handleSwipe(e) {
  //   const swipeTime = e.upTime - e.downTime
  //   const swipe = new Phaser.Geom.Point(e.upX - e.downX, e.upY - e.downY)
  //   console.log(`Movement time: ${swipeTime}ms`)
  //   console.log(`Horizontal distance: ${swipe.x} pixels`)
  //   console.log(`Vertical distance: ${swipe.y} pixels`)   
  // }
 
  makeMove(d): void{
    if(d === RIGHT && this.player.canMoveR){
      this.player.x += 16
      this.canMove()
      this.checkTilePlayer()
    }else if(d === LEFT && this.player.canMoveL){
      this.player.x -= 16
      this.canMove()
      this.checkTilePlayer()
    }else if(d === DOWN && this.player.canMoveD){
      this.player.y += 16
      this.canMove()
      this.checkTilePlayer()
    }else if(d === UP && this.player.canMoveU){
      this.player.y -= 16
      this.canMove()
      this.checkTilePlayer()
    }
  }

  nextTileRightIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x + 16, this.player.y, true); 
    (tile.index === 97)? this.player.canMoveR = false : this.player.canMoveR = true 
  }

  nextTileLeftIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x - 16, this.player.y, true);
    (tile.index === 97)? this.player.canMoveL = false : this.player.canMoveL = true
  }

  nextTileUpIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y - 16, true);
    (tile.index === 97)? this.player.canMoveU = false : this.player.canMoveU = true
  }

  nextTileDownIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y + 16, true);
    (tile.index === 97)? this.player.canMoveD = false : this.player.canMoveD = true
  }

  checkTilePlayer(){
    const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y, true);

    if(tile.index === 93 || tile.index === 94 || tile.index === 95 || tile.index === 0){
      this.layer.removeTileAtWorldXY(this.player.x, this.player.y,false)
    }else if(tile.index === 30 || tile.index === 85){
      this.player.score++
      this.layer.removeTileAtWorldXY(this.player.x, this.player.y,false)
    }else if(tile.index === 2){
      this.setLevel()
      this.initLayer()
    }else{
      this.player.score
    } 
    console.log(`Points: ${this.player.score}`)
  }

  canMove(){
    this.nextTileRightIndex()
    this.nextTileLeftIndex()
    this.nextTileDownIndex()
    this.nextTileUpIndex()
  }

}
