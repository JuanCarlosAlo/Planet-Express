
import { v4 } from "uuid"
import ArticleImg from "../components/article-img/ArticleImg"
import ArticleTitle from "../components/article-title/ArticleTitle"

const Planet =({planetInfo})=>{
    console.log(planetInfo.imgPlanet)
    return <div>
        <ArticleImg img={planetInfo.imgPlanet}/>
        <ArticleTitle text={planetInfo.title}/>
        {
            planetInfo.info.info.map(element=>
                <div key={v4()}>{element.title}</div>
                )
        }
       
    </div>
}

export default Planet