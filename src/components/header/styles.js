import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	padding-left: 2rem;
	padding-right: 2rem;
	justify-content: space-between;
	border-bottom: solid 2px ${colors.quaternaryColor};
`;

export { StyledHeader };
