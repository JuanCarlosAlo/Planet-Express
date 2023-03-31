import { colors } from "../../constants/colors"
import { StyledTabsDesktop, StyledTabsDesktopContainer } from "./styles"

const TabsDesktop =({tabs, color,setTabs,tab })=>{
    return <StyledTabsDesktopContainer>
        {tabs.map((element, index) => (
				<StyledTabsDesktop
					onClick={() => setTabs(index)}
					key={element.id}
					bgcolor={index === tab ? color : 'transparent'}
					textcolor={index === tab ? `${colors.mainColor}` : `${colors.terciaryColor}`}
				>
					{element.title}
				</StyledTabsDesktop>
			))}
    </StyledTabsDesktopContainer>
}

export default TabsDesktop