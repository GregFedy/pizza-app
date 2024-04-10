import { Await, useLoaderData } from 'react-router-dom';
import type { Product } from '../../types/product.type';
import { Suspense } from 'react';

const ProductInfo = () => {
	const data = useLoaderData() as {
		data: Product;
	};

	return (
		<Suspense fallback={<h2 className="text-xl">Загрузка данных...</h2>}>
			<Await resolve={data.data}>
				{({ data }: { data: Product }) => <>Product - {data.name}</>}
			</Await>
		</Suspense>
	);
};
export default ProductInfo;
