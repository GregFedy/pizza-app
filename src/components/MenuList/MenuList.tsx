import type { Product } from '../../types/product.type';
import ProductCard from '../ProductCard/ProductCard';

type MenuListProps = {
	products: Product[];
};

const MenuList = ({ products }: MenuListProps) => {
	return (
		<div className="flex flex-wrap gap-x-11 gap-y-8">
			{products.map((product) => (
				<ProductCard
					id={product.id}
					title={product.name}
					description={product.ingredients}
					price={product.price}
					image={product.image}
					rating={product.rating}
					key={product.id}
				/>
			))}
		</div>
	);
};

export default MenuList;
