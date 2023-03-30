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
	transition: transform 0.6s ease-in-out;
	transform: ${({ open }) => {
		console.log(open);
		if (open) {
			return 'translateX(100%)';
		} else {
			return 'translateX(0px)';
		}
	}};
	@media screen and (min-width: 768px) {
		position: static;
		flex-direction: row;
		width: auto;
	}
`;

const StyledMenuItem = styled(NavLink)`
	position: relative;
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
	border-bottom: solid 1px ${colors.terciaryColor};
	@media screen and (min-width: 768px) {
		border-bottom: none;
		font-size: 1rem;
		width: 100px;
	}

	&::after {
		content: '';
		position: absolute;
		top: 32px;
		left: -20px;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background-color: ${colors.terciaryColor};
		@media screen and (min-width: 768px) {
			display: none;
		}
	}
	&.active {
		color: ${colors.mainColor};
		&::after {
			background-color: ${({ bgcolor }) => bgcolor};
		}
	}
`;

const StyledMenuIcon = styled.img`
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const MenuItemContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export { StyledMenu, StyledMenuItem, MenuItemContainer, StyledMenuIcon };
