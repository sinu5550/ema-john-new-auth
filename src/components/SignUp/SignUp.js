import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password didn't match");
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 charecter or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>SIgn Up</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor='email' name='email'>Email</label>
                        <input onBlur={handleEmailBlur} type='email' name='email' id='' required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='password' name='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type='password' name='paassword' id='' required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type='password' name='confirm-password' id='' required></input>
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already Have an Account ?<Link className='form-link' to='/login'>Login</Link>

                </p>
            </div>
        </div>
    );
};

export default SignUp; 