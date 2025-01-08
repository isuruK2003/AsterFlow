export function DiagonalLine({ color = '#fff', style = {} }: { color?: string, style?: React.CSSProperties }) {
    return (
        <div style={{ display: "flex", height: "100%", width: "100%", ...style }}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flex: 1 }}>
                <line x1={24} y1={0} x2={0} y2={24} style={{ stroke: color, strokeWidth: 2 }} />
            </svg>
        </div>
    );
}
