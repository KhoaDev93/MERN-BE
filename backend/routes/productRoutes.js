import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

//@desc   Fetch all products
//@route  GET/api/products
//@access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      const products = await Product.find({})
      res.json(products)
    } catch (error) {
      throw error
    }
  }),
)

//@desc   Fetch product by id
//@route  GET/api/product/:id
//@access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    try {
      const product = await Product.findById(req.params.id)
      if (product) {
        res.json(product)
      }
    } catch (error) {
      res.status(404)
      throw new Error('Product not found')
    }
  }),
)

export default router
