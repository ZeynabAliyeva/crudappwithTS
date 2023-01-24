import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Product } from '../models/products/Poroducts';
import { ProductService } from '../network/Products/Product';


function Products() {
	const [products, setProducts] = useState<Product[]>([]);
	const [newProducts, setNewProducts] = useState<Product>({
		name: '',
		unitPrice: 0,
    unitsInStock: 0
	});

	useEffect(() => {
		productsdata.getAll().then((res) => {
			setProducts(res.data);
		});
	}, []);

	const productsdata = new ProductService();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target?.name;
		const value = e.target?.value;

		setNewProducts({
			...newProducts,
			[name]: value,
		});
	};

	const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		productsdata.add(newProducts).then(() => {
			productsdata.getAll().then((res) => {
				setProducts(res.data);
			});
		});
		setNewProducts({ name: '', unitPrice: 0, unitsInStock: 0 });
	};

	const handleDelete = (id: number): void => {
		productsdata.delete(id).then(() => {
			productsdata.getAll().then((res) => {
				setProducts(res.data);
			});
		});
	};

	return (
		<div className="wrapper">
      <form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name</label>
						<input value={newProducts.name} type="text" id="name" name="name" onChange={handleChange} />
					</div>
					<div>
						<label htmlFor="unitPrice">UnitPrice</label>
						<input value={newProducts.unitPrice} type="text" id="unitPrice" name="unitPrice" onChange={handleChange} />
					</div>
					<div>
						<label htmlFor="UnitsInStock">UnitsInStock</label>
						<input
							value={newProducts.unitsInStock}
							type="text"
							id="UnitsInStock"
							name="unitsInStock"
							onChange={handleChange}
						/>
					</div>
					<button className="login">Add</button>
				</form>
			<table className="w3-table-all">
				<thead className="w3-light-grey">
					<tr>
						<th>İd</th>
						<th>Name</th>
						<th>Description</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{products?.map((category) => (
						<tr key={category.id}>
							<td>{category.id}</td>
							<td>{category.name}</td>
							<td>{category.unitPrice}</td>
              <td>{category.unitsInStock}</td>
              <td>
									<button className="login" onClick={() => handleDelete(category.id!)}>
										Delete
									</button>
								</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Products;