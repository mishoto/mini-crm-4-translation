import React, { useState, useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useAuthContext } from '../../context/authContext';
import style from './signUp.module.css';

const SignUp = () => {
  const [appUser, setAppUser] = useState();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const role = useRef();
  const { signUpWithFirebase } = useAuthContext();

  const createAppUser = (firstName, lastName, email, role) => {
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
    };
    return newUser;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = createAppUser(
      firstName.current.value,
      lastName.current.value,
      email.current.value,
      role.current.value,
    );
    setAppUser(currentUser);
    signUpWithFirebase(email.current.value, password.current.value);
  };

  return (
    <>
      <Card className={style.sign_up_card}>
        <Card.Body className={style.sign_up_body}>
          <h3> Sign Up</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group id='firstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='firstName'
                ref={firstName}
                required></Form.Control>
            </Form.Group>
            <Form.Group id='lastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='lastName'
                ref={lastName}
                required></Form.Control>
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={email} required></Form.Control>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                ref={password}
                autoComplete='current-password'
                required></Form.Control>
            </Form.Group>
            <Form.Group id='passwordConfirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type='password'
                ref={passwordConfirm}
                required></Form.Control>
            </Form.Group>
            <Form.Group id='role'>
              <Form.Label>Sign Up as:</Form.Label>
              <Form.Select ref={role}>
                <option value={'client'}>client</option>
                <option value={'translator'}>translator</option>
                <option value={'manager'}>manager</option>
                <option value={'admin'}>admin</option>
              </Form.Select>
            </Form.Group>
            <Button className={style.btn_sign_up} type='submit'>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default SignUp;
