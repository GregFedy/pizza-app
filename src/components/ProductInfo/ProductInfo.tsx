import { useParams } from 'react-router-dom';

const ProductInfo = () => {
	console.log(useParams());
	const { id } = useParams();
	return <div>ProductInfo {id}</div>;
};
export default ProductInfo;
