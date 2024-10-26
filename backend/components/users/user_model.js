import mongoose, {Schema} from "mongoose";

/*
            uuid: 'ff39511d-a77c-49df-9364-1f396c807285',
            username: 'Admin',
            displayName: 'Administrator',   
            hashedPassword:
*/

export const UserModel = mongoose.model(
    'User',
     new Schema({ 
        uuid: String,
        username: String,
        displayName: String,
        hashedPassword: String,
        roles: String,
        productos:[
        {
          ID: Number, Precio: Number, Nombre: String, Imagen: String,
        }
        ],  
    })
    );

export class UserMongo {
    async getList (filters/*filter, options*/){
        return UserModel.find(filters).exec();
    }

    async create(data) {
      try {
        const Usuario = await UserModel.create(data);
        return Usuario;
      } catch (error) {
        throw new Error(`Error al crear el usuario: ${error.message}`);
      }
    }
}

