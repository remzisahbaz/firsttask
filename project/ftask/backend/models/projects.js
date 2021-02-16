const mongoose =require('mongoose');
const schema=mongoose.Schema;

const projectSchema= new schema({

   title:{ 
       type:String,trim:true,required:true, minlength:3
    },
    content:{
        type:String,trim:true,required:true, minlength:3
     },
     userid:{
        type:String,trim:true, minlength:3
     },
     image:{ type:String},
     date:{type :Date, default:Date.now},

     projectfriends:{type:Array,trim:true},

    },
    {timestamps:true,}
);

const projects= mongoose.model('Projects',projectSchema);
module.exports=projects;