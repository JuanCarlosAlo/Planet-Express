import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledSpecsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const StyledSpecsCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border: solid 1px ${colors.terciaryColor};
	@media screen and (min-width: 768px) {
		flex-direction: column;

		align-items: flex-start;
		width: 100%;
	}
`;
const StyledSpecsTitle = styled.div`
	color: ${colors.quaternaryColor};
	font-weight: 600;
`;

const StyledSpecsData = styled.div`
	font-size: 1.2rem;
	font-family: Antonio;
`;
export {
	StyledSpecsCard,
	StyledSpecsContainer,
	StyledSpecsTitle,
	StyledSpecsData
};
