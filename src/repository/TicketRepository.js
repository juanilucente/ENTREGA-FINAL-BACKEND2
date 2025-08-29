import DAO from '../dao/mongo/TicketDAO.js'
export default{create:(d)=>DAO.create(d),getAll:()=>DAO.findAll()}
