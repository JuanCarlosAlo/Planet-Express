import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	padding-left: 2rem;
	padding-right: 2rem;
	justify-content: space-between;
	border-bottom: solid 2px ${colors.terciaryColor};
	@media screen and (min-width: 768px) {
		justify-content: space-between;
		flex-direction: column;
		margin-bottom: 6rem;
	}
	@media screen and (min-width: 1024px) {
		justify-content: space-between;
		flex-direction: row;
	}
`;
const StyledHeaderTitle = styled.h1`
	font-family: Antonio, sans-serif;
	font-size: 1.75rem;
`;

const StyledMenuHambureger = styled.img`
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export { StyledHeader, StyledMenuHambureger, StyledHeaderTitle };
