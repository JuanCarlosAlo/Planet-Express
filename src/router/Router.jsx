import { Route, Routes } from "react-router-dom"

const Router=()=>{
    return(
        <Routes>
            <Route path="/" element ={'MERCURY'}/>
            <Route path="/venus" element ={'VENUS'}/>
            <Route path="/earth" element ={'EARTH'}/>
            <Route path="/mars" element ={'MARS'}/>
            <Route path="/jupiter" element ={'JUPITER'}/>
            <Route path="/saturn" element ={'SATURN'}/>
            <Route path="/uranus" element ={'URANUS'}/>
            <Route path="/neptune" element ={'SATURN'}/>

        </Routes>
    )
}

export default Router