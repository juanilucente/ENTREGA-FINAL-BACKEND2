import {login} from '../services/session.service.js'
export default{login:async(req,res)=>{try{res.json(await login(req.body.email,req.body.password))}catch(e){res.status(401).json({error:e.message})}}}
