import { useState } from 'react';
import Menu from '../menu/Menu';
import { StyledHeader, StyledMenuHambureger } from './styles';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<StyledHeader>
			<h1>THE PLANETS</h1>
			<Menu open={open}/>
			<StyledMenuHambureger onClick={() => setOpen(!open)} src={handleMenu(open)} alt='' />
		</StyledHeader>
	);
};

const handleMenu = open => {
	if (open) {
		return '/assets/icon-close.svg';
	} else {
		return '/assets/icon-hamburger.svg';
	}
};
export default Header;
