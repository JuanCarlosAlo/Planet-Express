import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledTabsDesktopContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 1rem;
`;

const StyledTabsDesktop = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	width: 100%;
	padding: 1rem;
	letter-spacing: 1.2px;
	border: 2px solid ${colors.terciaryColor};
	background-color: ${({ bgcolor }) => bgcolor};
	cursor: pointer;
`;

export { StyledTabsDesktop, StyledTabsDesktopContainer };
