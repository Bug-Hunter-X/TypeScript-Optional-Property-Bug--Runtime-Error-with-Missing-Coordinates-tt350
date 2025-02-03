function printCoord(pt: { x?: number; y?: number }) {
    const x = pt.x === undefined ? 0 : pt.x; // Handle missing x
    const y = pt.y === undefined ? 0 : pt.y; // Handle missing y
    console.log("The coordinate's x value is " + x);
    console.log("The coordinate's y value is " + y);
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3 });
printCoord({});