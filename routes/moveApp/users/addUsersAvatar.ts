import {Request,Response} from 'express'
import path from 'path'
import formidable, { IncomingForm } from 'formidable';
module.exports = async(req:Request,res:Response)=>{
    const form = new IncomingForm({
        uploadDir:path.join(__dirname,'..','..','..','public','moveApp','avatar'),
        keepExtensions:true
    });
    
    form.parse(req, (err, fields, files:any) => {
        if(files.avatar)  {
            files.avatar.path = files.avatar.path.split('public')[1]
            res.json({status:200,file:files.avatar})
        } else{
            res.json({
                status:400,
                msg:'请求参数错误'
            })
        }     
    })
}