const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        required:false
    },
    image:{
        type: String,
        required: true,
    }
},{
    timestamps:true}
);

module.exports=mongoose.model('Post',PostSchema);