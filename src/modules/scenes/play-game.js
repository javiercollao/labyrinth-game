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
    const tileset = map.addTilesetImage('drawtiles-spaced','tiles')
    //const tilesetCar = map.addTilesetImage('car','car')
    /**  Esta crea la capa piso del mapa */
    this.layer = map.createLayer('piso', tileset, 0, 0)
    /**  Jugador */ 
    this.player = this.add.image(tilesConfig.tileWidth+(tilesConfig.tileWidth/2), tilesConfig.tileHeight+(tilesConfig.tileHeight/2), 'car');
    
    this.canMove()
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
      this.player.x += 32
      this.canMove()
    }else if(d === LEFT && this.canMoveL){
      this.player.x -= 32
      this.canMove()
    }else if(d === DOWN && this.canMoveD){
      this.player.y += 32
      this.canMove()
    }else if(d === UP && this.canMoveU){
      this.player.y -= 32
      this.canMove()
    }
  }

  nextTileRightIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x + 32, this.player.y, true);
    (tile.index === 2)? this.canMoveR = true : this.canMoveR = false
  }

  nextTileLeftIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x - 32, this.player.y, true);
    (tile.index === 2)? this.canMoveL = true : this.canMoveL = false
  }

  nextTileUpIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y - 32, true);
    (tile.index === 2)? this.canMoveU = true : this.canMoveU = false
  }

  nextTileDownIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y + 32, true);
    (tile.index === 2)? this.canMoveD = true : this.canMoveD = false
  }

  canMove(){
    this.nextTileRightIndex()
    this.nextTileLeftIndex()
    this.nextTileDownIndex()
    this.nextTileUpIndex()
  }

}

export default PlayGame