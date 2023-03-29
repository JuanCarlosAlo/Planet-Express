
import { menuItems } from "../../constants/menuItems"
import { StyledMenu, StyledMenuBall, StyledMenuItem ,MenuItemContainer} from "./styles"

const Menu =()=>{
    return(
        <nav>
        <StyledMenu>
            {
                menuItems.map(element=>{
               
                    return <StyledMenuItem key={element.id} to="/venus">
                        <MenuItemContainer>
                        <StyledMenuBall bgColor={element.color}></StyledMenuBall>
                        <div>{element.text}</div>
                        </MenuItemContainer>
                        <img src="/public/assets/icon-chevron.svg" alt="" />
                        
                    </StyledMenuItem>
                }
                    
                    
                    )
            }
        </StyledMenu>
    </nav>
    )
}

export default Menu