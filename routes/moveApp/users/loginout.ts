module.exports = (req:any,res:any)=>{
  req.session.destroy();
  res.send({
    status:200,
    msg:'退出登录成功'
  })
}