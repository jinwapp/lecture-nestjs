import { Cat, CatType } from './cats.model';
import { Router } from 'express';
import {
	createCat,
	deleteCat,
	readAllcat,
	readCat,
	updateCat,
	updatePartialCat,
} from './cats.service';

const router = Router();

//* Read 고양이 전체 조회
router.get('/cats', readAllcat);

//* Read 특정 고양이 조회
router.get('/cat/:id', readCat);

//* create 새로운 고양이 생성
router.post('/cat', createCat);

router.put('/cat/:id', updateCat);

router.patch('/cat/:id', updatePartialCat);

router.delete('/cat/:id', deleteCat);

export default router;
