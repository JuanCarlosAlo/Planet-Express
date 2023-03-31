
import { colors } from '../../constants/colors';
import { StyledMobileTabsContainer, StyledTabElement } from './styles';

const TabsMobile = ({ tabs, color,setTabs,tab }) => {
	
	return (
		<StyledMobileTabsContainer>
			{tabs.map((element, index) => (
				<StyledTabElement
					onClick={() => setTabs(index)}
					key={element.id}
					bgcolor={index === tab ? color : 'transparent'}
					textcolor={index === tab ? `${colors.mainColor}` : `${colors.terciaryColor}`}
				>
					{element.title}
				</StyledTabElement>
			))}
		</StyledMobileTabsContainer>
	);
};

export default TabsMobile;
