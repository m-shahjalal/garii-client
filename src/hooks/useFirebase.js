import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	getIdToken,
	updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import axios from '../utils/axios';

const useFirebase = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [admin, setAdmin] = useState(false);
	const [googleLoading, setGoogleLoading] = useState(false);

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = () => {
		setGoogleLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				setError('');
				setUser(result.user);
				setGoogleLoading(false);
				saveUser({
					name: result.user.displayName,
					email: result.user.email,
				});
			})
			.catch((error) => {
				setUser(null);
				setError(error.message);
				console.log(error);
				setGoogleLoading(false);
			});
	};

	const registerWithEmail = (email, password, name) => {
		setError('');
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				setError('');
				setUser({ email, displayName: name });
				saveUser({ name, email });
				// saveUser(email, name, 'POST');
				updateProfile(auth.currentUser, { displayName: name })
					.then(() => {})
					.catch((error) => {});
			})
			.catch((error) => {
				setError(error.message);
				console.log(error);
			});
	};

	const updateName = (name) => {
		setError('');
		setLoading(true);
		updateProfile(user, name)
			.then((result) => {
				console.log(result);
				setUser(result.user);
				setError('');
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setUser(null);
				console.log(error);
				setLoading(false);
			});
	};

	const loginWithEmail = (email, password) => {
		setLoading(true);
		setError('');
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setUser(result.user);
				setError('');
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
				setUser(null);
				setLoading(false);
			});
	};

	const logout = () => {
		setLoading(true);

		signOut(auth)
			.then(() => {
				setUser(null);
				setLoading(false);
				localStorage.removeItem('idToken');
			})
			.catch((error) => {
				setLoading(false);
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				getIdToken(user).then((idToken) =>
					localStorage.setItem('jwt', idToken)
				);
				setUser(user);
				axios
					.get(`/users/${user.email}`)
					.then((data) => setAdmin(data.data.admin));
			} else {
				setUser(null);
			}
			setLoading(false);
		});
		return () => unsubscribe;
	}, [auth]);

	useEffect(() => {
		user &&
			axios
				.get(`/users/${user?.email}`)
				.then((data) => setAdmin(data.data.admin));
	}, [user]);

	const saveUser = async (user) => await axios.post('/users', user);

	return {
		user,
		error,
		loading,
		googleLoading,
		signInUsingGoogle,
		registerWithEmail,
		updateName,
		loginWithEmail,
		logout,
		admin,
	};
};

export default useFirebase;
