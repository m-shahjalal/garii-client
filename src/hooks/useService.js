import axios from 'axios';
import { useState, useEffect } from 'react';

const useService = () => {
	const [loading, setLoading] = useState(false);
	const [items, setItems] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios
			.get('https://api.axios.com')
			.then((res) => setItems(res.data))
			.catch((err) => setError(err))
			.finally(setLoading(false));
	}, []);

	const createReview = () => {};
	const deleteReview = () => {};

	return { loading, items, error };
};
