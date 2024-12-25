export class VertexNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "VertexNotFound";
    }
}
