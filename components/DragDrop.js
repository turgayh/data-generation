/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import ReactFlow, {
    Controls,
    Background,
    ReactFlowProvider,
    addEdge,
    removeElements
} from 'react-flow-renderer';

const initialElements = [];

const flowStyles = { height: window.innerHeight - 25 };

const DragDrop = () => {
    const [elements, setElements] = useState(initialElements);
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [idx, setIdx] = useState(1);
    const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);
    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };
    const onConnect = (params) => setElements((els) => addEdge(params, els));
    const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));

    const onDrop = (event) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const appId = event.dataTransfer.getData('applicationId');
        let data = event.dataTransfer.getData('service/data');
        data = JSON.parse(data);
        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top
        });
        const newNode = {
            id: idx.toString(),
            serviceId: data.id,
            applicationId: appId,
            position,
            request: data.request,
            response: data.response,
            data: { label: `${data.description}` }
        };
        setIdx(idx + 1);

        setElements((es) => es.concat(newNode));
    };

    return (
        <div>
            <button
                onClick={() => {
                    console.log(elements);
                }}>
                Show Data
            </button>
            <ReactFlowProvider>
                <div ref={reactFlowWrapper}>
                    <ReactFlow
                        elements={elements}
                        style={flowStyles}
                        onConnect={onConnect}
                        onDrop={onDrop}
                        onElementClick={(e, element) => {
                            alert(e.values);
                            console.log(element);
                        }}
                        onDragOver={onDragOver}
                        onElementsRemove={onElementsRemove}
                        onLoad={onLoad}>
                        <Controls />
                        <Background color="red" gap={16} />
                    </ReactFlow>
                </div>
            </ReactFlowProvider>
            <br></br>
        </div>
    );
};
export default DragDrop;
