import { Request, Response } from 'express';
import { Cat, CatType } from './cats.model';

//* Read 고양이 전체 조회
export const readAllcat = (req: Request, res: Response) => {
	try {
		const cats = Cat;
		// throw new Error('db connection error');
		res.status(200).send({
			success: true,
			data: {
				cats,
			},
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};

//* Read 특정 고양이 조회
export const readCat = (req: Request, res: Response) => {
	try {
		const params = req.params;
		console.log('params', params);

		const cat = Cat.find((cat) => {
			return cat.id === params.id;
		});
		res.status(200).send({
			success: true,
			data: { cat },
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};

//* create 새로운 고양이 생성
export const createCat = (req: Request, res: Response) => {
	try {
		const data = req.body;
		Cat.push(data);
		res.status(200).send({
			success: true,
			data: { data },
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};

export const updateCat = (req: Request, res: Response) => {
	try {
		const params = req.params;
		const body = req.body;
		let result;
		Cat.forEach((cat) => {
			if (cat.id === params.id) {
				cat = body;
				result = cat;
			}
		});
		res.status(200).send({
			success: true,
			data: {
				cat: result,
			},
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};

export const updatePartialCat = (req: Request, res: Response) => {
	try {
		const params = req.params;
		const body = req.body;
		let result;
		Cat.forEach((cat) => {
			if (cat.id === params.id) {
				cat = { ...cat, ...body }; //구조분해 할당
				result = cat;
			}
		});
		res.status(200).send({
			success: true,
			data: {
				cat: result,
			},
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};

export const deleteCat = (req: Request, res: Response) => {
	try {
		const params = req.params;
		const newCat = Cat.filter((cat) => cat.id !== params.id);
		res.status(200).send({
			success: true,
			data: newCat,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			error: error.message,
		});
	}
};
