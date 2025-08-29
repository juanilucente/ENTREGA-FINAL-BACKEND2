import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({name:String,email:{type:String,unique:true,required:true},password:String,role:{type:String,enum:['user','admin','premium'],default:'user'},cart:{type:mongoose.Schema.Types.ObjectId,ref:'Cart'},resetToken:String,resetTokenExp:Date},{timestamps:true})
export default mongoose.model('User',userSchema)
