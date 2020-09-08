import React,{useState,useEffect} from 'react'
import './sign-in.styles.scss';
import { connect }  from 'react-redux'
import { googleSignInStart,emailSignInStart} from '../../redux/user/user.actions'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
const SignIn =({emailSignInStart,googleSignInStart})=>{
    const [userCredential,setCredentials]= useState({email:'',password:''})
    const {email,password} = userCredential;

   const handleSubmit =async (e)=>{
        e.preventDefault();

        emailSignInStart(email,password)
    }

   const handleChange=(e)=>{
        const {value,name} = e.target;

        setCredentials({...userCredential,[name]:value})
    }



        
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput type="email" label='email' name="email" value={email} handleChange={handleChange} required/>
                    
                    <FormInput type="password" label='password' name="password" value={password} handleChange={handleChange} required/>
                    
                    <div className="button">
                    <CustomButton type="submit">Submit Form</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                    

                </form>
            </div>
        )
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn)