import { Routes, Route } from 'react-router-dom';
import Categories from '../../Pages/Categories';
import Products from '../../Pages/Products';
import Supliers from '../../Pages/Supliers';


const Main = () => {
	return (
		<Routes>
			<Route path="/" element={<Supliers/>} />
			<Route path="/products" element={<Products/>} />
			<Route path="/categories" element={<Categories/>} />
		</Routes>
	);
};

export default Main;