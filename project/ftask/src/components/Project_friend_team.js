import React, { Component } from 'react'

export default class Project_friend_team extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            lastname:'',
            team:this.props.team,
            length_:this.props.team.length,
        }
    }
    render() {
        return (
            <div>
                {this.state.team.map(user=>{
                    return(
                       
                    console.log(user,"-")
                    
                    )

               
                })}
            </div>
        )
    }
}
