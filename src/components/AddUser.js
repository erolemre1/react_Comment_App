import React, { Component } from "react";



class addUser extends Component {


    state = {
        name :"",
        email:""
    };

    onNameChange(e){
        this.setState({
          [e.target.name]: e.target.value
        });

    }
onEmailChange(e){
    this.setState({
        [e.target.name]: e.target.value
      }); 
}
onCommentsChange(e){
    this.setState({
        [e.target.name]: e.target.value
      }); 
}

  onAddSubmit(e){
    e.preventDefault();
  const {AddUser} = this.props;
  const {name,email,comments} = this.state;


  const newUser = {
      id : Math.floor(Math.random() * 99),
      name:name,
      email:email,
      comments:comments
  };
  AddUser(newUser);
    
      

  }
  
  
    render() {
        const {name,email,comments}= this.state;

    
    
        

        return (
            
            <div className="card">

               <img src="https://i.tmgrup.com.tr/gq/original/17-06/22/user_male_circle_filled1600.png" alt="" />

                <h4 className="card-header"> Add New Comment</h4>
                <div className="card-body">

                    <form onSubmit =  {this.onAddSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name" >Name </label>

                            <input type="text" name="name" id="name" placeholder="Enter Name" className="form-control labbel" value={name}  onChange = {this.onNameChange.bind(this)}
                           />
     
    
                        </div>
                        <div className="form-group textnod" >
                            <label htmlFor="email" > Email</label>

                            <input type="text" name="email" id="email" placeholder="Enter Email" className="form-control"  value={email} onChange = {this.onEmailChange.bind(this)}
                            /> 



                        </div>
                        <div>
                        <label htmlFor="text" > Comments</label> <br />

                     <textarea name="comments" id="comments" cols="30" rows="5" placeholder="Enter Comments" className="form-control" value={comments} onChange= {this.onCommentsChange.bind(this)} ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary "> Add New Comment</button>

                    </form>
                </div>


            </div>
   
        )
    }
    
}


export default addUser;