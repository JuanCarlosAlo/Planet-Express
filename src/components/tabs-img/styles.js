import styled from 'styled-components';

const StyledImgContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
`;
const StyledTabImg = styled.div`
	position: relative;
	width: 100vw;
	height: 315px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	background-image: url(${({ img }) => img});
`;
const StyledTabImgBefore = styled.div`
	position: absolute;
	width: 163px;
	height: 199px;
	top: 50%;
	background-size: contain;
	background-image: ${({ before }) =>
		before !== undefined ? `url(${before})` : 'none'};
	@media screen and (min-width: 768px) {
		top: 60%;
	}
`;

export { StyledTabImg, StyledImgContainer, StyledTabImgBefore };
