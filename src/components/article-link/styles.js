import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledLinkContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	color: ${colors.quaternaryColor};
	@media screen and (min-width: 768px) {
		justify-content: flex-start;
		padding-left: 0;
	}
`;

const StyledLinkElement = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	font-weight: 600;
	padding: 0.5rem;
	cursor: pointer;
	&::before {
		content: '';
		position: absolute;
		bottom: 25%;
		left: 0.5rem;
		width: 65%;
		height: 2px;
		background-color: ${colors.terciaryColor};
	}
`;

export { StyledLinkContainer, StyledLinkElement };
