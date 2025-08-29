import DAO from '../dao/mongo/UserDAO.js'
export default{create:(d)=>DAO.create(d),getAll:()=>DAO.findAll(),getById:(id)=>DAO.findById(id),getByEmail:(e)=>DAO.findByEmail(e),update:(id,d)=>DAO.updateById(id,d),delete:(id)=>DAO.deleteById(id)}
