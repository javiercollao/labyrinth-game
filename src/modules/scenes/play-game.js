import Phaser from 'phaser'

import gameOptions, { directions, tilesConfig } from './../config/gameOptions'

const { LEFT, RIGHT, UP, DOWN } = directions

class PlayGame extends Phaser.Scene {

  constructor () {
    super('PlayGame')
  }

  create () {
    // Movements access
    this.canMoveR = true
    this.canMoveL = true
    this.canMoveU = true
    this.canMoveD = true
    
    // Creando mapa
    const map = this.make.tilemap(tilesConfig)
    /**  Esta es una llamada a la imagen que se usa en el mapa*/
    const tileset = map.addTilesetImage('sprites2','levelTiles') 
    /**  Esta crea la capa piso del mapa */
    this.layer = map.createLayer('level1', tileset, 0, 0)
    /**  Jugador */ 
    //this.player = this.add.image(tilesConfig.tileWidth+(tilesConfig.tileWidth/2), tilesConfig.tileHeight+(tilesConfig.tileHeight/2), 'car');
    
    this.player = this.add.sprite(tilesConfig.tileWidth+(tilesConfig.tileWidth/2), tilesConfig.tileHeight+(tilesConfig.tileHeight/2), 'sprites')
    this.anims.create({key:'stand', frames:[{ key: 'sprites', frame: 'p_tile000.png'}],repeat: -1 })
    this.anims.create({key:'walkR', frames:[{ key: 'sprites', frame: 'p_tile002.png'},{ key: 'sprites', frame: 'p_tile003.png'},{ key: 'sprites', frame: 'p_tile004.png'}],repeat: 0 })
    this.player.play('stand')
    
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
          this.player.play('walkR').setFlipX(true)
          break
        case 'KeyD':
        case 'ArrowRight':
          this.makeMove(RIGHT)
          this.player.play('walkR').setFlipX(false)
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
    (tile.index === 97)? this.canMoveR = false : this.canMoveR = true 
  }

  nextTileLeftIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x - 16, this.player.y, true);
    (tile.index === 97)? this.canMoveL = false : this.canMoveL = true
  }

  nextTileUpIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y - 16, true);
    (tile.index === 97)? this.canMoveU = false : this.canMoveU = true
  }

  nextTileDownIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y + 16, true);
    (tile.index === 97)? this.canMoveD = false : this.canMoveD = true
  }

  removeTilePlayer(){
    const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y, true); 
    (tile.index === 93)? this.layer.removeTileAtWorldXY(this.player.x, this.player.y,false) : console.log("no")
  }

  canMove(){
    this.nextTileRightIndex()
    this.nextTileLeftIndex()
    this.nextTileDownIndex()
    this.nextTileUpIndex()
  }

}

export default PlayGame