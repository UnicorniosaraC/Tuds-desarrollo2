import { Dependency } from '../../libs/dependency.js';
import { UserModel } from '../users/user_model.js';

export class TiendaService {
  constructor() {
    this.userData = Dependency.get('userData');
  }

  async agregarProducto(userUUID,ID,Precio,Nombre,Imagen) {
    // Verifica si el usuario existe
    const user = await UserModel.findOne({ uuid: userUUID });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    // Agrega solo el ID y el Precio del producto a la lista de productos del usuario
    user.productos.push({ ID, Precio,Nombre,Imagen });
    await user.save();
    
    return user; // Puedes devolver el usuario actualizado o un mensaje de éxito si lo prefieres
  }
  async obtenerProductos(userUUID) {
    const user = await UserModel.findOne({ uuid: userUUID });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    return user.productos; // Retorna los productos del usuario
  }
  async getUserByUuid(uuid) {
    try {
      const user = await UserModel.findOne({ uuid });
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      return user;
    } catch (error) {
      console.error("Error en getUserByUuid:", error); // Agregar log para depuración
      throw new Error(error.message); // Lanza el mensaje de error recibido
    }
  }
}