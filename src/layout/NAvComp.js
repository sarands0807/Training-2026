import React from 'react'
import { Link } from 'react-router-dom'


export const NAvComp = () => {
    return (
        <div>
            <h2>THis is Nav Comp</h2>
            <Link to = "myimages" className='btn btn-primary btn--sm'>MyImages</Link>{" "}
            <Link to = "virtualDOM" className='btn btn-primary btn--sm'>VirtualDOMComp</Link>{" "}
             <Link to = "productdetail" className='btn btn-primary btn--sm'>ProductDetailComp</Link>{" "}
              <Link to = "Datalist" className='btn btn-primary btn--sm'>DataListComp</Link>{" "}
                <Link to = "formval" className='btn btn-primary btn--sm'>FormValComp</Link>{" "}
        </div>
    )
}
export default NAvComp;