import React from 'react'
import { Outlet } from 'react-router-dom'
function VirtualDOMComp() {
    return (
        <div>
            <h1>This is VirtualDOMComp</h1>
            <Outlet/>
        </div>
    )
}

export default VirtualDOMComp;
