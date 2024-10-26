import { TiendaService } from './TiendaService.js';
import { UserModel } from '../users/user_model.js';
export class TiendaController {
  constructor() {
    this.userService = new TiendaService();
  }

  async agregarProducto(req, res) {
    const { userUUID, ID, Precio, Nombre,Imagen } = req.body;

    try {
      await this.userService.agregarProducto(userUUID, ID, Precio,Nombre,Imagen);
      res.status(200).json({ message: 'Producto agregado exitosamente' });
    } catch (error) {
      console.error("Error en agregarProducto:", error);
      res.status(500).json({ error: error.message });
    }
  }
  async obtenerProductos(req, res) {
    const { userUUID } = req.params; // Obtener el UUID del usuario desde los parámetros de la URL

    try {
      const productos = await this.userService.obtenerProductos(userUUID); // Llama a la función en el servicio
      res.status(200).json({ productos });
    } catch (error) {
      console.error("Error en obtenerProductos:", error);
      res.status(500).json({ error: error.message });
    }
  }
}
