const router=require('express').Router();
const Image=require('../models/Image');
const multer = require('multer');
// const  modelName  = require('../models/User');
 
//storage
const Storage = multer.diskStorage({
    destination: 'uploads', 
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    },
});
const upload = multer({
    storage: Storage
    // limits{
    //     fileSize: 1024* 1024* 3*,
    // },
}).single('image');
router.post('/upload', (req, res)=>{
    upload(req, res,(err)=>{
        if(err){
            console.log(err);
        }else{

            const newImage = new Image({
                name: req.file.filename,
                image:{
                    data: req.file.filename,
                    contentType: 'image/jpg'
                }
            })
            newImage.save()
            .then()
            .catch((err)=>console.log(err));
           return res.send('successfully upload')
            
        }
    })
})
module.exports=router;