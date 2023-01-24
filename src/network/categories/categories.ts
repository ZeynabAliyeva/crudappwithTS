import { Category } from "../../models/categories/Catigories";
import { BaseService } from "../base/BaseServise";

export class CategoriesService extends BaseService<Category> {
	constructor() {
		super('/categories');
	}
}