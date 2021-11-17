import { useContext } from 'react';
import Cars from '../components/Cars/Cars';
import Deals from '../components/Deals/Deals';
import Hero from '../components/Hero/Hero';
import Review from '../components/Review/Review';
import { Product } from '../contexts/ProductContext';

const Home = () => {
	const { products, loading, success, error } = useContext(Product);

	return (
		<>
			<Hero />
			<Cars
				products={products?.slice(0, 6)}
				loading={loading}
				success={success}
				error={error}
			/>
			<Review />
			<Deals />
		</>
	);
};

export default Home;
