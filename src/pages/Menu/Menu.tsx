import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import MenuList from '../../components/MenuList/MenuList';
import Search from '../../components/Search/Search';
import Heading from '../../components/ui/Heading';
import { API_PREFIX } from '../../helpers/API';
import type { Product } from '../../types/product.type';

const Menu = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			await new Promise<void>((resolve) => {
				setTimeout(resolve, 2000);
			});
			const { data } = await axios.get<Product[]>(`${API_PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (error) {
			if (error instanceof AxiosError) {
				setError(error.message);
			}
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return (
		<>
			<div className="mb-10 flex justify-between">
				<Heading>Меню</Heading>
				<Search placeholder="Введите блюдо или состав" />
			</div>
			<div>
				{isLoading && <h2>Загрузка данных...</h2>}
				{!isLoading && <MenuList products={products} />}
				{error && error}
			</div>
		</>
	);
};
export default Menu;
