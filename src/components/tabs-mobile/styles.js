import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledMobileTabsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
	margin-bottom: 4rem;
	font-size: 0.5625rem;
	letter-spacing: 1.2px;
	border-bottom: solid 2px ${colors.terciaryColor};

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const StyledTabElement = styled.div`
	position: relative;
	padding-top: 1rem;
	padding-bottom: 1rem;
	font-weight: 600;
	text-align: center;

	cursor: pointer;
	color: ${({ textcolor }) => textcolor};
	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background-color: ${({ bgcolor }) => bgcolor};
	}
`;

export { StyledMobileTabsContainer, StyledTabElement };
