import { BaseService } from "../base/BaseServise";

export class CategoriesService extends BaseService<CategoriesService> {
	constructor() {
		super('/categories');
	}
}