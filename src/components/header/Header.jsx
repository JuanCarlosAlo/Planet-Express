
import Menu from "../menu/Menu"
import { StyledHeader } from "./styles"

const Header =()=>{
    return <StyledHeader>
        <h1>THE PLANETS</h1>
        <Menu/>
        <img src="/public/assets/icon-hamburger.svg" alt="" />
    </StyledHeader>
}

export default Header