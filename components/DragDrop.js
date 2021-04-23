import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls, removeElements } from 'react-flow-renderer';

const initialElements = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Node 1' },
        position: { x: 5, y: 5 }
    }
];

const flowStyles = { height: 300 };

const DragDrop = () => {
    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));
    const nodeColor = (node) => {
        if (node.type === 'input') return 'blue';
        if (node.type === 'output') return 'green';
        if (node.type === 'default') return 'red';

        return 'gray';
    };

    return (
        <div>
            <button>Add Node</button>
            <ReactFlow elements={elements} style={flowStyles} onElementsRemove={onElementsRemove}>
                <MiniMap nodeColor={nodeColor} />
                <Controls />
            </ReactFlow>
        </div>
    );
};
export default DragDrop;
