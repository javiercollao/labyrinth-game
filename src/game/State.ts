export default class State {
    
    public x: number
    public y: number
    public oper: string;
    public predecesor: State | null
    public f: number
    public g: number
    public h: number
  
    constructor(x: number, y: number, oper: string, predecesor: State | null) {
      this.x = x
      this.y = y
      this.oper = oper
      this.predecesor = predecesor
      this.f = 0
      this.g = 0
      this.h = 0
    }

    public distanciaEuclidea(d: State): number {
        const distancia: number = Math.sqrt(Math.pow(this.x - d.x, 2) + Math.pow(this.y - d.y, 2));
        return distancia;
    }

    public equals(x: any): boolean {
        const e: State = x as State;
        return this.x === e.x && this.y === e.y;
      }
      
    public hashCode(): number {
      let hash: number = 3;
      hash = 89 * hash + this.x;
      hash = 89 * hash + this.y;
      return hash;
    }
    
    public compareTo(x: any): number {
      const e: State = x as State;
      if (this.f === e.f) {
        return 0;
      } else {
        if (this.f < e.f) {
          return 1;
        } else {
          return -1;
        }
      }
    }
      
      
}