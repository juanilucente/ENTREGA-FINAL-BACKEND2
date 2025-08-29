import passport from 'passport'
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt'
import User from '../dao/models/User.js'
import dotenv from 'dotenv';dotenv.config()
export default function initializePassport(){
  const opts={jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),secretOrKey:process.env.JWT_SECRET}
  passport.use('current', new JwtStrategy(opts, async (jwtPayload, done)=>{
    try{const user=await User.findById(jwtPayload.id).lean(); if(!user) return done(null,false); delete user.password; return done(null,user)}
    catch(e){return done(e,false)}
  }))
}
