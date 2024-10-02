import { Link } from 'react-router-dom';
import { Api } from '../lib/api';
import { useEffect, useState } from 'react';
import { SvgIcon } from '@mui/material';
import IconUsers from '@mui/icons-material/People';
import IconAdd from '@mui/icons-material/AddCircle';
import IconEdit from '@mui/icons-material/Edit';
import IconDelete from '@mui/icons-material/Delete';
import IconEnable from '@mui/icons-material/CheckCircle';
import IconDisable from '@mui/icons-material/Cancel';
import IconEnabled from '@mui/icons-material/Check';
import IconDisabled from '@mui/icons-material/Clear';

const UserList = () => {
  let [filas, setFilas] = useState([]);

  useEffect(() => {
    Api.get('user')
      .then(res => res.json())
      .then(userList => {
        console.log(userList)
        setFilas(userList?.map(user => {
          var check, enabled, color;

          if (user.isEnabled) {
            check = IconDisable;
            enabled = IconEnabled;
            color = 'success';
          } else {
            check = IconEnable;
            enabled = IconDisabled;
            color = 'error';
          }

          return (
            
            <tr key={user.uuid}>
              <td>{user.username}</td>
              <td>{user.userdisplayName}</td>
              <td className="center"><SvgIcon className={color + " icon"} component={enabled} /></td>
              <td>{user.roles}</td>
              <td className="actions">
                <a href="/user"><SvgIcon className="icon button" component={check} /></a>
                <a href="/user"><IconEdit className="icon button" /></a>
                <a href="/user"><IconDelete className="icon button" /></a>
              </td>
            </tr>
          );
        }));
      })
      .catch(() => {});

  }, []);

  return (
    <div>
      <table className="table-data-list">
        <caption>
          <IconUsers className="icon" />
          usuarios
          <Link to='/user-form'><IconAdd className="icon button" alt="agregar" title="agregar usuario" /></Link>
        </caption>
        <thead className='hilo'>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Habilitado</th>
            <th>Roles</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filas}
        </tbody>
      </table>
    </div>
  )
}

export default UserList;
