
export type LevelConfig = {
  key: string; 
  levelNumber: number
  tileWidth: number,
  tileHeigth: number,
  player: object,
  door: object,
  items: object,
  enemies: object
};

export const tiles: Phaser.Types.Tilemaps.TilemapConfig = {
  key: 'levels',
  tileWidth: 16,
  tileHeight: 16
};

export const level1Config : LevelConfig = {
  key: "Level1",
  levelNumber: 0,
  tileWidth: 16,
  tileHeigth: 16,
  player: {
    x: 4,
    y: 4
  },
  door: {
    x: 21,
    y: 4
  },
  items: {
    bolt: [
      {
        x: 19,
        y: 13
      }
    ],
    byte: [
      {
        x: 11,
        y: 5
      },
      {
        x: 18,
        y: 5
      }
    ],
    floppy: [],
    microship: [
      {
        x: 20,
        y: 13
      },
      {
        x: 21,
        y: 13
      },
      {
        x: 19,
        y: 14
      },
      {
        x: 20,
        y: 14
      },
      {
        x: 21,
        y: 14
      }
    ],
    power: []
  },
  enemies: {
    blob: [],
    meanie: [],
    nanorobot: [],
    virus: []
  },
}

