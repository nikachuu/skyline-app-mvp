import axios, { AxiosError } from 'axios';
import { AuthParams } from '../../../models/AuthParams';
import { AuthUserModel } from '../../../models/AuthUserModel';
import { AuthReponseModel } from '../../../models/AuthReponseModel';
import Api from '../../../constants/Api';
import { mapFireBaseAuthToAuthUser } from '../../../models/AuthUserModel.dto';

export class AuthDataSource {
  
  public static signIn(user: AuthParams): Promise<AuthUserModel> {
    return new Promise<AuthUserModel>((resolve, reject) => {
      axios.post<AuthReponseModel>(Api.Resource.signin, user)
        .then((user) => resolve(mapFireBaseAuthToAuthUser(user.data)))
        .catch((error) => reject(error));
    });
  }

  public static async siginUp(user: AuthParams): Promise<void> {
    try {
      await axios.post(Api.Resource.signUp, user);
    } catch (error) {
      console.log(error);
      throw new Error(`Ocorreu um erro ${error}`);
    }
  }
}