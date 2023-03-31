import { StyledLinkContainer, StyledLinkElement } from "./styles"

const ArticleLink =({link})=>{
    return <StyledLinkContainer>
        <div>Source :</div>
  
        <StyledLinkElement target="_blank" href={link}>Wikipedia <img src="/assets/icon-source.svg" alt='' /></StyledLinkElement>
    </StyledLinkContainer>
}

export default ArticleLink