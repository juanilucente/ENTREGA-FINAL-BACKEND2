import Product from '../models/Product.js'
export default{create:(d)=>Product.create(d),findById:(id)=>Product.findById(id),findAll:(f={},o={})=>Product.find(f,null,o),updateById:(id,d)=>Product.findByIdAndUpdate(id,d,{new:true}),deleteById:(id)=>Product.findByIdAndDelete(id)}
