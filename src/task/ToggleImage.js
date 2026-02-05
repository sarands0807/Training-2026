import React, { useState } from 'react';

import batman from "../../shared/images/car.jpg";
import spiderman from "../../shared/images/car2.jpg";

export default function ToggleImage() {
    const [showFirst, setShowFirst] = useState(true);
    const img1 = car;
    const img2 = car2;

    const toggle = () => setShowFirst(prev => !prev);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>This is Task 4 - Toggle Images</h1>
            <img
                src={showFirst ? img1 : img2}
                alt="toggle"
                style={{ maxWidth: '100%', height: 'auto' }}
            />
            <br />
            <button onClick={toggle} style={{ marginTop: 8 }}>
                Toggle Image
            </button>
        </div>
    );
}