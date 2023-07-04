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


    // public distanciaEuclidea(d: State): number {
    //     const distancia: number = Math.sqrt(Math.pow(this.x - d.x, 2) + Math.pow(this.y - d.y, 2));
    //     return distancia;
    // }

    // public equals(x: any): boolean {
    //     const e: State = x as State;
    //     return this.x === e.x && this.y === e.y;
    //   }
      
    // public hashCode(): number {
    //   let hash: number = 3;
    //   hash = 89 * hash + this.x;
    //   hash = 89 * hash + this.y;
    //   return hash;
    // }
    
    // public compareTo(x: any): number {
    //   const e: State = x as State;
    //   if (this.f === e.f) {
    //     return 0;
    //   } else {
    //     if (this.f < e.f) {
    //       return 1;
    //     } else {
    //       return -1;
    //     }
    //   }
    // }

    // public toString(): string {
    //   if (this.predecesor !== null) {
    //     return `(${this.x},${this.y}): oper = ${this.oper}: pred = (${this.predecesor.x},${this.predecesor.y}) + [ F = ${this.f} ]`;
    //   } else {
    //     return `(${this.x},${this.y}) [ F = ${this.f} ]`;
    //   }
    // }
      
      
//}