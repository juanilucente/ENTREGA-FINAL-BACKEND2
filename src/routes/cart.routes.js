import {Router} from 'express'
import CartCtrl from '../controllers/cart.controller.js'
import {current} from '../middlewares/auth.js'
import {isUser} from '../middlewares/roles.js'
const r=Router()
r.post('/:cid/products/:pid',current,isUser,CartCtrl.add)
r.post('/:cid/purchase',current,isUser,CartCtrl.buy)
export default r
