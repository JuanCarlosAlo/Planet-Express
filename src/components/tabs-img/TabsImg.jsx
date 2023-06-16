import { StyledImgContainer, StyledTabImg, StyledTabImgBefore } from "./styles"

const TabsImg =({img, before,size})=>{
    console.log(img)
    return <StyledImgContainer>
        <StyledTabImg
        mobile={size.mobile}
        tablet={size.tablet}
        desktop={size.desktop}
        img={img}/>
        <StyledTabImgBefore before={before} />
    </StyledImgContainer> 
}

export default TabsImg