import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledMenu = styled.ul`
	position: absolute;
	top: 74px;
	left: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	background-color: ${colors.secondaryColor};
	transition: transform 0.6s ease-in-out;
	z-index: 10;
	transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
	@media screen and (min-width: 768px) {
		position: static;
		flex-direction: row;
		width: auto;
		transform: translateX(0);
	}
`;

const StyledMenuItem = styled(NavLink)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	padding-top: 2rem;
	padding-bottom: 2rem;
	padding-left: 2rem;
	width: 90%;
	font-size: 1.5rem;
	text-align: center;
	color: ${colors.terciaryColor};
	border-bottom: solid 1px ${colors.terciaryColor};
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 5px;
		transform: translateX(50%);

		background-color: transparent;
	}
	@media screen and (min-width: 768px) {
		border-bottom: none;
		justify-content: center;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 1rem;
		width: 100px;
	}
	@media screen and (min-width: 1024px) {
		border-bottom: none;
		justify-content: center;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 1rem;
		width: 100px;

		&.active {
			&::before {
				background-color: ${({ bgcolor }) => bgcolor};
			}
		}
	}

	&::after {
		content: '';
		position: absolute;
		top: 32px;
		left: 0px;
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
