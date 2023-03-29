import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledMenu = styled.ul`
	position: absolute;
	top: 74px;
	left: 0;
	display: flex;
	flex-direction: column;
	width: 100vw;
`;

const StyledMenuItem = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	padding: 1rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
	width: 90%;
	font-size: 1.5rem;
	color: ${colors.terciaryColor};
	border-bottom: solid 1px ${colors.quaternaryColor};
	&.active {
		color: ${colors.mainColor};
	}
`;

const StyledMenuBall = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background-color: ${({ bgColor }) => bgColor};
`;

const MenuItemContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export { StyledMenu, StyledMenuItem, StyledMenuBall, MenuItemContainer };
