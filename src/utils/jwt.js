import jwt from 'jsonwebtoken'
export const sign=(payload,exp='1h')=>jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:exp});export const verify=(t)=>jwt.verify(t,process.env.JWT_SECRET)
