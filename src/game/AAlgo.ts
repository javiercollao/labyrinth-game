import { PriorityQueue } from 'priorityqueuejs';

class Busqueda_Estrella implements Constantes {
  colaEstados: PriorityQueue<Estado>;
  sucesores: Array<Estado>;
  historial: Array<Estado>;
  pasos: Array<string>;
  index_pasos: number;
  inicial: Estado;
  objetivo: Estado;
  actual: Estado;
  entidad: Entidad_Estrella;
  exito: boolean;
  enemigo: Estado;

  constructor() {
    this.colaEstados = new PriorityQueue<Estado>();
    this.sucesores = [];
    this.historial = [];
    this.pasos = [];
    this.index_pasos = 0;
    this.inicial = new Estado(0, 0, "inicial", null);
    this.objetivo = new Estado(0, 0, "", null);
    this.actual = new Estado(0, 0, "", null);
    this.entidad = new Entidad_Estrella();
    this.exito = false;
    this.enemigo = new Estado(1, 3, "", null);
  }

  public busqueda(): void {
    this.evaluar(this.inicial);
    this.colaEstados.add(this.inicial);
    this.historial.push(this.inicial);

    while (!this.colaEstados.isEmpty() && !this.exito) {
      this.actual = this.colaEstados.poll();

      if (this.objetivo.equals(this.actual)) {
        this.objetivo = this.actual;
        this.exito = true;
      } else {
        this.procesarSucesores(this.actual);
      }
    }

    this.reconstruirSolucion();
  }

  public procesarSucesores(e: Estado): void {
    this.calcularSucesores(e);

    for (let i = 0; i < this.sucesores.length; i++) {
      if (!this.historial.some((estado) => estado.equals(this.sucesores[i]))) {
        this.colaEstados.add(this.sucesores[i]);
        this.historial.push(this.sucesores[i]);
      } else {
        const index = this.historial.findIndex((estado) => estado.equals(this.sucesores[i]));
        const enHistorial = this.historial[index];

        if (this.sucesores[i].f > enHistorial.f) {
          enHistorial.f = this.sucesores[i].f;
          enHistorial.g = this.sucesores[i].g;
          enHistorial.h = this.sucesores[i].h;
          enHistorial.predecesor = this.sucesores[i].predecesor;
        }
      }
    }

    this.sucesores = [];
  }

  public evaluar(nuevo: Estado): void {
    nuevo.g = nuevo.distanciaEuclidea(this.enemigo);
    nuevo.h = nuevo.distanciaEuclidea(this.objetivo);
    nuevo.f = (0.9 * nuevo.g) + (0.1 * nuevo.h);
  }

  public calcularSucesores(e: Estado): void {
    if (
      e.y > 0 &&
      entidad.mv.escenario.celdas[e.x][e.y - 1].tipo !== OBSTACULO &&
      entidad.mv.escenario.celdas[e.x][e.y - 1].tipo !== ADVERSARIO
    ) {
      const arriba = new Estado(e.x, e.y - 1, "arriba", e);
      this.evaluar(arriba);
      this.sucesores.push(arriba);
    }

    if (
      e.y < NUMERO_CELDAS_LARGO - 1 &&
      entidad.mv.escenario.celdas[e.x][e.y + 1].tipo !== OBSTACULO &&
      entidad.mv.escenario.celdas[e.x][e.y + 1].tipo !== ADVERSARIO
    ) {
      const abajo = new Estado(e.x, e.y + 1, "abajo", e);
      this.evaluar(abajo);
      this.sucesores.push(abajo);
    }

    if (
      e.x > 0 &&
      entidad.mv.escenario.celdas[e.x - 1][e.y].tipo !== OBSTACULO &&
      entidad.mv.escenario.celdas[e.x - 1][e.y].tipo !== ADVERSARIO
    ) {
      const izq = new Estado(e.x - 1, e.y, "izquierda", e);
      this.evaluar(izq);
      this.sucesores.push(izq);
    }

    if (
      e.x < NUMERO_CELDAS_ANCHO - 1 &&
      entidad.mv.escenario.celdas[e.x + 1][e.y].tipo !== OBSTACULO &&
      entidad.mv.escenario.celdas[e.x + 1][e.y].tipo !== ADVERSARIO
    ) {
      const der = new Estado(e.x + 1, e.y, "derecha", e);
      this.evaluar(der);
      this.sucesores.push(der);
    }
  }

  public reconstruirSolucion(): void {
    const solucion: Array<Estado> = [];
    let aux: Estado | null = this.objetivo;

    while (aux !== null) {
      solucion.push(aux);
      aux = aux.predecesor;
    }

    for (let i = solucion.length - 1; i >= 0; i--) {
      this.pasos.push(solucion[i].oper);
    }
  }

  public getPasos(): Array<string> {
    return this.pasos;
  }
}
