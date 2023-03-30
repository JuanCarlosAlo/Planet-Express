import styled from 'styled-components';

const StyledArticleTitle = styled.h2`
	font-family: Antonio, sans-serif;
	font-size: 2.5rem;
	@media screen and (min-width: 768px) {
		font-size: 3rem;
	}
	@media screen and (min-width: 1024px) {
		font-size: 5rem;
	}
`;

export { StyledArticleTitle };
