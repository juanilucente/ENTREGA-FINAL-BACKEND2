import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import cors from 'cors'
import passport from 'passport'
import initializePassport from './config/passport.config.js'
import {connectDB} from './config/db.js'
import userRoutes from './routes/user.routes.js'
import sessionRoutes from './routes/session.routes.js'
import productRoutes from './routes/product.routes.js'
import cartRoutes from './routes/cart.routes.js'
import recoveryRoutes from './routes/recovery.routes.js'
import ticketRoutes from './routes/ticket.routes.js'
import currentRoutes from './routes/current.routes.js'
dotenv.config()
const app=express()
await connectDB(process.env.MONGO_URI)
app.use(cors());app.use(express.json());app.use(express.urlencoded({extended:true}));app.use(cookieParser())
app.use(session({store:MongoStore.create({mongoUrl:process.env.MONGO_URI,ttl:3600}),secret:process.env.SESSION_SECRET||'secret',resave:false,saveUninitialized:false}))
initializePassport();app.use(passport.initialize())
app.use('/api/users',userRoutes)
app.use('/api/sessions',sessionRoutes)
app.use('/api/products',productRoutes)
app.use('/api/carts',cartRoutes)
app.use('/api/recovery',recoveryRoutes)
app.use('/api/tickets',ticketRoutes)
app.use('/api/current',currentRoutes)
const PORT=process.env.PORT||3000
app.listen(PORT,()=>console.log(`🚀 Server running on http://localhost:${PORT}`))
