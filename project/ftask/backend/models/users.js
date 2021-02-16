const mongoose =require('mongoose');
const schema=mongoose.Schema;

const userSchema= new schema({

   name:{
       type:String,trim:true,required:true, minlength:3
    },
    lastname:{
        type:String,trim:true,required:true, minlength:3
     },
     email:{
        type:String,required:true,trim:true, minlength:3
     },
     image:{ type:String},
    },
    {timestamps:true,}
);

const Users= mongoose.model('Users',userSchema);
module.exports=Users;


