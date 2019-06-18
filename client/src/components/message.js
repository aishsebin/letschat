import React, { Component } from "react";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');


export default class Custom extends Component {
    
    constructor(props) {
        super(props);
        // this.message="";
        
        this.state = {
            // users: []
            // users: 0
            displaydata: [],
            message: ""
        };
    }

    // componentDidMount(){
    //     const socket = openSocket('http://localhost:5000');
    //     // socket.emit('send sockets', "Sending sockets");
    //   }

    setMsg = (evt)=>{
        this.setState({ message:evt.target.value });
    }

    sendMsg = (evt) =>{
        evt.preventDefault();
        socket.emit('send message', this.state.message);
    }

   
    //   setUsers = (users) => {
    //     this.setState({ users })
    //   }
    //   renderUser=({ userid,fname })=><div key={userid}>{fname}</div>
       
    render(){
        // const { users }=this.state;
        // const socket = openSocket('http://localhost:5000');
        
        socket.on('new message', (data) => {
            var dispdata=this.state.displaydata;
           
            dispdata.push(data.msg);
            this.setState({ displaydata:dispdata });

        });
       
        // const listitems=users.map(this.renderUser);
        return (
            
            <div>
                <div class="chat" id="chat">{this.state.displaydata.map((data, index) => (
        <p>{data}</p>
    ))}</div>

                <form id="messageForm" onSubmit={this.sendMsg}>
                    <div class="form-group">
                        <label>Enter Message</label>
                        <input type="text" data-test="message" value={this.state.message} onChange={this.setMsg} />
                        <br />
                        <input type="submit"  value="Send" data-test="submit" />
                    </div>    
                </form>
            </div>    
        
        );
      }
    }