import {Router} from 'express'
import {current} from '../middlewares/auth.js'
import UserDTO from '../dto/user.dto.js'
const r=Router()
r.get('/',current,(req,res)=> res.json(new UserDTO(req.user)))
export default r
