import {Routes, Route } from "react-router-dom"
import Login from './Login';
import UserList from './UserList';
import UserForm from './UserForm';
import Home from './Home';

const Content = ({setRoles}) => {
  return (
    <div id="Content">
        <Routes>
            <Route path="home" element={< Home />}/>
            <Route path="login" element={<Login setRoles={setRoles}/>} />
            <Route path="user-list" element={<UserList />}/>
            <Route path="user-form" element={<UserForm />}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={"no encontrado"}/>
        </Routes>
   
    </div>
  )
}
export default Content