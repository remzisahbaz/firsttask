const router=require('express').Router();

let project=require('../models/projects');

router.route('/').get((req,res)=>{
    project.find()
    .then(projects=>res.json(projects))
    .catch(err=>res.status(400).json('Error:' + err))
});


router.route('/:id').get((req,res)=>{
    project.findById(req.params.id)
    .then(projects=>res.json(projects))
    .catch(err=>res.status(400).json('Error:'+err))
});

router.route('/add').post((req,res)=>{
    const title= req.body.title;
    const content= req.body.content;
    const userid= String(req.body.userid);
    const image= req.body.image;
    const date= Date.parse(req.body.date);
    const projectfriends= Array(req.body.projectfriends);

    const newprojects= new project({
        title,content,userid,image,date,projectfriends,
    });

    newprojects.save()
    .then(()=>res.json('Yeni Proje Eklendi'))
    .catch(err=>res.status(400).json('Error:'+err))
});


router.route('/update/:id').post((req,res)=>{
    project.findById(req.params.id)
    .then(projects=>{
       
        projects.title=req.body.title;
        projects.content=req.body.content;
        projects.userid=(req.body.userid);
        projects.image=req.body.image;
        projects.date=Date.parse(req.body.date);
        projects.projectfriends=req.body.projectfriends;

        projects.save()
        .then(()=>res.json('OK. Updated'))
        .catch(err=>res.status(400).json('Error:'+ err));
    })
    .catch(err=>res.status(400).json('Error:'+ err));
});

router.route('/:id').delete((req,res)=>{
    project.findByIdAndDelete(req.params.id)
    .then(()=>res.json('OK. Delete'))
    .catch(err=>res.status(400).json('Error:'+err))
});


module.exports=router;