import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../useFirebase';

const Login = () => {
    const{user,loginWIthEmailAndPassword}=useFirebase()
    const navigate = useNavigate()
    const location = useLocation()
    const  emailRef = useRef('')
    const  passwordRef = useRef('')

    const handleForm = (event) =>{
        event.preventDefault()
        if(emailRef && passwordRef){
            
        loginWIthEmailAndPassword(emailRef.current.value,passwordRef.current.value)
        }
    }

    const from = location?.state?.from?.pathname || '/';

    if(user){
        navigate(from,{replace:true})
    }

    return (
        <div className='w-50 mx-auto text-start mt-5 shadow rounded p-5'>
            <h3 className='text-center'>Please Login</h3>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" className='rounded-pill' ref={emailRef} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef}  className='rounded-pill'  type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='rounded-pill px-4'>
                    Submit
                </Button>
            </Form>
                <p>Don't have an account? <Button variant='link' onClick={()=>navigate('/register')}>Regiter Now</Button></p>
        </div>
    );
};

export default Login;