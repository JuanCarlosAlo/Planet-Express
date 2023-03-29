import { Route, Routes } from "react-router-dom"

const Router=()=>{
    return(
        <Routes>
            <Route path="/" element ={'MERCURY'}/>
            <Route path="/venus" element ={'VENUS'}/>
            <Route path="/earth" element ={'EARTH'}/>

        </Routes>
    )
}

export default Router