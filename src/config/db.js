import mongoose from 'mongoose'
export async function connectDB(uri){try{await mongoose.connect(uri);console.log('🟢 MongoDB Connected')}catch(e){console.error('🔴 Mongo error:',e.message);process.exit(1)}}
