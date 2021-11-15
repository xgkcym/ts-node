import {Request,Response} from 'express'
import path from 'path'
import formidable, { IncomingForm } from 'formidable';
module.exports = async(req:Request,res:Response)=>{
    const form = new IncomingForm({
        uploadDir:path.join(__dirname,'..','..','..','public','moveApp','article'),
        keepExtensions:true
    });
    form.parse(req, (err, fields, files:any) => {
        if(files.content) {
            files.content.path = files.content.path.split('public')[1]
            res.json({status:200,file:files.content})
        } else{
            res.send({
                status:400,
                msg:'请求参数错误'
            })
        }     
    })
}