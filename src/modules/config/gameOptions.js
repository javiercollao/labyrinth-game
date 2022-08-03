export default {
    boardSize: {
      cols: 20,
      rows: 13
    },
    swipeMaxTime: 1000,
    swipeMinDistance: 20,
    swipeMinNormal: 0.85,
    tileSize: 32,
    tileSpacing: 0,
    tweenSpeed: 2000
  }

  const LEFT = 0
  const RIGHT = 1
  const UP = 2
  const DOWN = 3
  
  export const directions = {
    LEFT,
    RIGHT,
    UP,
    DOWN
  }

  export const tilesConfig = {
    key: 'map',
    tileWidth: 32,
    tileHeight: 32
  }