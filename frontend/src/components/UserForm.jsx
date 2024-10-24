import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Api} from '../lib/api'
import { toast } from "sonner";
const UserForm = () => {
  const navigate = useNavigate();
    // Definición de estados para cada campo del formulario
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [Productos, setProductos] =  useState([{ ID: "", Precio: "" }]);


  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    let Usuario = {
      displayName: displayName,
      username: username,
      roles: role,
      password: password,
      Productos: [],
    }
    Productos.forEach((Producto, index) => {
      Usuario.Productos[index] = {
        ID: Producto.ID,
        Precio: Producto.Precio
      };
    });
   
  try {
    const response = await Api.post('user', { body: Usuario });

    // Imprimir el estado y el cuerpo de la respuesta para depuración
    console.log('Response Status:', response.status);
    console.log('Response Body:', await response.text()); // Leemos el texto de la respuesta

    // Verifica si la respuesta es OK
    if (response.ok) {
      // Solo intenta leer JSON si la respuesta no es 204
      if (response.status !== 204) {
        const data = await response.json();
        // Aquí podrías manejar el contenido de `data` si es necesario
      }
      toast.success('Usuario creado correctamente');
      navigate('/Catalogo');
      // Restablece el formulario
      setDisplayName('');
      setUsername('');
      setPassword('');
      setRole('');
      setProductos([{ ID: "", Precio: "" }]);
    } else {
      // Maneja errores en caso de que la respuesta no sea OK
      const data = await response.json().catch(() => ({})); // Previene otro error al intentar parsear
      throw new Error(data.message || 'Error desconocido');
    }
  } catch (error) {
    console.error('Error al cargar el usuario:', error);
    toast.error('Ocurrió un error al cargar el usuario');
  }
};
  return (
    <div className='formulariousuario'>
      <h2>Formulario de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Roles:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Habilitado:</label>
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={(e) => setIsEnabled(e.target.checked)}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default UserForm;
