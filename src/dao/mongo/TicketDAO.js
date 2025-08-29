import Ticket from '../models/Ticket.js'
export default{create:(d)=>Ticket.create(d),findAll:()=>Ticket.find()}
