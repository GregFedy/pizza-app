import axios from 'axios';
import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { API_PREFIX } from './helpers/API';
import Layout from './layout/Layout';
import Cart from './pages/Cart/Cart';
import type { Product } from './types/product.type';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<h2>Загрузка</h2>}>
						<Menu />
					</Suspense>
				),
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/product/:id',
				element: <ProductInfo />,
				errorElement: <h2 className="text-xl">Ошибка в загрузке данных</h2>,
				loader: async ({ params }) => {
					const { data } = await axios.get<Product>(
						`${API_PREFIX}/products/${params.id}`,
					);
					return data;
				},
			},
		],
	},
]);

const App = () => {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};
export default App;
