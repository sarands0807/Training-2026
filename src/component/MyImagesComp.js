import React from "react";
import car from "../shared/images/car.jpg"

import constData from "../shared/constant/constantfile";

const MyImagesComp = () => {
    return(
        <div>
        <h2>This is my Images Component</h2>
        <img src={car} alt='car' height='400px' width='500px'/>
        <img src={constData.car2} alt='car2' height='400px' width='500px'/>

        </div>

     )
    
}

export default MyImagesComp;