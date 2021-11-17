import { useEffect, useState } from 'react';
import axios from '../utils/axios';

const useProduct = () => {
	const [products, setProducts] = useState(null);
	const [success, setSuccess] = useState(false);
	const [single, setSingle] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [cart, setCart] = useState([]);

	const getSingleProduct = async (id) => {
		setLoading(true);
		setSuccess(false);
		try {
			const { data } = await axios.get(`/products/${id}`);
			setSingle(data);
		} catch (error) {
			setSuccess(false);
			setError(error.message);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const createProduct = async (data) => {
		setLoading(true);
		setSuccess(false);
		try {
			const result = await axios.post('/products', { data: data });
			setProducts(result.data);
			setSuccess(true);
		} catch (error) {
			setError(error.message);
			setSuccess(false);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const updateProduct = async (id, data) => {
		setLoading(true);
		setSuccess(false);
		try {
			const result = await axios.put(`/products/${id}`, {
				data: data,
			});
			setProducts(result.data);
			setSuccess(true);
		} catch (error) {
			setError(error.message);
			setSuccess(false);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const deleteProduct = async (id) => {
		setLoading(true);
		setSuccess(false);
		try {
			await axios.delete(`/products/${id}`);
			setSuccess(true);
		} catch (error) {
			setError(error.message);
			setSuccess(false);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	// cart functionality
	const addToCart = (item) => setCart((prev) => [...prev, item]);
	const removeFromCart = (id) => setCart(cart.filter((i) => i._id !== id));
	const clearCart = () => setCart([]);

	const updateCart = (id, operation) => {
		let incState = cart.slice();
		const incIndex = incState.findIndex((i) => i._id === id);
		const item = cart.find((i) => i._id === id);

		if (operation === 'plus') {
			const newItem = { ...item, count: item.count + 1 };
			incState.splice(incIndex, 1, newItem);
			setCart(incState);
		} else if (operation === 'minus') {
			if (item.count > 1) {
				const newItem = { ...item, count: item.count - 1 };
				incState.splice(incIndex, 1, newItem);
				setCart(incState);
			}
		} else if (operation === 'delete') {
			incState.splice(incIndex, 1);
			setCart(incState);
		}
	};

	useEffect(() => {
		setLoading(true);
		setSuccess(false);

		axios
			.get('/products')
			.then((res) => setProducts(res.data))
			.catch((error) => {
				setError(error.message);
				console.log(error);
				setSuccess(false);
			})
			.finally(() => setLoading(false));
	}, []);

	return {
		products,
		single,
		loading,
		success,
		error,
		cart,
		getSingleProduct,
		createProduct,
		updateProduct,
		deleteProduct,
		addToCart,
		removeFromCart,
		clearCart,
		updateCart,
	};
};

export default useProduct;
