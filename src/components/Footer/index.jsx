import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Nacho Domínguez
			<small className={Styles.byline}>Senior software developer</small>
		</footer>
	);
}
export default Footer;
