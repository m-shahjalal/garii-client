import { useContext } from 'react';
import Cars from '../components/Cars/Cars';
import { Product } from '../contexts/ProductContext';

const Trending = () => {
	const { products, loading, success, error } = useContext(Product);
	return (
		<Cars
			products={products}
			loading={loading}
			success={success}
			error={error}
		/>
	);
};

export default Trending;
