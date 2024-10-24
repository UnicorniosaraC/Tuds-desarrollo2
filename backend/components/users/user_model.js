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
        isEnabled: Boolean,
        roles: String,
        productos:[{ID: String, Precio: String}],  
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
        throw new Error(`Error al crear el equipo: ${error.message}`);
      }
    }
}

