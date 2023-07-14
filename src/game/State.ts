export default class State {
  public x: number;
  public y: number;
  public type: number;
  public parent: State | null;
  public neighbors: State[];
  public f: number;
  public g: number;
  public h: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.type = 0;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.parent = null;
    this.neighbors = [];
  }

  public addNeighbors(n: State[]){
    this.neighbors = n
  }
 
}