import { createContext } from 'react';
import useProduct from '../hooks/useProduct';
export const Product = createContext();

const ProductContext = ({ children }) => (
	<Product.Provider value={useProduct()}>{children}</Product.Provider>
);

export default ProductContext;
