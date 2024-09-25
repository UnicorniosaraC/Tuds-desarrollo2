import './App.css';
import Menu from './components/Menu';
import TopHeader from './components/TopHeader';
import Content from './components/Content';
import { useState, useEffect } from 'react';
import { Api } from './lib/api';


function App() {
  const [menuVisibility, setMenuVisibility] = useState(true);
  const [roles, setRoles] =useState(["user"]);
  const [message, setMessage] = useState('');

  Api.setMessageForAutoCheck = setMessage;

  useEffect(() =>{
    const auth = sessionStorage.getItem('Authorization');
    if (auth){
      Api.defaultHeaders.Authorization = auth 
      const roles = JSON.parse(sessionStorage.getItem('roles') ?? '[]');
      setRoles(roles);
    }
  }, [])

  return (
    <div className="App">
  <TopHeader menuVisibility={menuVisibility} setMenuVisibility={setMenuVisibility} />
    <div id="body">
    <Menu menuVisibility={menuVisibility} roles={roles}/>
    <Content setRoles={setRoles} />

  </div>
  </div>
  )
}

export default App