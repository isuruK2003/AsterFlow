import { Edge } from "./Edge";

export class Vertex {
    id: number;
    name: string;
    value: number;
    edges: Edge[];
    parent: Vertex | null;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.value = Infinity;
        this.edges = [];
        this.parent = null;
    }

    addEdge(edge: Edge): void {
        this.edges.push(edge);
    }
}
