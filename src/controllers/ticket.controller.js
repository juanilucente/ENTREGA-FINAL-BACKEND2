import {listTickets} from '../services/ticket.service.js'
export default{list:async(_req,res)=> res.json(await listTickets())}
