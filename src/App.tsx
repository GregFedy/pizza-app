import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Layout from './layout/Layout';
import Menu from './pages/Menu/Menu';
import ProductInfo from './components/ProductInfo/ProductInfo';
import axios from 'axios';
import { API_PREFIX } from './helpers/API';
import type { Product } from './types/product.type';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Menu />,
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
