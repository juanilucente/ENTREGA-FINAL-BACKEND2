import {Router} from 'express'
import RecoveryCtrl from '../controllers/recovery.controller.js'
const r=Router()
r.post('/request',RecoveryCtrl.request)
r.post('/reset',RecoveryCtrl.reset)
export default r
