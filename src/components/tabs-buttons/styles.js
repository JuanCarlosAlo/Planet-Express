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
		grid-row: 2;
		grid-column: 3/5;
		flex-direction: column;
		margin-bottom: 0;
		justify-content: center;
		gap: 1rem;
		border: transparent;
	}
	@media screen and (min-width: 1024px) {
		grid-column: 2;
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
	@media screen and (min-width: 768px) {
		font-size: 0.5625rem;
		padding-left: 4rem;
		text-align: left;
		border: solid 2px ${colors.terciaryColor};
		background-color: ${({ bgcolor }) => bgcolor};
	}
	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background-color: ${({ bgcolor }) => bgcolor};

		@media screen and (min-width: 768px) {
			content : '0${({ number }) => number}';
			height:1rem;
			width:1rem;
			color: ${colors.quaternaryColor}
			background-color:transparent ;
			top: 1rem;
			left: 1.25rem;
		}
	}
`;

export { StyledMobileTabsContainer, StyledTabElement };
