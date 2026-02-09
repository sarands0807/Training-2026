import React from 'react'

const DataListComp = ({data}) => {
    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}

export default DataListComp


