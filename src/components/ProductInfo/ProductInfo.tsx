import { useLoaderData } from 'react-router-dom';
import type { Product } from '../../types/product.type';

const ProductInfo = () => {
	const data = useLoaderData() as Product;

	return <div>ProductInfo - {data.name}</div>;
};
export default ProductInfo;
