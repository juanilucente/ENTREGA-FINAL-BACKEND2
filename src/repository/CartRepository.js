import DAO from '../dao/mongo/CartDAO.js'
export default{create:()=>DAO.create(),getById:(id)=>DAO.findById(id),update:(id,d)=>DAO.update(id,d)}
