import {Router} from 'express'
import ProductCtrl from '../controllers/product.controller.js'
import {current} from '../middlewares/auth.js'
import {isAdminOrPremium} from '../middlewares/roles.js'
const r=Router()
r.get('/',ProductCtrl.list)
r.post('/',current,isAdminOrPremium,ProductCtrl.create)
r.put('/:pid',current,isAdminOrPremium,ProductCtrl.update)
r.delete('/:pid',current,isAdminOrPremium,ProductCtrl.remove)
export default r
