import Repo from '../repository/ProductRepository.js';import ProductDTO from '../dto/product.dto.js'
export async function createProduct(data,ownerEmail){const prod=await Repo.create({...data,owner:ownerEmail||'admin'});return new ProductDTO(prod)}
export const listProducts=async()=> (await Repo.getAll()).map(p=>new ProductDTO(p))
export const updateProduct=async(id,data)=> new ProductDTO(await Repo.update(id,data))
export const deleteProduct=async(id)=> Repo.delete(id)
