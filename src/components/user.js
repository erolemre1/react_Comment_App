import React, {Component} from "react";


class User extends  Component{
  
    // constructor(props) {

    //     super (props);
    //     this.onDeleteClick = this.onDeleteClick.bind(this);

    // }

    /// aynı şekilde arrow function ile de kendi methodlarımızı bağlayabiliriz

    onDeleteClick(id,e){
        const {deleteUsers} =this.props;
        deleteUsers(id); 

        console.log("clicked");
        console.log(id);
    }

    render(){

        const {id,name,email,comments} = this.props;
        return(

            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td> <i><strong>"{comments}" </strong> </i> </td>
                <td><button onClick= {this.onDeleteClick.bind(this,id)} className="btn btn-danger"> Delete</button></td>

            </tr>
        )
    }
}

export default User;