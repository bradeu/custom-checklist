import { useState } from 'react'
import './assets/styles/App.css'
import {login} from './services/authService'

function App() {
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await login("bradeu01@gmail.com", "brad12345");
      setToken(response);
    } catch (error) {
      console.error("Login failed", error);
      setToken("Login failed");
    }
  };

  return (
    <>
      <h1>hello world</h1>
      <button onClick={() => {
        handleLogin();
        console.log("pressed");
      }}>Token : {token}</button>
    </>
  )
}

export default App
