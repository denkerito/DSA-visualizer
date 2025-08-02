interface Point{
    x:number;
    y:number;
}


interface EdgeProps{
    from:Point;
    to: Point;
    directed: boolean;
    label: string;
}


function Edge({from, to, directed = false, label}: EdgeProps){
    //vector from point from to point to
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    //vector norm
    const length = Math.sqrt(dx * dx + dy * dy);
    //vector normalisation, it only represents the direction, regardless of distance.
    const unitX = dx / length;
    const unitY = dy / length;
    
    const offset = 24; //node radius
    const startX = from.x + unitX * offset;
    const startY = from.y + unitY * offset;
    const endX = to.x - unitX * offset;
    const endY = to.y - unitY * offset;

    return (
        <g>
        <line
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            className="stroke-gray-400 stroke-2"
        />
        {directed && (
            <polygon
            points={`${endX},${endY} ${endX - 8 * unitX + 4 * unitY},${endY - 8 * unitY - 4 * unitX} ${endX - 8 * unitX - 4 * unitY},${endY - 8 * unitY + 4 * unitX}`}
            className={"stroke-gray-400".replace('stroke', 'fill')}
            />
        )}
        {label && (
        <text
          x={(startX + endX) / 2}
          y={(startY + endY) / 2}
          className="fill-gray-600 text-sm font-medium"
          textAnchor="middle"
          dy="-5"
        >
          {label}
        </text>
      )}
        </g>
    );
};


export default Edge;