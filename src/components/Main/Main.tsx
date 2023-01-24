import { Routes, Route } from 'react-router-dom';
import Categories from '../../Pages/Categories';
import Products from '../../Pages/Products';
import QueryCategories from '../../Pages/QueryCategories';
import Supliers from '../../Pages/Supliers';


const Main = () => {
	return (
		<Routes>
			<Route path="/" element={<Supliers/>} />
			<Route path="/products" element={<Products/>} />
			<Route path="/categories" element={<Categories/>} />
			<Route path="/queryCategories" element={<QueryCategories/>} />
		</Routes>
	);
};

export default Main;