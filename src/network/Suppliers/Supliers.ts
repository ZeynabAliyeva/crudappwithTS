import { Supplier } from "../../models/supliers/Supliers";
import { BaseService } from "../base/BaseServise";


export class SuppliersService extends BaseService<Supplier> {
	constructor() {
		super('/suppliers');
	}
}