import { Route, Routes } from "react-router-dom"

import { planets } from "../constants/planet"
import Planet from "../pages/Planet"

const Router=()=>{
    return(
        <Routes>
            <Route path="/" element ={<Planet planetInfo={planets.mercury}/>}/>
            <Route path="/venus" element ={<Planet planetInfo={planets.venus}/>}/>
            <Route path="/earth" element ={<Planet planetInfo={planets.earth}/>}/>
            <Route path="/mars" element ={<Planet planetInfo={planets.mars}/>}/>
            <Route path="/jupiter" element ={<Planet planetInfo={planets.jupiter}/>}/>
            <Route path="/saturn" element ={<Planet planetInfo={planets.saturn}/>}/>
            <Route path="/uranus" element ={<Planet planetInfo={planets.uranus}/>}/>
            <Route path="/neptune" element ={<Planet planetInfo={planets.neptune}/>}/>

        </Routes>
    )
}

export default Router