import type { Product } from '../../types/product.type';
import ProductCard from '../ProductCard/ProductCard';

type MenuListProps = {
	products: Product[];
};

const MenuList = ({ products }: MenuListProps) => {
	return products.map((product) => (
		<ProductCard
			id={product.id}
			title={product.name}
			description={product.ingredients}
			price={product.price}
			image={product.image}
			rating={product.rating}
			key={product.id}
		/>
	));
};

export default MenuList;
