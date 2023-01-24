import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Category } from '../models/categories/Catigories';
import { CategoriesService } from '../network/categories/categories';


function Categories({ showBtn }: any) {
	const [categories, setCategories] = useState<Category[]>([]);
	const [newCategories, setNewCategories] = useState<Category>({
		description: '',
		name: '',
	});

	useEffect(() => {
		categoriesdata.getAll().then((res) => {
			setCategories(res.data);
		});
	}, []);

	const categoriesdata = new CategoriesService();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target?.name;
		const value = e.target?.value;

		setNewCategories({
			...newCategories,
			[name]: value,
		});
	};

	const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		categoriesdata.add(newCategories).then(() => {
			categoriesdata.getAll().then((res) => {
				setCategories(res.data);
			});
		});
		setNewCategories({ description: '', name: '' });
	};

	const handleDelete = (id: number): void => {
		categoriesdata.delete(id).then(() => {
			categoriesdata.getAll().then((res) => {
				setCategories(res.data);
			});
		});
	};

	return (
		<div className="wrapper">
			
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name</label>
						<input value={newCategories.name} type="text" id="name" name="name" onChange={handleChange} />
					</div>
					<div>
						<label htmlFor="unitPrice">Description</label>
						<input
							value={newCategories.description}
							type="text"
							id="description"
							name="description"
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
					{categories?.map((category) => (
						<tr key={category.id}>
							<td>{category.id}</td>
							<td>{category.name}</td>
							<td>{category.description}</td>
							
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

export default Categories;