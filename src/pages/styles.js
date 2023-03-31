import styled from 'styled-components';

const StyledPlanetPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 1rem;
	padding-right: 1rem;
	@media screen and (min-width: 768px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

const StyledPlanetContent = styled.div`
	@media screen and (min-width: 768px) {
		display: flex;
		align-items: center;
		gap: 4rem;
	}
`;
const StyledPlanetInfo = styled.div`
	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
	}
`;

export { StyledPlanetPage, StyledPlanetContent, StyledPlanetInfo };
