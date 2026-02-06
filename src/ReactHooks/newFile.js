import React from 'react';

return (
    <div>
        <h2>This is UseStateComp</h2>
        <p>Count:<strong>{count}</strong></p>
        <button type='button' onClick={() => updateCount()}>count++</button>{" "}
        <button type='button' onClick={() => setCount(count + 1)}>count++</button><hr />
        <p>Name:<strong>{name}</strong></p>
        <button type="button" onClick={() => setName("Saran")}>change name</button>
        <ul>

            {course.map((value, index) => {
                return <li key={index}>{value}</li>;
            })}
        </ul>

    </div>
);
