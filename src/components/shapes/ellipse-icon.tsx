export function EllipseIcon({ 
    color = '#fff', 
    style = {}, 
    cx = 12, 
    cy = 12, 
    rx = 10, 
    ry = 6 
}: { 
    color?: string, 
    style?: React.CSSProperties, 
    cx?: number, 
    cy?: number, 
    rx?: number, 
    ry?: number 
}) {
    return (
        <div style={{ display: "flex", height: "100%", width: "100%", ...style }}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flex: 1 }}>
                <ellipse 
                    cx={cx} 
                    cy={cy} 
                    rx={rx} 
                    ry={ry} 
                    style={{ fill: "none", stroke: color, strokeWidth: 2 }} 
                />
            </svg>
        </div>
    );
}
