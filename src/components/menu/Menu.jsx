
import { menuItems } from "../../constants/menuItems"
import { StyledMenu,  StyledMenuItem ,MenuItemContainer, StyledMenuIcon} from "./styles"

const Menu =({open})=>{
   
    return(
        <nav>
        <StyledMenu open={open}>
            {
                menuItems.map(element=>{
               
                    return <StyledMenuItem  bgcolor={element.color} key={element.id} to={element.route} >
                        <MenuItemContainer>
                        <div>{element.text}</div>
                        </MenuItemContainer>
                        <StyledMenuIcon src="/assets/icon-chevron.svg" alt="" />
                        
                    </StyledMenuItem>
                }
                    
                    
                    )
            }
        </StyledMenu>
    </nav>
    )
}

export default Menu