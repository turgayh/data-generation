/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import ReactFlow, { Controls, Background } from 'react-flow-renderer';

const initialElements = [
    {
        id: '1',
        type: 'default',
        data: { label: 'Node 1' },
        position: { x: 80, y: 100 }
    },
    {
        id: '2',
        type: 'default',
        data: {
            onclick: () => {
                alert('hello node');
            }
        },
        position: { x: 50, y: 45 },
        style: { border: '1px solid #777' }
    },
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        label: 'updatable edge'
    }
];

const flowStyles = { height: 300 };

const DragDrop = () => {
    const [elements, setElements] = useState(initialElements);
    const [idx, setIdx] = useState(3);

    function addNewNode() {
        setElements([
            ...elements,
            {
                id: idx.toString(),
                type: 'default',
                position: { x: 50, y: 75 },
                data: { label: 'hello' }
            }
        ]);
        setIdx(idx + 1);
    }

    return (
        <div>
            <button onClick={addNewNode}>Add Node</button>
            <button
                onClick={() => {
                    console.log(elements);
                }}>
                Show Data
            </button>

            <ReactFlow elements={elements} style={flowStyles}>
                <Controls />
                <Background color="red" gap={16} />
            </ReactFlow>
            <br></br>
        </div>
    );
};
export default DragDrop;
