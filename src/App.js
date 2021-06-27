import React, {Component} from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      user:[

        {
          id:1,
          name:" Erol Emre  Güleç",
          email: " erolemre@gmail.com",
          comments:<i> <strong>  I'm looking forward to your next application</strong> </i>
        }, {
          id:2,
          name:"Emre Güleç",
          email: " emre@gmail.com",
          comments:<i> <strong> I created comment application</strong> </i>


        },
        {
          id:3,
          name:" Erol Güleç",
          email: "erol@gmail.com",
          comments: <i> <strong> Keep apps running with React </strong> </i>

        }
      ]
    };this.deleteUsers = this.deleteUsers.bind(this);

    this.AddUser = this.AddUser.bind(this);
    
  }
  AddUser(newUser){
    let updateUser = this.state.user;
    updateUser.push(newUser);
    
    this.setState({
      user: updateUser
    })
  }


  deleteUsers (id){

    let updateUser = this.state.user;

    updateUser = updateUser.filter(user => user.id !== id)
    this.setState  ({
      user: updateUser
    });
  }
  render(){
    const title =<big> Comment App </big>

    // const isAutorized = true;
    return(
      <div className="container">
   <h5>{title}</h5>
   <hr />
   <AddUser AddUser = {this.AddUser}/>
   <hr />
   <Users deleteUsers = {this.deleteUsers} user= {this.state.user}/>   

    
      
      </div>
    )
  }
}

export default App;
