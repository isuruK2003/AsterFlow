import { Vertex } from "./Vertex";

export class Edge {
    to: Vertex;
    weight: number;

    constructor(to: Vertex, weight: number) {
        this.to = to;
        this.weight = weight;
    }
}
