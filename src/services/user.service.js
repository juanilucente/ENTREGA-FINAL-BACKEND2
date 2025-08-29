import UserRepo from '../repository/UserRepository.js';import CartRepo from '../repository/CartRepository.js';import {hash} from '../utils/bcrypt.js';import UserDTO from '../dto/user.dto.js'
export async function register({name,email,password}){const exists=await UserRepo.getByEmail(email);if(exists)throw new Error('Email ya registrado');const cart=await CartRepo.create();const user=await UserRepo.create({name,email,password:hash(password),cart:cart._id});return new UserDTO(user)}
export async function listUsers(){const users=await UserRepo.getAll();return users.map(u=>new UserDTO(u))}
