import styled from 'styled-components';

const StyledImgContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
	@media screen and (min-width: 768px) {
		grid-column: 2/4;
	}
	@media screen and (min-width: 1024px) {
		grid-column: 1;
		margin-bottom: 0;
	}
`;
const StyledTabImg = styled.div`
	width: ${({ mobile }) => mobile};
	height: ${({ mobile }) => mobile};
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	background-image: url(${({ img }) => img});
	@media screen and (min-width: 768px) {
		width: 100%;
		width: ${({ tablet }) => tablet};
		height: ${({ tablet }) => tablet};
	}
	@media screen and (min-width: 1024px) {
		width: 100%;
		width: ${({ desktop }) => desktop};
		height: ${({ desktop }) => desktop};
	}
`;
const StyledTabImgBefore = styled.div`
	position: absolute;
	width: 163px;
	height: 199px;
	top: 30%;
	background-size: contain;
	background-image: ${({ before }) =>
		before !== undefined ? `url(${before})` : 'none'};
	@media screen and (min-width: 768px) {
		top: 60%;
	}
`;

export { StyledTabImg, StyledImgContainer, StyledTabImgBefore };
