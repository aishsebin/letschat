import React, { Component } from "react";
import openSocket from 'socket.io-client';


export default class Message extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // users: []
            users: 0
        };
    }
 

    // componentDidMount(){
    //     this.getUsers();
    // // console.log(this.state.users);
    // }

  // getUsers(){
  //   fetch("http://localhost:5000/")
  //       .then(res=>res.json())
  //       .then(res=>this.setState({ users: res }))
  //       .catch(err => console.error(err));
  // }
  // componentDidMount(){
  //   const socket = openSocket('http://localhost:5000');
  //   socket.emit('send sockets', "Sending sockets");
  // }
  
  setUsers = (users) => {
    this.setState({ users })
  }
  // renderUser=({ userid,fname })=><div key={userid}>{fname}</div>
  
  render(){
    const { users }=this.state;
    // const socket = openSocket('http://localhost:5000');
    
    // socket.on('getsocket', (data) => {
    //   this.setUsers(data);
    // })
    // const listitems=users.map(this.renderUser);
    return (
      <div className="custo">
      
          {/* <p>{users.map(this.renderUser)}</p> */}
      {users}
      </div>
    );
  }
}