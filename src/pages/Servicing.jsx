import { useContext } from 'react';
import Service from '../components/Service/Service';
import { Product } from '../contexts/ProductContext';

const Servicing = () => {
	const { products, loading, error } = useContext(Product);
	return (
		<Service
			products={products?.slice(0, 6)}
			loading={loading}
			error={error}
		/>
	);
};

export default Servicing;
