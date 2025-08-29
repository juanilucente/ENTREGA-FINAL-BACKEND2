export const isAdmin=(req,res,next)=>{if(req.user?.role!=='admin')return res.status(403).json({error:'Solo admin'});next()}
export const isUser=(req,res,next)=>{if(!req.user||req.user.role!=='user')return res.status(403).json({error:'Solo user'});next()}
export const isAdminOrPremium=(req,res,next)=>{if(['admin','premium'].includes(req.user?.role))return next();return res.status(403).json({error:'Solo admin/premium'})}
