export type LevelConfig = {
  key: string; 
  levelNumber: number
};

export const tiles: Phaser.Types.Tilemaps.TilemapConfig = {
  key: 'levels',
  tileWidth: 16,
  tileHeight: 16
};

export const level1Config : LevelConfig = {
  key: "Level1", 
  levelNumber: 0
}

