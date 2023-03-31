import { useState } from 'react';
import ArticleLink from '../components/article-link/ArticleLink';
import ArticleSpecs from '../components/article-specs/ArticleSpecs';
import ArticleTitle from '../components/article-title/ArticleTitle';
import TabsDesktop from '../components/tabs-desktop/TabsDesktop';
import TabsImg from '../components/tabs-img/TabsImg';
import TabsMobile from '../components/tabs-mobile/TabsMobile';
import TabsText from '../components/tabs-text/TabsText';
import { StyledPlanetContent, StyledPlanetInfo, StyledPlanetPage } from './styles';

const Planet = ({ planetInfo }) => {
	const [tab, setTabs] = useState(0);
	return (
		<>
			<TabsMobile
				tabs={planetInfo.info.description}
				color={planetInfo.color}
				setTabs={setTabs}
				tab={tab}
			/>
			<StyledPlanetPage>
				<TabsImg
					img={planetInfo.info.description[tab].img}
					before={planetInfo.info.description[tab].before}
				/>
				<StyledPlanetContent>
					<StyledPlanetInfo>
						<ArticleTitle text={planetInfo.title} />
						<TabsText text={planetInfo.info.description[tab].text} />
						<ArticleLink />
					</StyledPlanetInfo>
					<TabsDesktop tabs={planetInfo.info.description}
				color={planetInfo.color}
				setTabs={setTabs}
				tab={tab}
				/>
				</StyledPlanetContent>

				<ArticleSpecs specs={planetInfo.specs.info} />
			</StyledPlanetPage>
		</>
	);
};

export default Planet;
