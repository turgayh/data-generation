/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
const gateway1 = require('../data/gateway1.json');
const gateway2 = require('../data/gateway2.json');
const styles = require('../styles/sidebar.module.css');

const Sidebar = () => {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);

    const handleChangeToggle1 = () => {
        setToggle1(!toggle1);
    };
    const handleChangeToggle2 = () => {
        setToggle2(!toggle2);
    };
    const onDragStart = (event, id, data) => {
        event.dataTransfer.setData('applicationId', id);
        event.dataTransfer.setData('service/data', JSON.stringify(data));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div>
            <div className={styles.title} onClick={handleChangeToggle1}>
                {gateway1.name}
            </div>

            {gateway1 && (
                <div hidden={toggle1}>
                    {gateway1.services.map((service, index) => (
                        <div
                            className={styles.item}
                            key={index}
                            onDragStart={(event) => onDragStart(event, gateway1.uniqueId, service)}>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            )}
            <div className={styles.title} onClick={handleChangeToggle2}>
                {gateway2.name}
            </div>

            {gateway2 && (
                <div hidden={toggle2}>
                    {gateway2.services.map((service, index) => (
                        <div
                            className={styles.item}
                            key={index}
                            onDragStart={(event) => onDragStart(event, gateway2.uniqueId, service)}>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Sidebar;
