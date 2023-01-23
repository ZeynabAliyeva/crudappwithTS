import { BaseModel } from '../core/BaseModel';

export interface Category extends BaseModel {
	description: string;
	name: string;
}