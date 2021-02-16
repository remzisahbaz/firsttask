const router=require('express').Router();

let User=require('../models/users');

router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error:' + err))
});


router.route('/add').post((req,res)=>{
    const name= req.body.name;
    const lastname= req.body.lastname;
    const email= req.body.email;
    const image= req.body.image;


    const newUser= User({
        name,lastname,email,image,
    });

    newUser.save()
    .then(()=>res.json('Kullanıcı Eklendi'))
    .catch(err=>res.status(400).json('Error:'+err))
});


router.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error:'+err))
});

router.route('/update/:id').post((req,res)=>{
    User.findById(req.params.id)
    .then(user=>{
        // User.findOne({ '_id': req.params.id })
        user.name=req.body.name;
        user.lastname=req.body.lastname;
        user.email=req.body.email;
        user.image=req.body.image;
    

        user.save()
        .then(()=>res.json('OK. Updated'))
        .catch(err=>res.status(400).json('Error:'+ err));
    })
    .catch(err=>res.status(400).json('Error:'+ err));
});

router.route('/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json('OK. Delete'))
    .catch(err=>res.status(400).json('Error:'+err))
});


module.exports=router;