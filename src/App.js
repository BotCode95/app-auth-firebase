import React from 'react';
import './App.css';
import {useFirebaseApp} from 'reactfire'
import Auth from './Auth'
import { useUser } from 'reactfire'

function App() {
  // const firebase = useFirebaseApp();
  const user = useUser();
  // console.log(firebase);
  return (
    <div className="App">
     
      {user && <p>Hello Wordl! Usuario: {user.email}</p>}
      
      <Auth />
    </div>
  );
}

export default App;
