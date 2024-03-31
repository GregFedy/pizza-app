import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Layout from './layout/Layout';
import Menu from './pages/Menu/Menu';
import ProductInfo from './components/ProductInfo/ProductInfo';

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
