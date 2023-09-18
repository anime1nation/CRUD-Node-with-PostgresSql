import express from 'express'
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controller/productController.js'


const productRouter = express.Router()
productRouter.post('/api/products',createProduct)
productRouter.get('/api/products',getProduct)
productRouter.put('/api/products/:id',updateProduct)
productRouter.delete('/api/products/:id',deleteProduct)


export {productRouter}