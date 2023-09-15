import express from 'express'
import { createProduct } from '../controller/productController.js'


const productRouter = express.Router()
productRouter.post('/api/products',createProduct)

export {productRouter}