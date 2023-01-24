import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Category } from '../models/categories/Catigories';
import { Supplier } from '../models/supliers/Supliers';
import { SuppliersService } from '../network/Suppliers/Supliers';


function Suppliers() {
	const [supliers, setSupliers] = useState<Supplier[]>([]);
	const [newSupliers, setNewSupliers] = useState<Supplier>({
    companyName: '',
    contactName: '',
    contactTitle: ''
	});

	useEffect(() => {
		supliersdata.getAll().then((res) => {
			setSupliers(res.data);
		});
	}, []);

	const supliersdata = new SuppliersService();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target?.name;
		const value = e.target?.value;

		setNewSupliers({
			...newSupliers,
			[name]: value,
		});
	};

	const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		supliersdata.add(newSupliers).then(() => {
			supliersdata.getAll().then((res) => {
				setSupliers(res.data);
			});
		});
		setNewSupliers({ companyName: '', contactName: '' ,contactTitle: ''});
	};

	const handleDelete = (id: number): void => {
		supliersdata.delete(id).then(() => {
			supliersdata.getAll().then((res) => {
				setSupliers(res.data);
			});
		});
	};

	return (
		<div className="wrapper">
			<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="unitPrice">Company Name</label>
						<input
							value={newSupliers.companyName}
							type="text"
							id="companyName"
							name="companyName"
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="unitPrice">Contact Name</label>
						<input
							value={newSupliers.contactName}
							type="text"
							id="contactName"
							name="contactName"
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="unitPrice">Contact Title</label>
						<input
							value={newSupliers.contactTitle}
							type="text"
							id="contactTitle"
							name="contactTitle"
							onChange={handleChange}
						/>
					</div>
					<button className="login">Add</button>
				</form>
			
			<table className="w3-table-all">
				<thead className="w3-light-grey">
					<tr>
						<th>İd</th>
						<th>CompanyName</th>
						<th>ContactName</th>
						<th>ContactTitle</th>
					</tr>
				</thead>
				<tbody>
					{supliers?.map((supliers) => (
						<tr key={supliers.id}>
              <td>{supliers.id}</td>
							<td>{supliers.companyName}</td>
							<td>{supliers.contactName}</td>
							<td>{supliers.contactTitle}</td>
							<td>
									<button className="login" onClick={() => handleDelete(supliers.id!)}>
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

export default Suppliers;