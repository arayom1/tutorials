import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    firstNameChange = e => {
        if (this.state.firstName.length === 0){
            alert("field is empty");
        }
    };

    onSubmit =(e) => {

        console.log("currentState", this.state);
        
        console.log(this.state);
        if (this.state.firstName.length === 0){
            console.log("first name is empty");
            alert('first name can not be left blank');
        }else if (this.state.lastName.length === 0){
            console.log("last name is empty");
            alert('last name can not be left blank');
        }else if (this.state.username.length === 0){
            console.log("username is empty");
            alert('username can not be left blank');
        }else if (this.state.email.length === 0){
            console.log("email field is empty");
            alert('email field can not be left blank');
        }else if (this.state.password.length <= 5){
            console.log("password field is empty");
            alert('password should be more than five characters');
        }else{
            e.preventDefault();
            this.props.onSubmit(this.state);
        //     this.setState({
        //     firstName: '',
        //     lastName: '',
        //     username: '',
        //     email: '',
        //     password: '',
        // });

        }
    };

    render() {
        return (
            <form>
                <input 
                    name = "firstName"
                    placeholder="First Name" 
                    value = {this.state.firstName} 
                    onChange = {e => this.change(e)}
                />
                <br />

                <input 
                    name = "lastName"
                    placeholder="Last Name" 
                    value = {this.state.lastName} 
                    onChange = {e => this.change(e)}
                />
                <br />

                <input 
                    name = "username"
                    placeholder="username" 
                    value = {this.state.username} 
                    onChange = {e => this.change(e)}
                />
                <br />

                <input 
                    name = "email"
                    placeholder="email" 
                    value = {this.state.email} 
                    onChange = {e => this.change(e)}
                />
                <br />

                <input 
                    name = "password"
                    type = "password"
                    placeholder="password" 
                    value = {this.state.password} 
                    onChange = {e => this.change(e)}
                />
                <br />

                <button onClick={e => this.onSubmit(e)}> Submit </button>
            </form>
        );
    }
}