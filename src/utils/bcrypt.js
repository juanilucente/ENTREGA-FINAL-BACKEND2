import bcrypt from 'bcrypt'
export const hash=(p)=>bcrypt.hashSync(p,10);export const compare=(p,h)=>bcrypt.compareSync(p,h)
