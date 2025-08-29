import mongoose from 'mongoose'
const ticketSchema=new mongoose.Schema({code:{type:String,unique:true},amount:Number,purchaser:String},{timestamps:true})
export default mongoose.model('Ticket',ticketSchema)
