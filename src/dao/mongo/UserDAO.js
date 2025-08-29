import User from '../models/User.js'
export default{create:(d)=>User.create(d),findByEmail:(e)=>User.findOne({email:e}),findById:(id)=>User.findById(id),updateById:(id,d)=>User.findByIdAndUpdate(id,d,{new:true}),deleteById:(id)=>User.findByIdAndDelete(id),findAll:()=>User.find()}
