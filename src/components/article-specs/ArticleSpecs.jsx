import { StyledSpecsCard, StyledSpecsContainer, StyledSpecsData, StyledSpecsTitle } from "./styles"

const ArticleSpecs =({specs})=>{
    return <StyledSpecsContainer>
        {
            specs.map(element=>
                <StyledSpecsCard key={element.id}>
                    <StyledSpecsTitle>{element.text}</StyledSpecsTitle>
                    <StyledSpecsData>{element.data}</StyledSpecsData>
                </StyledSpecsCard>
                )
        }

    </StyledSpecsContainer>
}

export default ArticleSpecs