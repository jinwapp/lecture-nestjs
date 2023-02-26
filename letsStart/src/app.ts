import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();

const data = [1, 2, 3, 4];

app.use((req, res, next) => {
	//next : 다음 라우터로 이동할 수 있는 함수
	console.log(req.rawHeaders[1]);
	console.log('this is logging middleware');
	next();
});

app.get('/cats/som', (req, res, next) => {
	//next : 다음 라우터로 이동할 수 있는 함수
	console.log('this is som middleware');
	next();
});

app.get('/', (req: express.Request, res: express.Response) => {
	console.log('cats');
	res.send({ cats: Cat });
});

app.get('/cats/blue', (req: express.Request, res: express.Response) => {
	console.log('blue');
	res.send({ cats: Cat, blue: Cat[0] });
});

app.get('/cats/som', (req: express.Request, res: express.Response) => {
	console.log('som');
	res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
	console.log('this is error middleware');
	res.send({ error: '404 not found error' });
});

app.listen(8000, () => {
	console.log('serve is on...');
});
