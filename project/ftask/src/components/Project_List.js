 import React,{Component} from "react";
import {Link} from  "react-router-dom"
import axios  from  "axios";
import moment from "moment";
import projectpagination from "../components/Project_list_pagination";
//import Projectfriendsteam from "../components/Project_friend_team";
import image1 from '../images/4.jpg';

//const Project_frdteam=React.createContext({});
   
export default class Project_List extends Component{




    
    constructor(props){ 
        super(props);

            this.ProjectDelete=this.ProjectDelete.bind(this);
            this.GetUserAbout=this.GetUserAbout.bind(this);
            this.GetProjectFriends=this.GetProjectFriends.bind(this);
         

            this.state={
                projects:[],
                projectid:'',
                items:[],
                projectfriends:[],
                sayac:0,
                username:'',
            }
    }
                componentDidMount(){
                axios.get('http://localhost:5000/projects/')
                .then(res=>{
                                  this.setState({
                                projects:res.data,
                                

                  })
                })
 

            }

            ProjectDelete(id){
                     axios.delete('http://localhost:5000/projects/' + id)
                    .then(res=>console.log(res.data));
                    this.setState({
                        projects:this.state.projects.filter(flt=>flt._id !==id)
                    })
                   }

            GetProjectFriends(user){ 
                //this.setState({projectfriends:user})
            }

           GetUserAbout(userid){
      
        axios.get('http://localhost:5000/user/'+userid)
        .then((user)=>
            this.setState({
                username:user.name
         }))

           }
         

    render(){
          const a=[];
    return (
           <div><h3>PROJELER SAYFASI</h3>
           

           <div className="row row-cols-1 row-cols-md-3 g-3 p-0">
          
          {
              this.state.projects.map(project=>{return(

            <div className="col pb-5" key={project._id}>
                <div className="card">
                <img src={image1} className="card-img-top rounded" alt="..."/>
                <div className="card-body p-1">
                   
                    <h2 className="cart-title badge  bg-primary  fs-1 text-white">
                    <h3>{project.title}</h3>
                    </h2>
                    
                   
                    <h5 className="card-title"> <h6 className="fs-6">(Proje Lideri)</h6>
                    <p className="badge  bg-secondary fs-1 text-white" >
                    {this.GetUserAbout(project.userid)}{this.state.username}
                        
                    </p></h5>

                    <h6 className="card-title">Takım Arkadaşları<br/>
                    <h2 className="badge  bg-primary  fs-1 text-white">
                    {/* {project.projectfriends.map(a=>(this.setState({projectfriends:a})))} */}
                    {/* {this.setState({projectfriends:project.projectfriends})}
                    {console.log(this.state.projectfriends)} */}
                    {/* <Projectfriendsteam team={this.state.projectfriends}/> */}
                    </h2></h6>

                    <h6 className="card-title ">Proje Hakkında<br/>
                    <div className="d-flex justify-content-start bg-info"  style={{ width:50}}>
                    {project.content}
                    </div></h6>
                    
                  


                    <h6 className="card-title pb-0">Oluşturma Tarihi<br/>
                    <h2 className="badge  bg-primary  fs-1 text-white" >
                 
                    {moment(project.date).format('d MMM YYYY')}
                    </h2> </h6>

                    <h5 className="card-title">
                     <button type="button" className="btn btn-warning mr-1">
                     Düzenle
                     </button>
                   
                    <button type="button" className="btn btn-danger" >
                    Sil
                    </button>
                     </h5>

                   
                         

                </div>
                </div>
                </div>

          )})}
               
                </div>










           <table className="table">
           <thead className="thead-light">
               <tr>
               
                   <th>Proje Resmi</th>
                   <th>Proje Adı</th>
                   <th>Proje Hakkında</th>
                   <th>Proje Oluşum</th>  
                   <th>Proje Başkanı</th>  
                   <th>Proje Takım Arkadaşları</th>
                   <th>İşlem</th>
               </tr>

           </thead>
           <tbody>
               {/* {this.projectList()} */
               
               this.state.projects.map(res=>{
               return(
                
               <tr key={res._id}>
       
        <td>{res.image}</td>
        <td>{res.title}</td>
        <td>{res.content}</td>
        <td>{new Intl.DateTimeFormat('tr-TR').format(new Date(res.date))}</td> 
        <th><span className="badge rounded-pill bg-primary p-1" key={res.userid}>
         {this.state.username}
   </span> 
   </th>
        <td>{this.GetUserAbout(res.userid)}
       
       {this.state.projectfriends.map((user)=> {
           console.log(res.projectfriends[this.state.sayac])
           return( <span className="badge rounded-pill bg-secondary p-1" key={user}>
      {res.projectfriends}
   </span> )})}
      
     
        </td>
        <td>
        <Link to={`/edit/"+ ${res._id}`}>
        Edit | </Link>
        <a href="#/"
         onClick={()=> 
         {
            this.ProjectDelete(res._id)
            }
            }> 
            Delete
        </a></td>
    </tr>
               
                ) })}
                


           </tbody>
           </table>





           <projectpagination />
            </div>
         )  
         }

};

