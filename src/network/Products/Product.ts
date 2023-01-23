import { Product } from "../../models/products/Poroducts";
import { BaseService } from "../base/BaseServise";


export class ProductService extends BaseService<Product> {
	constructor() {
		super('/products');
	}
}