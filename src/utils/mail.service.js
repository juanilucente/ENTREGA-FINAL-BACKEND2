import nodemailer from 'nodemailer';import dotenv from 'dotenv';dotenv.config()
const transporter=nodemailer.createTransport({service:'gmail',auth:{user:process.env.MAIL_USER,pass:process.env.MAIL_PASS}})
export async function sendResetEmail(to,link){await transporter.sendMail({to,subject:'Restablecer contraseña',html:`<p>Para restablecer tu contraseña hacé click (expira en 1 hora):</p><a href="${link}" style="padding:10px 16px;background:#1f6feb;color:#fff;border-radius:6px;text-decoration:none">Restablecer</a>`})}
