 import React,{Component} from "react";
import {Link} from  "react-router-dom"
import axios  from  "axios";
import Dene from   '../components//Dene.js';


// export default class Project_List extends Component {
//     contructor(props){
//         // super(props);

//                 this.ProjectDelete=this.ProjectDelete.bind(this);
//                 this.projectList=this.projectList.bind(this);

//               this.state={project:{
//                 "_id": "6028f11cf310722420d74e49",
//                 "title": "NEW PROJECT3_1",
//                 "content": "first task",
//                 "userid": "1",
//                 "image": "//..////.//",
//                 "date": "2019-12-31T21:00:00.000Z",
//                 "createdAt": "2021-02-14T09:45:00.154Z",
//                 "updatedAt": "2021-02-14T12:02:43.492Z",
//                 "__v": 0
//               }}
        
//     }

//     componentDidMount(){
//         axios.get('http://localhost:5000/projects/')
//         .then(res=>{ 
       
//             this.setState({
//                 project:res.data
            
//             })
//             console.log(this.state.project)
     
          
//         })
//         .catch(err=>{
//             console.log(err)
//           })
//     } 
// //   projectList(){
// //         this.state.projects.map(current_project=>
// //             (
// //           <Project
// //            project={current_project} 
// //               ProjectDelete={this.ProjectDelete} 
// //                key={current_project._id}
// //                />
// //             )
// //         )
    
// //     }
        
//     ProjectDelete(id){
//         axios.delete('http:localhost:5000/projects/' + id)
//         .then(res=>console.log(res.data));
//         this.setState({
//             project:this.state.project.filter(flt=>flt._id !==id)
//         })
//     }


// const User= (props)=>{

//     <span class="badge rounded-pill bg-secondary">
//         {props.lastname}
//     </span>

// }
           

    
   
export default class Project_List extends Component{




    
    constructor(props){ 
        super(props);

            this.ProjectDelete=this.ProjectDelete.bind(this);
            this.GetUserAbout=this.GetUserAbout.bind(this);
            this.GetProjectFriends=this.GetProjectFriends.bind(this);
            this.deneme_=this.deneme_.bind(this);

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
                             console.log(res.data[0].projectfriends);       
                            this.setState({
                                projects:res.data,
                                projectfriends:res.data[0].projectfriends,
                                username:"REMZİ",

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

            GetProjectFriends(items){ 
               
        //     this.state.items.map((userid)=>
                
        //             console.log(userid)
                    
        //             // axios.get('http://localhost:5000/user/'+userid)
        //             // .then((user)=>
        //             // GetUserAbout(user)
        //         //    this.setState({
        //         //    projectid:res.data.name
        //         //     })
        //            //)
        //    )}
            }



           GetUserAbout(userid){
      
            axios.get('http://localhost:5000/user/'+userid)
        .then((user)=>
            this.setState({
                username:user.name
         }))

           }
           

            deneme_(user){


                <Dene ></Dene>
                        

                      

                  }

            

           




    render(){
    return (
           <div><h3>PROJELER SAYFASI</h3>
           
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
        <th><span class="badge rounded-pill bg-primary p-1" key={res.userid}>
         {this.state.username}
   </span> 
   </th>
        <td>{this.GetUserAbout(res.userid)}
        {/* {
            for (const element of array1) {console.log(res.projectfriends[this.state.sayac][0]);}
            
            } */}
       {this.state.projectfriends.map((user)=> {
           console.log(res.projectfriends[this.state.sayac])
           return( <span class="badge rounded-pill bg-secondary p-1" key={user}>
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
            </div>
         )  
         }

};

// export default Project_List;