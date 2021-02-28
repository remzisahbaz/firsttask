import React,{Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Project_Create extends Component{
    constructor(props){ 
        super(props);

        this.onChangeUserId=this.onChangeUserId.bind(this);
        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.onChangeContent=this.onChangeContent.bind(this);
        this.onChangeImage=this.onChangeImage.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
       


            this.state={
                title:'',
                content:'',
                image:'',
                userid:'',
                projectfriends:[],
                date:new Date(),
                users:[]
            }
    }

                  componentDidMount(){
                axios.get('http://localhost:5000/users/')
                .then(res=>{
                    if(res.data.length>0)    {             
                            this.setState({
                                users:res.data,
                                userid:res.data[0]._id,
                                projectfriends:['1111','2222','333','444']
                              
                })
                } 
                }
                )
            }


            onChangeUserId(e){
                this.setState({
                     userid:e.target.value
                    
                     
                })
            }
            onChangeTitle(e){
                this.setState({
                     title:e.target.value
                })
            }

            onChangeContent(e){
                this.setState({
                     content:e.target.value
                })
            }

            onChangeImage(e){
                this.setState({
                     image:e.target.value
                })
            }
            onChangeDate(e){
                this.setState({
                     date:new Date()
                })
            }
            
            onSubmit(e){
                e.preventDefault();
                const project={
                    userid:this.state.userid,
                    title:this.state.title,
                    content:this.state.content,
                    image:this.state.image,
                    date:this.state.date,
                    projectfriends:this.state.projectfriends,
                }

              
                axios.post('http://localhost:5000/projects/add',project)
                .then(res=>console.log(res.data));

                //window.location='/';
            }

    render(){
    return (
           <div> <h3>PROJE OLUŞTURMA SAYFASI</h3>
           <form onSubmit={this.onSubmit}>
           
           <div className="form-group">
           <label>Takım Lideri</label>
           <select 
         
           className="form-control input-group-prepend"
            value= {this.state.userId}
            onChange={this.onChangeUserId}
            >
                {
                    this.state.users.map((user)=>{

                    return (
                    <option

                    key={user._id}
                    value={user._id}
                    onChange={this.onChangeUserId}
                    >
                    {user.name}
                  
                    </option>
                    );
                    })
                }
              

              
      
                </select>

           </div>
           <div className="form-group">
           <label>Başlık:</label>
            <input type="text"
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeTitle}
                ></input>   

           </div> 

            <div className="form-group">
           <label>Proje Hakkında:</label>
            <input type="text"
                className="form-control"
                value={this.state.content}
                onChange={this.onChangeContent}
                ></input>   
                 
           </div>         
          
     <div className="form-group">
    <label htmlFor="exampleFormControlFile1">Resim Seç</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"
        value={this.state.image}
         onChange={this.onChangeImage}

    />
    </div>

            

           <div className="form-group">
           <button type="submit" className="btn btn-success">Kaydet</button>
                 
           </div>

           </form>
           
           
           
           
           
           </div>
    )
}

};

export default  Project_Create ;