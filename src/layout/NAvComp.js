import React from 'react'
import { Link } from 'react-router-dom'


export const NAvComp = () => {
    return (
        <div>
            <h2>THis is Nav Comp</h2>
            <Link to = "myimages" className='btn btn-primary btn--sm'>MyImages</Link>{" "}
            <Link to = "virtualDOM" className='btn btn-primary btn--sm'>VirtualDOMComp</Link>{" "}
        </div>
    )
}
export default NAvComp;