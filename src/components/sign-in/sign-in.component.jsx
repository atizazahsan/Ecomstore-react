import React from 'react';
import "../sign-in/sign-in.component-styles.scss";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// firebase sign in component 
import {signInWithGoogle} from '../../components/firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }
   
    handleSubmit = event => {
        event.preventDefault();

        this.setState({email : '' , password : ''});
    }

   handleChange = event => {
       const {value , name } = event.target;

       this.setState({[name] : value});
   } 
    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I have already an account</h2>
                <span className="text">Sign in with your email and password</span>

                <form className="" onsubmit={this.handleSubmit}>
                    <FormInput type="email" label="email" name="email" value={this.state.email} />
                    
                    <FormInput 
                        type="password"
                        name="password"
                        label="password"
                        handleChange={this.handleChange} 
                        value={this.state.password} required
                    />
    
                    <div className="buttons">
                    <CustomButton type="submit"> SigIn </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    {''}
                     SigIn With Google {''} </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;