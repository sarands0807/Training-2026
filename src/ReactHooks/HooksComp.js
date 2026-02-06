import React from 'react'
import { Outlet } from 'react-router-dom';

export const HooksComp = () => {
    return (
        <div>
            {/*<h1>THis is HooksComp</h1>*/}
           {/*<Outlet/>*/}
           <div className="card order-primary">
            <div className="card-header border-primary">
            <Link to="usestate" className="btn btn-success btn-sm">useState</Link>
            </div>
           </div>
        </div>
    )
}
export default HooksComp;