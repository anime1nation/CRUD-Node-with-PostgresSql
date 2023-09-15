import express from 'express';
import cors from 'cors';
import { indexRouter } from './router/indexRoute.js';
import { productRouter } from './router/productRouter.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(indexRouter)
app.use(productRouter)

export default app