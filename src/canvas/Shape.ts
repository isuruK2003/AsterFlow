export default interface Shape {
    top: number;
    left: number;
    height: number | undefined;
    width: number | undefined;
    radius: number | undefined;
    fill: string | undefined;
    stroke: string;
}
