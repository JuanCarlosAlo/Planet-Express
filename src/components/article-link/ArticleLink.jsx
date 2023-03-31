import { StyledLinkContainer, StyledLinkElement } from "./styles"

const ArticleLink =()=>{
    return <StyledLinkContainer>
        <div>Source :</div>
        <StyledLinkElement>Wikipedia <img src="/assets/icon-source.svg" alt="" /></StyledLinkElement>
    </StyledLinkContainer>
}

export default ArticleLink