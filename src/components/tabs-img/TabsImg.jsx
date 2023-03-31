import { StyledImgContainer, StyledTabImg, StyledTabImgBefore } from "./styles"

const TabsImg =({img, before})=>{
    console.log(img)
    return <StyledImgContainer>
        <StyledTabImg img={img}/>
        <StyledTabImgBefore before={before} />
    </StyledImgContainer> 
}

export default TabsImg