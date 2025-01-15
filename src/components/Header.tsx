import logo from '../assets/calculator.png';

export default function Header() {
	return (
		<header id='header'>
			<img src={logo} alt='logo' />
			<h1>Savings Calculator</h1>
		</header>
	);
}
