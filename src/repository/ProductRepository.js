import DAO from '../dao/mongo/ProductDAO.js'
export default{create:(d)=>DAO.create(d),getAll:(f,o)=>DAO.findAll(f,o),getById:(id)=>DAO.findById(id),update:(id,d)=>DAO.updateById(id,d),delete:(id)=>DAO.deleteById(id)}
