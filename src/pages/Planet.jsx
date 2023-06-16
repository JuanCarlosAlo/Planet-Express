import { useState } from 'react';
import ArticleLink from '../components/article-link/ArticleLink';
import ArticleSpecs from '../components/article-specs/ArticleSpecs';
import ArticleTitle from '../components/article-title/ArticleTitle';
import TabsImg from '../components/tabs-img/TabsImg';

import TabsText from '../components/tabs-text/TabsText';
import { StyledPlanetContent, StyledPlanetInfo, StyledPlanetPage } from './styles';
import TabsButtons from '../components/tabs-buttons/TabsMobile';

const Planet = ({ planetInfo }) => {
	const [tab, setTabs] = useState(0);
	return (
        <>
		<StyledPlanetPage>
			<TabsButtons
				tabs={planetInfo.info.description}
				color={planetInfo.color}
				setTabs={setTabs}
				tab={tab}
			/>
			
				<TabsImg
					size={planetInfo.size}
					img={planetInfo.info.description[tab].img}
					before={planetInfo.info.description[tab].before}
				/>
				<StyledPlanetContent>
					<StyledPlanetInfo>
						<ArticleTitle text={planetInfo.title} />
						<TabsText text={planetInfo.info.description[tab].text} />
						<ArticleLink link={planetInfo.info.description[tab].source}/>
					</StyledPlanetInfo>
					
				</StyledPlanetContent>
                </StyledPlanetPage>
				<ArticleSpecs specs={planetInfo.specs.info} />
                </>
		
	);
};

export default Planet;
