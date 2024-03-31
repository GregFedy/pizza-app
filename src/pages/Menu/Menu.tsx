import Heading from '../../components/ui/Heading';
import Search from '../../components/Search/Search';
import ProductCard from '../../components/ProductCard/ProductCard';

const Menu = () => {
	return (
		<>
			<div className="mb-10 flex justify-between">
				<Heading>Меню</Heading>
				<Search placeholder="Введите блюдо или состав" />
			</div>
			<div>
				<ProductCard
					id={1}
					title="Наслаждение"
					description="Салями, руккола, помидоры, оливки"
					price={300}
					image="/image-80.png"
					rating={4.5}
				/>
			</div>
		</>
	);
};
export default Menu;
