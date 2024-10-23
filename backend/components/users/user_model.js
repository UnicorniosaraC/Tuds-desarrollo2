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
    })
    );

export class UserMongo {
    async getList (filters/*filter, options*/){
        return UserModel.find(filters).exec();
    }


    async create(data){
        await UserModel.create({
            uuid: `${data.uuid}`,
            username: `${data.username}`,
            displayName: `${data.displayName}`,
            hashedPassword: `${data.hashedPassword}`,

          }).then(() => {
            console.log('User created successfully');
          }).catch((error) => {
            console.error('Error creating user:', error);
          });
          

    }
}

