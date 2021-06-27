import React, { Component } from "react";
import User from "./user";


class Users extends Component {

    render() {
        const {user, deleteUsers} = this.props;
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Comments</th>

                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {
                   user.map(user => {
                       const {id, name,email,comments}= user;
                       return <User key ={id}
                       id = {id}
                       name= {name}
                       email = {email} 
                       comments = {comments}
                       deleteUsers= {deleteUsers}
                       
                       />
                   })}
                </tbody>

            </table>
        )
    }


}

export default Users;