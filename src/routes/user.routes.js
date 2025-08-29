import {Router} from 'express'
import UserCtrl from '../controllers/user.controller.js'
import {current} from '../middlewares/auth.js'
import {isAdmin} from '../middlewares/roles.js'
const r=Router()
r.post('/register',UserCtrl.register)
r.get('/',current,isAdmin,UserCtrl.list)
r.get('/current',current,UserCtrl.current)
export default r
