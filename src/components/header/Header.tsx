import { Link } from 'react-router-dom';


const Header = () => {
	return (
		<>
			<div className="header">
				<nav>
					<ul>
						<li>
							<Link to={'/'}>Suppliers</Link>
						</li>
						<li>
							<Link to={'/products'}>Products</Link>
						</li>
						<li>
							<Link to={'/categories'}>Categories</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Header;