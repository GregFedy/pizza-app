import Heading from '../../components/ui/Heading';
import Search from '../../components/Search/Search';

const Menu = () => {
	return (
		<div className="flex justify-between">
			<Heading>Меню</Heading>
			<Search placeholder="Введите блюдо или состав" />
		</div>
	);
};
export default Menu;
