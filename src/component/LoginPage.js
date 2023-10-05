
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import api from '../services/api';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); 
  const handleLogin = async () => {
    try {
      
      const response = await api.post('/login', { email, password });

     
      if (response.status === 200 && response.data && response.data.token) {
        const token = response.data.token;

        sessionStorage.setItem('token', token);

       
        history.push('/dashboard');
      } else {
      
        console.error('Login failed. Invalid response.');
      }
    } catch (error) {
     
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;


