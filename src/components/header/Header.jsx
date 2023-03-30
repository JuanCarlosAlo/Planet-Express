import { useState } from 'react';
import Menu from '../menu/Menu';
import { StyledHeader, StyledHeaderTitle, StyledMenuHambureger } from './styles';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<StyledHeader>
			<StyledHeaderTitle>THE PLANETS</StyledHeaderTitle>
			<Menu open={open}/>
			<StyledMenuHambureger onClick={() => setOpen(!open)} src={handleMenu(open)} alt='' />
		</StyledHeader>
	);
};

const handleMenu = open => {
	if (open) {
		return '/assets/icon-hamburger.svg';
	} else {
		return '/assets/icon-close.svg';
	}
};
export default Header;
