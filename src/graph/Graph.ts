import { Vertex } from "./Vertex";
import { VertexNotFoundError } from "./VertexNotFoundError";

export class Graph {
    private vertices: Vertex[] = [];

    addVertex(vertex: Vertex): void {
        this.vertices.push(vertex);
    }

    getVertexById(id: number): Vertex {
        const vertex = this.vertices.find(v => v.id === id);
        if (!vertex) {
            throw new VertexNotFoundError(`Node with the ID ${id} not found`);
        }
        return vertex;
    }

    getVertexByName(name: string): Vertex {
        const vertex = this.vertices.find(v => v.name === name);
        if (!vertex) {
            throw new VertexNotFoundError(`Node with the name ${name} not found`);
        }
        return vertex;
    }

    findShortestPath(start: Vertex, end: Vertex): Vertex[] {
        start.value = 0;

        const pq: Vertex[] = [...this.vertices];
        while (pq.length > 0) {
            // Find the vertex with the smallest value in the priority queue
            pq.sort((a, b) => a.value - b.value);
            const current = pq.shift()!;

            for (const edge of current.edges) {
                const neighbor = edge.to;
                const newValue = current.value + edge.weight;

                if (newValue < neighbor.value) {
                    neighbor.value = newValue;
                    neighbor.parent = current;
                }
            }
        }

        // Reconstruct the shortest path
        const shortestPath: Vertex[] = [];
        let temp: Vertex | null = end;
        while (temp !== null) {
            shortestPath.push(temp);
            temp = temp.parent;
        }
        return shortestPath.reverse();
    }
}
