import {Router} from 'express'
import SessionCtrl from '../controllers/session.controller.js'
const r=Router()
r.post('/login',SessionCtrl.login)
export default r
