import React, { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import './LoginForm.scss';

const url = "/api/auth/login"

export const LoginForm = () => {
  const [formValues, handleInputChange] = useForm({
    username: '',
    password: ''
  });

  const { username, password } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues),
    });
    const data = await resp.json();
    console.log("Data: ", data);
    if (data.success) {
      localStorage.setItem('access_token', data.token);
    }
    alert(data.msg);
  };

  return (
    <div>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <hr></hr>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            name='username'
            type='text'
            placeholder='Your username'
            autoComplete='off'
            className='form-control'
            value={username}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Your password'
            autoComplete='off'
            className='form-control'
            value={password}
            onChange={handleInputChange}
          ></input>
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  );
}