import {Router} from 'express'
import TicketCtrl from '../controllers/ticket.controller.js'
import {current} from '../middlewares/auth.js'
import {isAdmin} from '../middlewares/roles.js'
const r=Router()
r.get('/',current,isAdmin,TicketCtrl.list)
export default r
