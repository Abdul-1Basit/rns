
import React from 'react'
import './App.css';
import { MiddleComponent } from './Middle';
import { UserProvider } from './Context';

function App() {
  
  
  
  return (
    <UserProvider>
   <MiddleComponent/>
   </UserProvider>
  );
}

export default App;
