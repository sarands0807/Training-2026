import React from 'react'
import { Outlet } from 'react-router-dom';
import NAvComp from './NAvComp';
import VirtualDOMComp from '../component/VirtualDOMComp';

const DashboardComp = () => {
  return (
    <div className="container">
        {/*<h2>This is Dashboard Component</h2>*/}
        <div className="card border-primary">
            <div className="card-header border-primary">
               <NAvComp/>
            </div>
            <div className="card-body border-primary">
                <Outlet/>
            </div>
            <div className="card-footer border-primary">
                card footer
            </div>
            
        </div>
        <Outlet/>
      
    </div>
  )
}
export default DashboardComp;