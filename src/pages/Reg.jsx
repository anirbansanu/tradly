import React from 'react';
import SignUP from '../components/SignUP';


class Reg extends React.Component{
    constructor(props){
        super(props);
        this.state={
          email: '',
          password: '',
          status: false
        }
    }
    handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Register")

    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
        
    };
    render(){
        return(
                <SignUP/> 
            )
        }
}

export default Reg;