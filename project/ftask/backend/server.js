const express= require('express');
 const bodyParser= require('body-parser');
const cors= require('cors');
const mongoose= require('mongoose');

require('dotenv').config();
const app= express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hoş Geldiniz!");
});





const port= process.env.PORT||5000;

app.use(cors());
app.use(express.json());

const uri= process.env.URI;
mongoose.connect(uri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(port, () => console.log(`Server running on port: ${port} `));
  })
  .catch((error) => {
    console.error(error.message);
  });
  mongoose.set("useFindAndModify", false);



// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

const connection=mongoose.connection;
connection.once('open',()=>{
    try {
        console.log("MongoDB Connecttion : successfully");
    } catch (error) {
        console.error(error.message)
    }
})

const projectRouter=require('./routers/projecets.js');
const usersRouter=require('./routers/users.js');
app.use('/projects/',projectRouter);
app.use('/users/',usersRouter);
