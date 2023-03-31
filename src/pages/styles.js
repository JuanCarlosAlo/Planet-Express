import styled from 'styled-components';

const StyledPlanetPage = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(4, 0.25fr);

		padding-left: 2rem;
		padding-right: 2rem;
		gap: 4rem;
	}
	@media screen and (min-width: 1024px) {
		display: grid;
		grid-template-columns: 0.65fr 0.35fr;

		padding-left: 2rem;
		padding-right: 2rem;
		gap: 4rem;
		margin-bottom: 4rem;
	}
`;

const StyledPlanetContent = styled.div`
	@media screen and (min-width: 768px) {
		grid-column: 1/3;
	}
	@media screen and (min-width: 1024px) {
		grid-column: 2;
	}
`;
const StyledPlanetInfo = styled.div`
	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
	}
	@media screen and (min-width: 1024px) {
		height: 400px;
	}
`;

export { StyledPlanetPage, StyledPlanetContent, StyledPlanetInfo };
