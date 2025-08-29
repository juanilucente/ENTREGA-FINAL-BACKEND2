import passport from 'passport'
export const current=passport.authenticate('current',{session:false})
