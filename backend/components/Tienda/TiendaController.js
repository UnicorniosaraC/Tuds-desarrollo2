import { TiendaService } from './TiendaService.js';
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
  async obtenerProductosUsuario(req, res) {
    const { uuid } = req.params;

    try {
      console.log("Buscando usuario con UUID:", uuid);
      const user = await this.userService.getUserByUuid(uuid);
      res.status(200).json({ productos: user.productos });
    } catch (error) {
      console.error("Error en obtenerProductosUsuario:", error.message); // Agrega este log para verificar el error
      res.status(500).json({ error: error.message });
    }
  }
  async eliminarProducto(userUUID, productIndex) {
  const user = await UserModel.findOne({ uuid: userUUID });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  if (productIndex < 0 || productIndex >= user.productos.length) {
    throw new Error('Índice de producto no válido');
  }

  // Elimina el producto en la posición especificada
  user.productos.splice(productIndex, 1);
  await user.save();
  return user;
}
async eliminarProducto(req, res) {
  const { userUUID, productIndex } = req.params;

  try {
    const user = await this.userService.eliminarProducto(userUUID, parseInt(productIndex, 10));
    res.status(200).json({ message: 'Producto eliminado exitosamente', user });
  } catch (error) {
    console.error("Error en eliminarProducto:", error);
    res.status(500).json({ error: error.message });
  }
}
}


