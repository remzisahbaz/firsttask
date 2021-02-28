import React,{Component} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class Project_Edit extends Component {
    constructor(props){
        super(props);
                this.onChangeName=this.onChangeName.bind(this);
                this.onChangeLastName=this.onChangeLastName.bind(this);
                this.onChangeEmail=this.onChangeEmail.bind(this);
                this.onChangeImage=this.onChangeImage.bind(this);
                this.onSubmit=this.onSubmit.bind(this);
                this.state={
                name:'',
                lastname:'',
                email:'',
                image:''
                }
    }
                onChangeName(e){
                    this.setState({
                         name:e.target.value
                    })
                }
                onChangeLastName(e){
                    this.setState({
                         lastname:e.target.value
                    })
                }
                onChangeEmail(e){
                    this.setState({
                         email:e.target.value
                    })
                }
             onChangeImage(e){
                    this.setState({
                         image:e.target.value
                    })
                }
                        
            onSubmit(e){
                e.preventDefault();
                const user={
                    name:this.state.name,
                    lastname:this.state.lastname,
                    email:this.state.email,
                    image:this.state.image
                }
             //   console.log(user);
                axios.post('http://localhost:5000/users/add',user)
                .then(res=>console.log(res.data));


                // window.location='/';
            }

    
    render(){
        
    return (
           <div> YENİ KULLANICI 
           <form onSubmit={this.onSubmit}>
           <div className="form-group">
           <div>
           <label>Adı:</label>
           <input type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                ></input>
            </div>
            <div>
           <label>Soyadı:</label>
           <input type="text"
                className="form-control"
                value={this.state.lastname}
                onChange={this.onChangeLastName}
                ></input>
            </div>
            <div>
           <label>E-mail:</label>
           <input type="text"
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                ></input>
            </div>

            <div>
            <label htmlFor="exampleFormControlFile1">Resim Seç</label>
              <input 
              type="file" 
              className="form-control-file" 
              id="exampleFormControlFile1"
            value={this.state.image}
            onChange={this.onChangeImage}

              />
            </div>

            <div className="m-1 mt-4">
            <button type="submit" className="btn btn-success">Kaydet</button>
            </div>

           </div>
           </form>
            
           </div>

    )
}

};

export default  Project_Edit;