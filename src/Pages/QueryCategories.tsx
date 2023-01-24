import axios from 'axios';
import { useQuery } from 'react-query';

const QueryCategories = () => {
	const { data, isLoading } = useQuery('categories', () => {
		return axios.get('https://northwind.vercel.app/api/categories').then((res) => res.data);
	});

	if (isLoading) return <h1>loading ...</h1>;

	return (
		<table className="w3-table-all">
			<thead className="w3-light-grey">
				<tr>
					<th>İd</th>
					<th>Name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{data?.map((category: any) => (
					<tr key={category.id}>
						<td>{category.id}</td>
						<td>{category.name}</td>
						<td>{category.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};



export default QueryCategories;