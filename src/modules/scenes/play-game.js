import Phaser from 'phaser'

import gameOptions, { directions, tilesConfig } from './../config/gameOptions'

const { LEFT, RIGHT, UP, DOWN } = directions

class PlayGame extends Phaser.Scene {

  constructor () {
    super('PlayGame')
  }

  create () {
    // Permisos de movimiento 
    this.canMoveR = true
    this.canMoveL = true
    this.canMoveU = true
    this.canMoveD = true
    
    // Creando mapa
    const map = this.make.tilemap(tilesConfig)
    /**  Esta es una llamada a la imagen que se usa en el mapa*/
    const tileset = map.addTilesetImage('dex2','levelTiles') 
    /**  Esta crea la capa piso del mapa */
    this.layer = map.createLayer('piso1', tileset, 0, 0)
    this.layer2 = map.createLayer('piso1a', tileset, 0, 0)
    /**  Jugador */ 
    //this.player = this.add.image(tilesConfig.tileWidth+(tilesConfig.tileWidth/2), tilesConfig.tileHeight+(tilesConfig.tileHeight/2), 'car');
    this.player = this.add.image(tilesConfig.tileWidth+(tilesConfig.tileWidth/2), tilesConfig.tileHeight+(tilesConfig.tileHeight/2), 'player',0)


    this.canMove()
    this.removeTilePlayer()
    this.input.keyboard.on('keydown', this.handleKey, this)
    this.input.on('pointerup', this.handleSwipe, this)
  }

  
  handleKey (e) {
      switch (e.code) {
        case 'KeyA':
        case 'ArrowLeft':
          this.makeMove(LEFT)
          break
        case 'KeyD':
        case 'ArrowRight':
          this.makeMove(RIGHT)
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

  handleSwipe (e) {
    const swipeTime = e.upTime - e.downTime
    const swipe = new Phaser.Geom.Point(e.upX - e.downX, e.upY - e.downY)
    console.log(`Movement time: ${swipeTime}ms`)
    console.log(`Horizontal distance: ${swipe.x} pixels`)
    console.log(`Vertical distance: ${swipe.y} pixels`)   
  }
 
  makeMove(d){
    if(d === RIGHT && this.canMoveR){
      this.player.x += 16
      this.canMove()
      this.removeTilePlayer()
    }else if(d === LEFT && this.canMoveL){
      this.player.x -= 16
      this.canMove()
      this.removeTilePlayer()
    }else if(d === DOWN && this.canMoveD){
      this.player.y += 16
      this.canMove()
      this.removeTilePlayer()
    }else if(d === UP && this.canMoveU){
      this.player.y -= 16
      this.canMove()
      this.removeTilePlayer()
    }
  }

  nextTileRightIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x + 16, this.player.y, true); 
    (tile.index === 39)? this.canMoveR = true : this.canMoveR = false 
  }

  nextTileLeftIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x - 16, this.player.y, true);
    (tile.index === 39)? this.canMoveL = true : this.canMoveL = false
  }

  nextTileUpIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y - 16, true);
    (tile.index === 39)? this.canMoveU = true : this.canMoveU = false
  }

  nextTileDownIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y + 16, true);
    (tile.index === 39)? this.canMoveD = true : this.canMoveD = false
  }

  removeTilePlayer(){
    const tile = this.layer2.getTileAtWorldXY(this.player.x, this.player.y, true); 
    (tile.index === 31)? this.layer2.removeTileAtWorldXY(this.player.x, this.player.y,false) : console.log("no")
  }

  canMove(){
    this.nextTileRightIndex()
    this.nextTileLeftIndex()
    this.nextTileDownIndex()
    this.nextTileUpIndex()
  }

}

export default PlayGame