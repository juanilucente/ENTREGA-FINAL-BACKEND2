import Cart from '../models/Cart.js'
export default{create:(d={})=>Cart.create(d),findById:(id)=>Cart.findById(id).populate('products.product'),update:(id,d)=>Cart.findByIdAndUpdate(id,d,{new:true})}
