import { useNavigate, Link } from 'react-router-dom';
import { Api } from '../lib/api'; 
import "./login.css";
import NoEmptyErrors from './NoEmptyErrors'; 
import { useState } from 'react';

const Login =({ setRoles }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function login(evt) {
    evt.preventDefault();
    setError('');

    const body = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    };

    Api.post('login', { body, autoCheck: false })  
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          setError(json.message);
        } else {
          const auth = 'Bearer ' + json.authorizationToken;
          const roles= json.roles || [];

          sessionStorage.setItem('Authorization', auth)
          sessionStorage.setItem('roles', JSON.stringify(roles));

          Api.defaultHeaders.Authorization = auth;
          setRoles(json.roles || []);
          navigate('/home');
        }
      })
      .catch(e => {
        if (e.message) {
          setError(e.message);
        } else {
          setError(String(e));
        }
      });
  }

  return (
    <div className="form">
      <h2>
        INICIAR SISTEMA 
      </h2>
        <NoEmptyErrors msg={error} />
      <form onSubmit={login}>
        <ul className="fields">
          <li  className="field">
            <label htmlFor="username">Nombre:</label>
            <input id="username" name='username' type='text'/>
          </li>
          <li className="">
            <label htmlFor="password">Contraseña:</label>
            <input id="password" name='password' type='password' />
          </li>
          <li className="field center">
            <button type="submit">
              Ingresar
            </button>
            <Link to='/home'>
              <button type="button">
                Volver
              </button>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Login;
