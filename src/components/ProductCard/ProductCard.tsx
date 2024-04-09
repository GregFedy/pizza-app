import { Link } from 'react-router-dom';

type ProductCardProps = {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	rating: number;
};

const ProductCard = (props: ProductCardProps) => {
	return (
		<Link to={`/product/${props.id}`}>
			<div className="w-80 border-white drop-shadow-[18px_18px_36px_rgba(211,209,216,0.25)]">
				<div
					className="relative mb-1 min-h-40 rounded-2xl"
					style={{
						backgroundImage: `url(http://localhost:4000/pizza-api-v1/${props.image}`,
					}}
				>
					<div className="absolute top-3 left-3 rounded-3xl bg-white px-3 py-1 text-xl">
						{props.price}&nbsp;
						<span className="text-orange">₽</span>
					</div>
					<button
						type="button"
						className="absolute top-3 right-3 h-[34px] w-[34px] rounded-full bg-orange hover:bg-orange-dark"
					>
						<img
							className="absolute top-[8px] right-[9px]"
							src="/add-to-cart-button-icon.svg"
							alt="Добавить в корзину"
						/>
					</button>
					<div className="-bottom-3 absolute left-3 flex rounded-2xl bg-white px-3 py-1 font-semibold text-xs drop-shadow-[0_6px_24px_rgba(254,114,76,0.3)]">
						{props.rating}&nbsp;
						<img src="/star-icon.svg" alt="Звезда" />
					</div>
				</div>
				<div className="p-3">
					<h3 className="font-semibold text-lg">{props.title}</h3>
					<p className="text-gray-dark text-sm">{props.description}</p>
				</div>
			</div>
		</Link>
	);
};
export default ProductCard;
